import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const Home = () => {
  return <Redirect href={"/allocations"} />;
};

export default Home;
