// external dependencies
import React, {useEffect} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

// components
import {MainRoutes, TabRoutes} from "../components";

// internal dependencies
import {HomeStackScreen} from "./HomeStack";
import {LibraryStackScreen} from "./LibraryStack";
import {AudioStackScreen} from "./AudioStack";
import {SearchStackScreen} from "./SearchStack";
import {setupAudioPlayer, BottomTabBar} from "../components";
import {SettingsStackScreen} from "./SettingsStack";

const MainTabs = createBottomTabNavigator<TabRoutes>();
const MainStack = createStackNavigator<MainRoutes>();

export const MainTabsScreen = () => {
  const {Navigator, Screen} = MainTabs;

  useEffect(() => {
    setupAudioPlayer();
    return () => {
      console.log("MainTabsScreen unmount");
    };
  }, []);

  return (
    <Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomTabBar {...props} />}
    >
      <Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{title: "Home"}}
      />
      <Screen
        name="LibraryStack"
        component={LibraryStackScreen}
        options={{title: "Library"}}
      />
      <Screen
        name="SearchStack"
        component={SearchStackScreen}
        options={{title: "Search"}}
      />
      <Screen
        name="SettingsStack"
        component={SettingsStackScreen}
        options={{title: "Settings"}}
      />
    </Navigator>
  );
};

export const MainStackScreen = () => {
  const {Navigator, Screen} = MainStack;
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="MainTabs" component={MainTabsScreen} />
      <Screen name="AudioStack" component={AudioStackScreen} />
    </Navigator>
  );
};
