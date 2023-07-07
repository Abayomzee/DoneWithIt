import { Image, View, StyleSheet, Text } from "react-native";
import ListItem from "../components/ListItem";

import colors from "../config/colors";

const ListingDetailsScreen = (props) => {
  // Data to display
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./../assets/jacket.jpg")} />
      <View style={styles.bottom}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.price}>{"$100"}</Text>
        <View style={styles.listItemContainer}>
          <ListItem
            image={require("./../assets/mosh.jpg")}
            title="Okegbenro Abayomi"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 300,
  },
  bottom: {
    padding: 15,
    gap: 5,
  },
  title: {
    fontSize: 19,
  },
  price: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: 600,
  },
  listItemContainer: {
    paddingTop: 50,
  },
});
