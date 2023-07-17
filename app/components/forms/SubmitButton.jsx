import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function SubmitButton({ value, style }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton style={style} value={value} onPress={handleSubmit} />;
}

export default SubmitButton;
