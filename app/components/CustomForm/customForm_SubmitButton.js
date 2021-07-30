import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
// custom
import CustomButton from "../custom/customButton";

export default function SubmitButton({ title }) {
  // * data
  const { handleSubmit } = useFormikContext();

  // * view
  return (
    <View style={styles.buttonPositioning}>
      <CustomButton title={title} onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonPositioning: { left: "30%", height: 500, marginTop: 20 },
});
