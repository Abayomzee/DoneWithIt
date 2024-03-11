import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppTextInput from "../AppTextInput";

function AppFormField({ name, ...otherProps }) {
  const {
    errors,
    values,
    touched,
    setFieldValue,
    setFieldTouched,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
