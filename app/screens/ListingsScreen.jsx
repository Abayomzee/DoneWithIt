import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("./../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great conditions",
    price: 1000,
    image: require("./../assets/jacket.jpg"),
  },
];
function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$ ${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});
