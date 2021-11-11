// external dependencies
import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

// context
// internal dependencies
import { useAuth } from "../context/AuthProvider";
import { Loading } from "../components";
import type { AppRoutes } from "../util";

import { MainStackScreen } from "./MainStack";
import { AuthStackScreen } from "./AuthStack";

const AppStack = createStackNavigator<AppRoutes>();

export const AppStackScreen = () => {
  const { Navigator, Screen } = AppStack;
  const [isLoading, setIsLoading] = React.useState(true);
  const { user } = useAuth();

  useEffect(() => {
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
