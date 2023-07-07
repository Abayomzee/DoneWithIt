import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";

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
          <Text style={styles.description}>Sell What You Don't Need</Text>
        </View>

        <View style={styles.buttonContainer}>
          <AppButton value="login" />
          <AppButton color="secondary" value="register" />
        </View>
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
  description: {
    fontSize: 20,
    fontWeight: 600,
    marginTop: 20,
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
    gap: 20,
  },
});
