import AccountList from "@/components/Account/AccountList";
import Card from "@/components/Account/Card";
import Header from "@/components/Account/Header";
import { Stack } from "expo-router";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { accountsCollection, database } from "@/src/db";
import EnhancedAccountList from "@/components/Account/AccountList";

export default function TabTwoScreen() {
  const [newAccount, setNewAccount] = useState<{
    name: string;
    cap: string;
    tab: string;
  }>({ name: "", cap: "", tab: "" });

  const dropTable = async () => {
    try {
      await database.write(async () => {
        await database.unsafeResetDatabase();
      });
      console.log("Table dropped successfully");
    } catch (error) {
      console.log("Error dropping table:", error);
    }
  };

  const rebuildDatabase = async () => {
    try {
      await database.adapter.unsafeResetDatabase();
      console.log("Database rebuilt successfully");
    } catch (error) {
      console.log("Error rebuilding database:", error);
    }
  };

  const CreateAccount = async () => {
    if (
      newAccount.name === "" &&
      newAccount.cap === "" &&
      newAccount.tab === ""
    ) {
      alert("Account credentials are required to create a new account");
      return;
    }

    await database
      .write(async () => {
        await accountsCollection.create((account) => {
          account.name = newAccount.name;
          account.cap = +newAccount.cap;
          account.tap = +newAccount.tab;
        });
      })
      .then((res: any) => {
        setNewAccount({ name: "", cap: "", tab: "" });
        console.log(res, "res");
      })
      .catch((err: any) => {
        console.log(err, "err");
      });
  };

  // const onRead = async (data?: any) => {
  //   const account = await accountsCollection.query().fetch();
  //   // console.log(account, "postsCollection");
  // };

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
          <EnhancedAccountList />
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
            onChangeText={(text: string) =>
              setNewAccount((prevState) => ({ ...prevState, cap: text }))
            }
          />
          <TextInput
            value={newAccount.tab}
            placeholder="TAP %"
            style={styles.input}
            onChangeText={(text: string) =>
              setNewAccount((prevState) => ({ ...prevState, tab: text }))
            }
          />
          <Entypo name="check" size={20} color="green" />
        </View>
        <Button title="Add Account" onPress={CreateAccount} />
        {/* <Button title="Read Account" onPress={() => onRead(newAccount)} /> */}
        {/* <Button title="Drop Account Table" onPress={dropTable} /> */}
        {/* <Button title="Rebuild Database" onPress={rebuildDatabase} /> */}
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
