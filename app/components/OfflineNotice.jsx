import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
import colors from "../config/colors";

function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    backgroundColor: colors.primary,
    // height: 50,
    width: "100%",
    position: "absolute",
    justifyContent: "cener",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    top: Constants.statusBarHeight,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
