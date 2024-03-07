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
    width: "100%",
    // height: 50,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    position: "absolute",
    justifyContent: "cener",
    top: Constants.statusBarHeight,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
