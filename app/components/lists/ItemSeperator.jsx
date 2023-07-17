import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";

const ItemSeperator = () => {
  // Data to display
  return <View style={styles.container} />;
};

export default ItemSeperator;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
