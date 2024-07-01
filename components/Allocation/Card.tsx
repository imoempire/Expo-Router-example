import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Account from "@/src/models/Account";
import { withObservables } from "@nozbe/watermelondb/react";
import { database } from "@/src/db";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Allocation from "@/src/models/Allocation";

type Card = {
  accounts: Allocation;
};

const ItemCard = ({ item, title }: { item: Allocation; title: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <Text>{title}</Text>
      <Text>¢{item.income}</Text>
    </View>
  );
};

const Card = ({ accounts }: Card) => {
  const OnDelete = async () => {
    database.write(async () => {
      await accounts.markAsDeleted();
    });
  };

  return (
    <View style={styles.Box}>
      <View style={styles.header}>
        <Text style={styles.Percentage}>
          {/* @ts-ignore */}
          {accounts?.createdAt?.toLocaleDateString()}
        </Text>
        <Text style={styles.textName}>¢{accounts?.income}</Text>
        {/* <TouchableOpacity
        onPress={() => OnDelete()}
        activeOpacity={1}
        style={{
          flex: 0.5,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <MaterialCommunityIcons name="delete" size={20} color="red" />
      </TouchableOpacity> */}
      </View>
      <View>
        <ItemCard title="Profit" item={accounts} />
        <ItemCard title="Owner" item={accounts} />
        <ItemCard title="Tax" item={accounts} />
        <ItemCard title="OPEX" item={accounts} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Box: {
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'gray'
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    paddingVertical: 20,
    textAlign: "center",
  },
  textName: {
    flex: 1,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "right",
    color: "green",
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
