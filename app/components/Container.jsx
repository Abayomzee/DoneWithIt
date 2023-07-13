import React from "react";
import { View } from "react-native";

function Container({ children }) {
  return <View style={{ paddingHorizontal: 15 }}>{children}</View>;
}

export default Container;
