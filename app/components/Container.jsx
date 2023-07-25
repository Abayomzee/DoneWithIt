import React from "react";
import { View } from "react-native";

function Container({ children, style }) {
  return <View style={[style, { paddingHorizontal: 15 }]}>{children}</View>;
}

export default Container;
