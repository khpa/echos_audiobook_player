// external dependencies
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";

// internal dependencies
import {Analytics} from "./Analytics";

const AnalyticsStack = createStackNavigator();

export const AnalyticsStackScreen = () => {
  const {Navigator, Screen} = AnalyticsStack;
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Analytics" component={Analytics} />
    </Navigator>
  );
};
