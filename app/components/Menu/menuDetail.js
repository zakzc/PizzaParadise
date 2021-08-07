import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
// comps
import CustomText from "../custom/customText";

const MenuDetail = () => {
  return (
    <View>
      <Image
        style={styles.imageStyle}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/300/200",
        }}
      ></Image>
      <View style={styles.textContainer}>
        <CustomText numberOfLines={1}>Here also</CustomText>
        <Text>Hi man</Text>
      </View>
    </View>
  );
};
export default MenuDetail;

const styles = StyleSheet.create({
  imageStyle: { width: "100%", height: 300 },
  textContainer: { padding: 10 },
});
