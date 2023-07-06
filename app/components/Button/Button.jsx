import { Text, View } from "react-native";
import colors from "../../config/colors";

import styles from "./style";

const Button = (props) => {
  // Props
  const { value, children, color } = props;

  // Data to display
  return (
    <View
      style={{
        ...styles.button,
        backgroundColor: colors[color] || colors.primary,
      }}
    >
      <Text style={styles.text}>{value || children}</Text>
    </View>
  );
};

export default Button;
