import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import Container from "../components/Container";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen>
      <Container>
        <Image
          style={styles.logo}
          source={require("./../assets/logo-red.png")}
        />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => (
            <>
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
            </>
          )}
        </Formik>
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
