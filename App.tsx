import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Jost_600SemiBold,
  Jost_400Regular,
} from "@expo-google-fonts/jost";

import { ThemeProvider } from "styled-components";
import theme from "./src/theme";

import { Welcome } from "./src/Welcome";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Welcome />
    </ThemeProvider>
  );
}
