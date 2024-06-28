import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.BOX}>
      <Text>Name</Text>
      <Text>CAP</Text>
      <Text>TAP</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  BOX: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
