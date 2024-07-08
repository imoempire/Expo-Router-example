import { useAuth } from "@/components/Providers/AuthProviders";
import { Redirect, Slot, Stack, Tabs } from "expo-router";
import React from "react";

export default function AuthLayout() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href={"/"} />;
  }
  
  return <Stack />;
}
