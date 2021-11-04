// external dependencies
import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

// components
import {MainRoutes, TabRoutes} from "../components";

// internal dependencies
import {HomeStackScreen} from "./Home";
import {LibraryStackScreen} from "./Library";
import {createStackNavigator} from "@react-navigation/stack";
import {AudioStackScreen} from "./Audio";
import {MiniPlayer} from "./Audio/MiniPlayer";
import {AddAlbumStackScreen} from "./AddAlbum";

const MainTabs = createBottomTabNavigator<TabRoutes>();
const MainStack = createStackNavigator<MainRoutes>();

export const MainTabsScreen = () => {
  const {Navigator, Screen} = MainTabs;
  return (
    <>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="HomeStack" component={HomeStackScreen} />
        <Screen name="LibraryStack" component={LibraryStackScreen} />
        <Screen name="AddAlbumStack" component={AddAlbumStackScreen} />
      </Navigator>
      <MiniPlayer />
    </>
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
