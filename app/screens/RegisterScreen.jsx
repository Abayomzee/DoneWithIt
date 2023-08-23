import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as yup from "yup";

import Container from "../components/Container";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import usersApi from "./../api/users";
import authApi from "./../api/auth";
import { useAuth } from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

function RegisterSreen() {
  // States
  const [error, setError] = useState("");

  // Hooks
  const auth = useAuth();
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);

  // Methods
  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occured");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );

    setError("");
    auth.logIn(authToken);
  };

  // Data to display
  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen>
        <Container>
          <Image
            style={styles.logo}
            source={require("./../assets/logo-red.png")}
          />
          <AppForm
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <ErrorMessage visible={error} error={error} />
            <AppFormField
              icon="account"
              placeholder="Name"
              name="name"
              autoCorrect={false}
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

            <SubmitButton value="Register" style={{ marginTop: 40 }} />
          </AppForm>
        </Container>
      </Screen>
    </>
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

export default RegisterSreen;
