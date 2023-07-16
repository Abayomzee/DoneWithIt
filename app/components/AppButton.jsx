import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";

const AppButton = (props) => {
  // Props
  const { value, children, color = "primary", onPress, style } = props;

  // Data to display
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }, style]}
    >
      <Text style={styles.text}>{value || children}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    borderRadius: 40,
    padding: 15,
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "600",
  },
});
