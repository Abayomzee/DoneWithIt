import { Image, Text, View, StyleSheet } from "react-native";

import colors from "../config/colors";

const ListItem = (props) => {
  // Props
  const { title, subTitle, image } = props;

  // Data to display
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.compose({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
  },
  subTitle: {
    color: colors.medium,
    fontSize: 15,
    marginTop: 4,
  },
});
