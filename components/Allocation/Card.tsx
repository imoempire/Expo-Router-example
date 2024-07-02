import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { withObservables } from "@nozbe/watermelondb/react";
import { accountsCollection, database } from "@/src/db";
import Allocation from "@/src/models/Allocation";
import AccountAllocation from "@/src/models/AccountAllocations";
import AccountAllocationItem from "../AccountAllocation/AccountAllocationItem";

type Card = {
  allocations: Allocation;
  accountAllocations: AccountAllocation[];
};

const ItemCard = ({
  item,
  title,
}: {
  item: AccountAllocation;
  title: string;
}) => {
  // console.log(item?.allocation, "namess");
  const account = async () => {
    await accountsCollection.find(item?.account);
    console.log(account, "ggs");
  };
  useEffect(() => {
    async () => {
      await account();
    };
  }, []);

  return (
    <View
      key={item?.id}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <Text>{item?.id}</Text>
      <Text>¢{item.amount}</Text>
    </View>
  );
};

const Card = ({ allocations, accountAllocations }: Card) => {
  console.log(accountAllocations?.length);

  return (
    <View style={styles.Box}>
      <View style={styles.header}>
        <Text style={styles.Percentage}>
          {/* @ts-ignore */}
          {allocations?.createdAt?.toLocaleDateString()}
        </Text>
        <Text style={styles.textName}>¢{allocations?.income}</Text>
      </View>
      <View>
        {accountAllocations?.map((allocations: any) => {
          return <AccountAllocationItem accountAllocation={allocations} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Box: {
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "gainsboro",
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

const enhance = withObservables(
  ["allocations"],
  ({ allocations }: { allocations: Allocation }) => ({
    allocations,
    accountAllocations: allocations.accountAllocation,
  })
);

const EnhancedCard = enhance(Card);
export default EnhancedCard;
