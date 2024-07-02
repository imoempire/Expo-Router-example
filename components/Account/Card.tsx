import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Account from "@/src/models/Account";
import { withObservables } from "@nozbe/watermelondb/react";
import database, { accountsCollection } from "@/src/db";
import { MaterialCommunityIcons } from "@expo/vector-icons";
type Card = {
  accounts: Account;
};

const Card = ({ accounts }: Card) => {
  const OnDelete = async () => {
    database.write(async () => {
      await accounts.markAsDeleted();
    });
  };

  return (
    <View style={styles.BOX}>
      <Text style={styles.textName}>{accounts?.name}</Text>
      <Text style={styles.Percentage}>{accounts?.cap}%</Text>
      <Text style={[styles.Percentage, { textAlign: "right" }]}>
        {accounts?.tap}%
      </Text>
      <TouchableOpacity
        onPress={() => OnDelete()}
        activeOpacity={1}
        style={{
          flex: 0.5,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <MaterialCommunityIcons name="delete" size={20} color="red" />
      </TouchableOpacity>
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
