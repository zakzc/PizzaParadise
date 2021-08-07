import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
// comps
import IconComp from "../views/iconComp";
import ListItems from "../custom/listItems";
import Separator from "../views/separator";
// custom
import CustomButton from "../custom/customButton";
// ui
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { white } from "ansi-colors";
import CustomView from "../custom/customView";

const menuItems = [
  {
    title: "My Previous Orders",
    icon: { name: "format-list-bulleted", backgroundColor: "orange" },
  },
  {
    title: "My Data",
    icon: { name: "format-list-bulleted", backgroundColor: "green" },
  },
];

export default function AccountScreen(props) {
  return (
    <CustomView style={styles.accountContainer}>
      <View>
        <ListItems
          listHeading={"John Smith"}
          listText={"Data"}
          ImageComponent={
            <IconComp
              iconName={"account"}
              size={40}
              backgroundColor={"brown"}
              iconColor={"white"}
            />
          }
        />
      </View>
      <View style={styles.listArea}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <ListItems
              listHeading={item.title}
              ImageComponent={
                <IconComp
                  iconName={item.icon.name}
                  size={40}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.buttonPositioning}>
        <CustomButton
          title={
            <MaterialCommunityIcons name={"logout"} color={"white"} size={30} />
          }
          onPress={() => {
            console.log("pressed Log out");
          }}
        />
      </View>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  accountContainer: { margin: 10, backgroundColor: "aliceblue" },
  listArea: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "white",
  },
  buttonPositioning: {
    top: 50,
    width: "100%",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
  },
});
