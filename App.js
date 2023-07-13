import { useState } from "react";
import { View } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [selected, setSelected] = useState("");
  return (
    <Screen>
      <View style={{ paddingHorizontal: 20 }}>
        <AppTextInput placeholder="First Name" icon="email" />
        <AppPicker
          selected={selected}
          onSelected={setSelected}
          items={categories}
          placeholder="Category"
          icon="apps"
        />
      </View>
    </Screen>
  );
}
