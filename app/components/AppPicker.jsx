import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  Button,
  FlatList,
} from "react-native";

import defaultStyles from "./../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Modal } from "react-native";
import Screen from "./Screen";
import Container from "./Container";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, placeholder, selected, onSelected }) {
  // States
  const [showOptions, setShowOptions] = useState(false);

  // Data to display
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowOptions(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
            />
          )}
          {selected ? (
            <Text style={[styles.input, defaultStyles.text]}>
              {selected.label}
            </Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={showOptions} animationType="fade">
        <Screen>
          <Container>
            <Button onPress={() => setShowOptions(false)} title="Close modal" />
            <FlatList
              data={items}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <PickerItem
                  label={item.label}
                  onPress={() => {
                    setShowOptions(false);
                    onSelected(item);
                  }}
                />
              )}
            />
          </Container>
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: defaultStyles.colors.light,
    padding: 13,
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
    borderRadius: 25,
    marginVertical: 10,
  },
  input: { flex: 1 },
  placeholder: { flex: 1, color: defaultStyles.colors.medium },
});

export default AppPicker;
