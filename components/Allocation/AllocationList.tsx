import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { accountsCollection, alloactionsCollection } from "@/src/db";
import { withObservables } from "@nozbe/watermelondb/react";
import EnhancedCard from "./Card";
import Allocation from "@/src/models/Allocation";
import { Q } from "@nozbe/watermelondb";

const AllocationList = ({ allocations }: { allocations: Allocation[] }) => {
  return (
    <FlatList
      data={allocations}
      contentContainerStyle={{ gap: 20 }}
      renderItem={({ item }) => {
        return <EnhancedCard accounts={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({});

const enhance = withObservables([], () => ({
  allocations: alloactionsCollection.query(Q.sortBy("created_at", Q.desc)),
}));

const EnhancedAccountList = enhance(AllocationList);
export default EnhancedAccountList;
