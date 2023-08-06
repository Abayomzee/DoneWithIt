import React from "react";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible }) {
  if (!visible) return null;
  return (
    <LottieView
      loop
      autoPlay
      style={{
        width: 200,
        height: 200,
        alignSelf: "center",
        marginTop: 80,
      }}
      source={require("../assets/animations/loader.json")}
    />
    // </Screen>
  );
}

export default ActivityIndicator;
