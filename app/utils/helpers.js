import { Platform } from "react-native";

export const renderFontFamily = () => {
  return Platform.OS === "android" ? "Roboto" : "Avenir";
};
