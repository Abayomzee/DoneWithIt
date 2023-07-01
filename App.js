// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  StatusBar,
  Platform,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me!"
        onPress={() =>
          Alert.prompt("My title", "Button Tapped!", (text) =>
            console.log(text)
          )
        }
      />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "android" ? "red" : "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
