import React from "react";
import { useFormikContext } from "formik";
// custom
import CustomTextInput from "../custom/customTextInput";
import ErrorMessage from "./customForm_ErrorMessage";

export default function CustomFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  // * view
  return (
    <>
      <CustomTextInput
        width={width}
        Input
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      {touched[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
}
