import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { accountsCollection } from "@/src/db";
import { withObservables } from "@nozbe/watermelondb/react";
import Account from "@/src/models/Account";

const AccountList = ({ Accounts }: { Accounts: Account[] }) => {
  return (
    <FlatList
      data={Accounts}
      contentContainerStyle={{ gap: 10 }}
      renderItem={({ item }) => {
        return <Card item={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({});

const enhance = withObservables([], () => ({
  Accounts: accountsCollection.query(),
}));

const EnhancedAccountList = enhance(AccountList);
export default EnhancedAccountList;
