import React from "react";
import { StyleSheet, View } from "react-native";

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: "lightgray",
    width: "100%",
    height: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Separator;
