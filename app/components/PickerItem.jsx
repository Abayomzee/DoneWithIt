import React from "react";
import { TouchableOpacity, Text } from "react-native";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ padding: 20 }}> {item.label} </Text>
    </TouchableOpacity>
  );
}

export default PickerItem;
