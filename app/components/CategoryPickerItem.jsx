import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import Icon from "./Icon";

function CategoryPickerItem(props) {
  const { onPress, item } = props;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={60}
        />
        <Text style={styles.label}>{item.label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: { marginTop: 5, textAlign: "center" },
});

export default CategoryPickerItem;
