// external dependencies
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";

// types
import type {AuthRoutes} from "../components";

// internal dependencies
import {SignIn} from "./SignIn";
import {SignUp} from "./SignUp";

const AuthStack = createStackNavigator<AuthRoutes>();

export const AuthStackScreen = () => {
  const {Navigator, Screen} = AuthStack;
  return (
    <Navigator initialRouteName="SignUp">
      <Screen name="SignUp" component={SignUp} />
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
};
