import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="allocations"
        options={{
          title: "Allocation",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name={"account-tree"} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name={"account-balance-wallet"}
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
