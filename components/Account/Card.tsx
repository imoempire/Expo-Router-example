import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Account from "@/src/models/Account";

type Card = {
  item: Account;
};

const Card = ({ item }: Card) => {
  // console.log(item?.tap);

  return (
    <View style={styles.BOX}>
      <Text style={styles.textName}>{item?.name}</Text>
      <Text style={styles.Percentage}>{item?.cap}%</Text>
      <Text style={[styles.Percentage, { textAlign: "right" }]}>
        {item?.tap}%
      </Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  BOX: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    textAlign: "center",
  },
  textName: {
    flex: 1.5,
    fontSize: 16,
    fontWeight: "bold",
  },
  Percentage: {
    flex: 1,
  },
});
