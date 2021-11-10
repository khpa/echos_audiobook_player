// TODO: Add theme provider based on '../assets/theme'
// TODO: Check if the GestureHandler even does something

// external dependencies
import React from "react";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {GestureHandlerRootView} from "react-native-gesture-handler";

// internal dependencies
import {AppStackScreen} from "./App";
import {AuthProvider} from "./context/AuthProvider";

export const Root = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "rgb(255, 45, 85)",
    },
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer theme={MyTheme}>
        <SafeAreaProvider>
          <AuthProvider>
            <AppStackScreen />
          </AuthProvider>
        </SafeAreaProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
