import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.BOX}>
      <Text
        style={{
          flex: 1.5,
        }}
      >
        Name
      </Text>
      <Text
        style={{
          flex: 1,
        }}
      >
        CAP
      </Text>
      <Text
        style={{
          flex: 1,
          textAlign: "right",
        }}
      >
        TAP
      </Text>
      <Text
        style={{
          flex: .5,
          textAlign: "right",
        }}
      >
        
      </Text>
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
