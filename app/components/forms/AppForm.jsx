import React from "react";
import { Formik } from "formik";

function AppForm({ children, initialValues, onSubmit, validationSchema }) {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
