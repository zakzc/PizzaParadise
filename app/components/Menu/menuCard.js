import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
// custom comps
import CustomText from "../custom/customText";
// custom
//import colors from "../../config/colors";

const MenuCard = ({ cardHeading, cardText, swipeAction, imageURI }) => {
  return (
    <Swipeable renderRightActions={swipeAction}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => alert("Pressed: ", cardHeading)}
      >
        <View style={styles.customCardStyle}>
          <Image
            style={styles.imageStyle}
            // resizeMode="contain"
            source={imageURI}
          />
          <CustomText numberOfLines={1} style={styles.customHeadingStyle}>
            {cardHeading}
          </CustomText>
          <Text style={styles.customTextStyle}>{cardText}</Text>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};
export default MenuCard;

const styles = StyleSheet.create({
  customCardStyle: {
    backgroundColor: "aliceblue",
    borderRadius: 15,
    // height: "60%",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 10,
    overflow: "hidden",
  },
  customTextStyle: {
    color: "black",
  },
  imageStyle: { height: "75%", width: "75%" },
});
