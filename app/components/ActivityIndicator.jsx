import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

function ActivityIndicator({ visible }) {
  if (!visible) return null;
  return (
    <View
      style={{
        top: 0,
        zIndex: 1,
        opacity: 0.7,
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "white",
      }}
    >
      <LottieView
        loop
        autoPlay
        style={{
          width: 200,
          height: 200,
          marginTop: 80,
          alignSelf: "center",
        }}
        source={require("../assets/animations/loader.json")}
      />
    </View>
    // </Screen>
  );
}

export default ActivityIndicator;
