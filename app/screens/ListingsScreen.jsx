import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Container from "../components/Container";
import listingsApi from "./../api/listings";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";

function ListingsScreen({ navigation }) {
  // State
  const [listings, setListings] = useState([]);
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  // Methods
  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setErrors(true);

    setErrors(false);
    setListings(response.data);
  };

  // Effects
  useEffect(() => {
    loadListings();
  }, []);

  // Data to display
  return (
    <Screen style={styles.screen}>
      <Container>
        {errors ? (
          <>
            <Text>An error occured, please try again!</Text>
            <AppButton onPress={loadListings}>Reload</AppButton>
          </>
        ) : (
          <>
            <ActivityIndicator visible={loading} />
            <FlatList
              data={listings}
              keyExtractor={(listings) => listings.id.toString()}
              renderItem={({ item }) => (
                <Card
                  title={item.title}
                  subTitle={`$ ${item.price}`}
                  imageUrl={item.images[0].url}
                  onPress={() => navigation.navigate("ListingDetails", item)}
                />
              )}
            />
          </>
        )}
      </Container>
    </Screen>
  );
}

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    // padding: 10,
    backgroundColor: colors.light,
  },
});
