import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../../config/colors";
import appStyles from "../../config/appStyles";

const CustomText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[appStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export default CustomText;

const styles = StyleSheet.create({
  customText: {
    color: "black",
  },
});
