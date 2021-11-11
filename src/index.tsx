// external dependencies
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// internal dependencies
import { AppStackScreen } from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { useStore } from "./store/store";
import { selectDevice } from "./store/slices/device";

export const Root = () => {
  const theme = useStore(selectDevice.theme);

  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: theme.background }}
    >
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <SafeAreaProvider>
            <AuthProvider>
              <AppStackScreen />
            </AuthProvider>
          </SafeAreaProvider>
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};
