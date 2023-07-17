import React from "react";
import { Image, StyleSheet } from "react-native";
import * as yup from "yup";

import Container from "../components/Container";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

function RegisterSreen(props) {
  return (
    <Screen>
      <Container>
        <Image
          style={styles.logo}
          source={require("./../assets/logo-red.png")}
        />
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
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
