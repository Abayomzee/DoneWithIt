import { View, StyleSheet, Text } from "react-native";
import { Image } from "react-native-expo-image-cache";
import ListItem from "../components/lists/ListItem";

import colors from "../config/colors";

const ListingDetailsScreen = ({ route }) => {
  const item = route.params;
  // Data to display
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        tint="light"
        preview={item.images[0].thumbnailUrl}
        uri={item.images[0].url}
      />
      <View style={styles.bottom}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
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
