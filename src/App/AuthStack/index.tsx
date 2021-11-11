// external dependencies
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// types
import type { AuthParamList } from "../../navigation";

// internal dependencies
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

const AuthStack = createStackNavigator<AuthParamList>();

export const AuthStackScreen = () => {
  const { Navigator, Screen } = AuthStack;
  return (
    <Navigator initialRouteName="SignUp">
      <Screen name="SignUp" component={SignUp} />
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
};
