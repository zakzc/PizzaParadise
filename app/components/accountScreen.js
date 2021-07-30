import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
// comps

import IconComp from "./views/iconComp";
import ListItems from "./listItems";
import Separator from "./views/separator";

const menuItems = [
  {
    title: "my lists",
    icon: { name: "format-list-bulleted", backgroundColor: "orange" },
  },
  {
    title: "my messages",
    icon: { name: "format-list-bulleted", backgroundColor: "green" },
  },
];

export default function AccountScreen(props) {
  return (
    <View style={styles.container}>
      <View>
        <ListItems
          listHeading={"head"}
          listText={"toe"}
          ImageComponent={
            <IconComp
              iconName={"alert-outline"}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 10, backgroundColor: "aliceblue" },
  listArea: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "white",
  },
});
