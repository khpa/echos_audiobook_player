// external dependencies
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {GestureHandlerRootView} from "react-native-gesture-handler";

// internal dependencies
import {AppStackScreen} from "./app";

//TODO: Add theme provider based on '../assets/theme'

export const Root = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AppStackScreen />
        </SafeAreaProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
