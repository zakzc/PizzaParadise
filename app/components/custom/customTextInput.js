import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
// icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CustomTextInput({
  icon,
  width = "100%",
  ...otherProps
}) {
  const [textContents, setTextContents] = useState("");

  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.iconStyle}
          name={icon}
          size={20}
          color={"brown"}
        />
      )}
      <TextInput style={styles.textInputStyle} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "aliceblue",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flexDirection: "row",
    margin: 5,
    borderRadius: 25,
    height: 40,
  },
  iconStyle: { marginLeft: 10, marginTop: 5, padding: 1 },
  textInputStyle: {
    marginLeft: 15,
    marginBottom: 5,
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontSize: 18,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 20,
        fontFamily: "Roboto",
      },
    }),
  },
});
