import React from "react";
import { Image, StyleSheet } from "react-native";
import * as yup from "yup";

import Container from "../components/Container";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";

const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label("Title"),
  price: yup.string().required().min(1).max(10000).label("Price"),
  description: yup.string().required().label("Description"),
  category: yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function ListingEditSreen(props) {
  return (
    <Screen>
      <Container>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            category: null,
            description: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField placeholder="Title" name="title" autoCorrect={false} />
          <AppFormField
            placeholder="Price"
            autoCapitalize="none"
            name="price"
            autoCorrect={false}
            keyboardType="numeric"
          />
          <AppFormPicker
            placeholder="Category"
            name="category"
            items={categories}
          />
          <AppFormField
            placeholder="Description"
            name="description"
            autoCorrect={false}
            numberOfLines={3}
            multiline
          />

          <SubmitButton value="Post" style={{ marginTop: 40 }} />
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

export default ListingEditSreen;
