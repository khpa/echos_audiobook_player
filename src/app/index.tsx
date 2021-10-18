// external dependencies
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";

// internal dependencies
import {MainTabsScreen} from "./MainTabs";
import {AuthStackScreen} from "./AuthStack";
import {Loading, AudioPlayer} from "./components";
import {AddAlbumPopup} from "./MainTabs/Library/AddAlbum";

const AppStack = createStackNavigator();

export const AppStackScreen = () => {
  const {Navigator, Screen, Group} = AppStack;
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState<string | null>(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setUser("Micha");
    }, 500);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Navigator>
      <Group>
        {user ? (
          <Screen name="Home" component={MainTabsScreen} />
        ) : (
          <Screen name="Auth" component={AuthStackScreen} />
        )}
      </Group>
      <Screen name="AudioPlayer" component={AudioPlayer} />
      <Screen
        name="AddAlbumPopup"
        component={AddAlbumPopup}
        options={{
          headerShown: false,
          cardStyle: {backgroundColor: "rgba(0, 0, 0, 0.15)"},
          cardOverlayEnabled: true,
        }}
      />
    </Navigator>
  );
};
