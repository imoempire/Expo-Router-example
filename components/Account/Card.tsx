import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = () => {
  return (
    <View style={styles.BOX}>
      <Text style={styles.textName}>Name</Text>
      <Text style={styles.Percentage}>10%</Text>
      <Text style={styles.Percentage}>20%</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  BOX: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
  },
  textName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  Percentage: {},
});
