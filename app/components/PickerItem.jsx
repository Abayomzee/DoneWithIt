import React from "react";
import { TouchableOpacity, Text } from "react-native";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ padding: 20 }}> {label} </Text>
    </TouchableOpacity>
  );
}

export default PickerItem;
