import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
// comps
import IconComp from "../views/iconComp";
import ListItems from "../custom/listItems";
import Separator from "../views/separator";
import CustomView from "../custom/customView";

const menuItems = [
  {
    title: "20",
    subTitle: "Pepperoni pizza",
    icon: { name: "pizza", backgroundColor: "red" },
  },
  {
    title: "30",
    subTitle: "Four cheese",
    icon: { name: "pizza", backgroundColor: "orange" },
  },
  {
    title: "3",
    subTitle: "Cola zero",
    icon: { name: "bottle-soda-classic-outline", backgroundColor: "black" },
  },
];

export default function CurrentOrder(props) {
  return (
    <CustomView style={styles.orderContainer}>
      <Text style={styles.heading}>Current Order</Text>
      <View style={styles.listArea}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <ListItems
              listHeading={item.title}
              listText={item.subTitle}
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
    </CustomView>
  );
}

const styles = StyleSheet.create({
  orderContainer: { margin: 10, backgroundColor: "aliceblue" },
  listArea: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "white",
  },
  heading: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    color: "tomato",
  },
});
