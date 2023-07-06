import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";

export default function WelcomeScreen() {
  return (
    <>
      <ImageBackground
        source={require("./../assets/background.jpg")}
        resizeMode="cover"
        style={styles.container}
        blurRadius={5}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("./../assets/logo-red.png")}
          />
          <Text>Sell What You Don't Need</Text>
        </View>

        <View style={styles.loginButton}></View>
        <View style={styles.signUpButton}></View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  signUpButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ECDC4",
  },
});
