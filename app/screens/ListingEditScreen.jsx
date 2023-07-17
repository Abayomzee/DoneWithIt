import React from "react";
import { Image, StyleSheet } from "react-native";
import * as yup from "yup";

import Container from "../components/Container";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label("Title"),
  price: yup.string().required().min(1).max(10000).label("Price"),
  description: yup.string().required().label("Description"),
  category: yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "#fc5c65", icon: "apps" },
  { label: "Cars", value: 2, backgroundColor: "#fd9644", icon: "car" },
  { label: "Cameras", value: 3, backgroundColor: "#fed330", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "#26de81", icon: "cards" },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
  },
  { label: "Sports", value: 6, backgroundColor: "#45aaf2", icon: "basketball" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#4b7bec",
    icon: "headphones",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "#894bec",
    icon: "book-open-blank-variant",
  },
  {
    label: "Other",
    value: 9,
    backgroundColor: "#585f6d",
    icon: "application",
  },
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
            // numberOfColumns={3}
            items={categories}
            // PickerItemComponent={CategoryPickerItem}
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
