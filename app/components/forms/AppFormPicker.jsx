import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";
import PickerItem from "../PickerItem";

function AppFormPicker({
  items,
  placeholder,
  name,
  PickerItemComponent = PickerItem,
  numberOfColumns,
}) {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        placeholder={placeholder}
        selected={values[name]}
        onSelected={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
