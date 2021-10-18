// external dependencies
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";

// context
import {useAuth} from "../context/AuthProvider";

// internal dependencies
import {MainTabsScreen} from "./MainTabs";
import {AuthStackScreen} from "./AuthStack";
import {Loading, AudioPlayer} from "./components";
import {AddAlbumPopup} from "./MainTabs/Library/AddAlbum";
import type {AppRoutes} from "./components";

const AppStack = createStackNavigator<AppRoutes>();

export const AppStackScreen = () => {
  const {Navigator, Screen, Group} = AppStack;
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
    <Navigator>
      {user ? (
        <Screen name="Main" component={MainTabsScreen} />
      ) : (
        <Screen name="Auth" component={AuthStackScreen} />
      )}
      <Group>
        <Screen name="AudioPlayer" component={AudioPlayer} />
        <Screen name="AddAlbumPopup" component={AddAlbumPopup} />
      </Group>
    </Navigator>
  );
};
