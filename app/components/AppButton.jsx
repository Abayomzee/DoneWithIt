import { Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const AppButton = (props) => {
  // Props
  const { value, children, color = "primary", onPress } = props;

  // Data to display
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.button,
        backgroundColor: colors[color],
      }}
    >
      <Text style={styles.text}>{value || children}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.compose({
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
