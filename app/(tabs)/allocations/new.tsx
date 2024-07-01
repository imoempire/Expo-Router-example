import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { Stack, router } from "expo-router";
import { useState } from "react";
import { alloactionsCollection, database } from "@/src/db";
import Allocation from "@/src/models/Allocation";

export default function NewAllowcation() {
  const [NewAllowcation, setNewAllowcation] = useState<{
    income: string;
  }>({ income: "" });

  const CreateAccount = async () => {
    if (NewAllowcation.income === "") {
      alert("Input value is required to create a new account");
      return;
    }

    await database
      .write(async () => {
        await alloactionsCollection.create((allocation) => {
          allocation.income = +NewAllowcation.income;
        });
      })
      .then((res: any) => {
        setNewAllowcation({ income: "" });
        console.log(res, "res");
        router.back()
      })
      .catch((err: any) => {
        console.log(err, "err");
      });
  };

  return (
    <View style={styles.Container}>
      <Stack.Screen options={{ title: "New Allocation" }} />
      <View style={styles.Header}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Income</Text>
        <TextInput
          style={{ flex: 1, backgroundColor: "white", padding: 10 }}
          placeholder="Income"
          value={NewAllowcation.income}
          onChangeText={(text: string) =>
            setNewAllowcation((prevState) => ({ ...prevState, income: text }))
          }
        />
      </View>
      <Button title="Save" onPress={CreateAccount} />
      {/* Profit */}
      {/* <View style={{ padding: 10, gap: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>Name</Text>
          <Text>%</Text>
          <Text>¢123</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>Name</Text>
          <Text>%</Text>
          <Text>¢123</Text>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 10,
  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    gap: 10,
  },
  Money: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

{
  /* <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Account</ThemedText>
      </ThemedView>
      <ThemedText>This app includes example code to help you get started.</ThemedText>
      <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText> library
          to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView> */
}
