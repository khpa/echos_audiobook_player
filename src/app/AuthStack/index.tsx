// external dependencies
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";

// internal dependencies
import {SignIn} from "./SignIn";
import {SignUp} from "./SignUp";

const AuthStack = createStackNavigator();

export const AuthStackScreen = () => {
  const {Navigator, Screen} = AuthStack;
  return (
    <Navigator>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};
