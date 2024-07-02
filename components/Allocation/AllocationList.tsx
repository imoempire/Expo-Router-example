import { FlatList, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { accountAlloactionsCollection, alloactionsCollection } from "@/src/db";
import { withObservables } from "@nozbe/watermelondb/react";
import EnhancedCard from "./Card";
import Allocation from "@/src/models/Allocation";
import { Q } from "@nozbe/watermelondb";
import AccountAllocation from "@/src/models/AccountAllocations";

const AllocationList = ({ allocations }: { allocations: Allocation[] }) => {
  return (
    <FlatList
      data={allocations}
      contentContainerStyle={{ gap: 20 }}
      renderItem={({ item }) => {
        return <EnhancedCard allocations={item} />;
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
