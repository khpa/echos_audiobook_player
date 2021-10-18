// external dependencies
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";

// internal dependencies
import {Home} from "./Home";

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
  const {Navigator, Screen} = HomeStack;
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
