import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import UserDetails from "./screens/UserDetails";
import UserProfileView from "./screens/UserProfile";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaView>
        {/* <Navigation colorScheme={colorScheme} /> */}
        <UserDetails />
        {/* <UserProfileView /> */}
        <StatusBar />
      </SafeAreaView>
    );
  }
}
