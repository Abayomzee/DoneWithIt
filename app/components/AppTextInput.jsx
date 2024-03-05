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
    gap: 6,
    padding: 12,
    width: "100%",
    borderRadius: 25,
    backgroundColor: defaultStyles.colors.light,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  input: { flex: 1 },
});

export default AppTextInput;
