// external dependencies
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";

// internal dependencies
import {Settings} from "./Settings";

const SettingsStack = createStackNavigator();

export const SettingsStackScreen = () => {
  const {Navigator, Screen} = SettingsStack;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
};
