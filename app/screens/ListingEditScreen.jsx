import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as yup from "yup";

import Container from "../components/Container";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "./../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label("Title"),
  price: yup.string().required().min(1).max(10000).label("Price"),
  description: yup.string().label("Description"),
  category: yup.object().required().nullable().label("Category"),
  images: yup.array().min(1, "Please select at least on image"),
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

function ListingEditSreen() {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgess] = useState(0);
  const location = useLocation();

  // Methods
  const handleSubmit = async (listing, { resetForm }) => {
    setProgess(0);
    setUploadVisible(true);
    const result = await listingsApi.addListings(
      { ...listing, location },
      (progress) => setProgess(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save listing.");
    }

    resetForm();
  };

  // Data to display
  return (
    <Screen>
      <Container>
        <UploadScreen
          onDone={() => setUploadVisible(false)}
          visible={uploadVisible}
          progress={progress}
        />
        <AppForm
          initialValues={{
            title: "",
            price: "",
            category: null,
            description: "",
            images: [],
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormImagePicker name="images" />
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
            numberOfColumns={3}
            items={categories}
            PickerItemComponent={CategoryPickerItem}
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
