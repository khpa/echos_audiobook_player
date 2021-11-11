// external dependencies
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// internal dependencies
import type { HomeStackParamList } from "../../../navigation";

import { Home } from "./Home";

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeStackScreen = () => {
  const { Navigator, Screen } = HomeStack;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
