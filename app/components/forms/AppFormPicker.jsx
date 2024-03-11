import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import PickerItem from "../PickerItem";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  name,
  items,
  placeholder,
  numberOfColumns,
  PickerItemComponent = PickerItem,
}) {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        selected={values[name]}
        placeholder={placeholder}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        onSelected={(item) => setFieldValue(name, item)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
