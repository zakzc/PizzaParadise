import { PlatformColor } from "react-native";

export default {
  text: {
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
};
