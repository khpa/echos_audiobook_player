// external dependencies
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {useStore} from "../store/store";
// @ts-ignore
import {ThemeProvider, createGlobalStyle} from "styled-components";

// context
import {useAuth} from "../context/AuthProvider";

// internal dependencies
import {MainStackScreen} from "./MainStack";
import {AuthStackScreen} from "./AuthStack";
import {Loading} from "./components";
import type {AppRoutes} from "./components";

const AppStack = createStackNavigator<AppRoutes>();

export const AppStackScreen = () => {
  const {Navigator, Screen} = AppStack;
  const [isLoading, setIsLoading] = React.useState(true);
  const {user} = useAuth();

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        <Screen name="Main" component={MainStackScreen} />
      ) : (
        <Screen name="Auth" component={AuthStackScreen} />
      )}
    </Navigator>
  );
};
