import AccountList from "@/components/Account/AccountList";
import Card from "@/components/Account/Card";
import Header from "@/components/Account/Header";
import { Stack } from "expo-router";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
export default function TabTwoScreen() {
  const [newAccount, setNewAccount] = useState<{
    name: string;
    cap: string;
    tab: string;
  }>({ name: "", cap: "", tab: "" });

  return (
    <>
      <Stack.Screen options={{ title: "Account" }} />
      <View
        style={{
          flex: 1,
          gap: 10,
          paddingHorizontal: 10,
        }}
      >
        <View>
          <Header />
        </View>
        <View>
          <AccountList />
        </View>
        <View style={styles.Form}>
          <TextInput
            value={newAccount.name}
            onChangeText={(text: string) =>
              setNewAccount((prevState) => ({ ...prevState, name: text }))
            }
            placeholder="Name"
            style={styles.input}
          />
          <TextInput
            value={newAccount.cap}
            placeholder="CAP %"
            style={styles.input}
          />
          <TextInput
            value={newAccount.tab}
            placeholder="TAP %"
            style={styles.input}
          />
          <Entypo name="check" size={20} color="green" />
        </View>
        <Button title="Add Account" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
  input: {
    flex: 1,
    // borderWidth: 1,
    // padding: 2,
    // borderRadius: 2
  },
});
