import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Container from "../components/Container";
import listingsApi from "./../api/listings";

function ListingsScreen({ navigation }) {
  // State
  const [listings, setListings] = useState([]);

  // Methods
  const loadListings = async () => {
    const response = await listingsApi.getListings();
    setListings(response.data);
    console.log(response.data);
  };

  // Effects
  useEffect(() => {
    loadListings();
  }, []);

  // Data to display
  return (
    <Screen style={styles.screen}>
      <Container>
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
