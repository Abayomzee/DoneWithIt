import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import defaultStyles from "./../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          size={20}
          name={icon}
          color={defaultStyles.colors.medium}
        />
      )}
      <TextInput
        placeholder={placeholder}
        style={[styles.input, defaultStyles.text]}
        placeholderTextColor={defaultStyles.colors.medium}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: defaultStyles.colors.light,
    padding: 12,
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
    borderRadius: 25,
    marginVertical: 10,
  },
  input: { flex: 1 },
});

export default AppTextInput;
