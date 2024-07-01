import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Account from "@/src/models/Account";
import { withObservables } from "@nozbe/watermelondb/react";
import { accountsCollection } from "@/src/db";

type Card = {
  accounts: Account;
};

const Card = ({ accounts }: Card) => {
  // console.log(item?.tap);

  return (
    <View style={styles.BOX}>
      <Text style={styles.textName}>{accounts?.name}</Text>
      <Text style={styles.Percentage}>{accounts?.cap}%</Text>
      <Text style={[styles.Percentage, { textAlign: "right" }]}>
        {accounts?.tap}%
      </Text>
    </View>
  );
};

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

const enhance = withObservables(["accounts"], ({ accounts }) => ({
  accounts: accounts.observe(),
}));

const EnhancedCard = enhance(Card);
export default EnhancedCard;
