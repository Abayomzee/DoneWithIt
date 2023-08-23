import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as yup from "yup";

import authApi from "./../api/auth";
import Container from "../components/Container";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import { useAuth } from "../auth/useAuth";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  // State
  const [loginFailed, setLoginFailed] = useState(false);

  const { logIn } = useAuth();

  // Method
  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    logIn(result.data);
  };

  // Data to display
  return (
    <Screen>
      <Container>
        <Image
          style={styles.logo}
          source={require("./../assets/logo-red.png")}
        />
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error="Invalid email and/or password"
            visible={loginFailed}
          />
          <AppFormField
            icon="email"
            placeholder="Email"
            autoCapitalize="none"
            name="email"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            icon="lock"
            placeholder="Password"
            autoCapitalize="none"
            name="password"
            autoCorrect={false}
            textContentType="password"
            secureTextEntry
          />

          <SubmitButton value="Login" style={{ marginTop: 40 }} />
        </AppForm>
      </Container>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginVertical: 50,
  },
});

export default LoginScreen;
