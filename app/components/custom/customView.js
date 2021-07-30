import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

const CustomView = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screenStyle, style]}>
      <View style={styles.internalViewStyle}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  internalViewStyle: { flex: 1 },
});

export default CustomView;
