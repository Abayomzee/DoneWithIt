import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.compose({
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: "center",
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontSize: 18,
  },
});
export default styles;
