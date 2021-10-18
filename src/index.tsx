// TODO: Add theme provider based on '../assets/theme'
// TODO: Check if the GestureHandler even does something

// external dependencies
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {GestureHandlerRootView} from "react-native-gesture-handler";

// internal dependencies
import {AppStackScreen} from "./App";
import {AuthProvider} from "./context/AuthProvider";

export const Root = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AuthProvider>
            <AppStackScreen />
          </AuthProvider>
        </SafeAreaProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
