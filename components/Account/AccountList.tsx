import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";

const AccountList = () => {
  return (
    <FlatList
      data={[1, 2, 3, 4]}
      contentContainerStyle={{ gap: 10 }}
      renderItem={({ item }) => {
        return <Card />;
      }}
    />
  );
};

export default AccountList;

const styles = StyleSheet.create({});
