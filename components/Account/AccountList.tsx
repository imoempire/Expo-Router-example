import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { accountsCollection } from "@/src/db";
import { withObservables } from "@nozbe/watermelondb/react";
import Account from "@/src/models/Account";
import EnhancedCard from "./Card";

const AccountList = ({ Accounts }: { Accounts: Account[] }) => {
  return (
    <FlatList
      data={Accounts}
      contentContainerStyle={{ gap: 10 }}
      renderItem={({ item }) => {
        return <EnhancedCard accounts={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({});

const enhance = withObservables([], () => ({
  Accounts: accountsCollection.query().observe(),
}));

const EnhancedAccountList = enhance(AccountList);
export default EnhancedAccountList;
