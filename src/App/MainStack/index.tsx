// external dependencies
import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

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
        <Screen
          name="HomeStack"
          component={HomeStackScreen}
          options={{
            title: "Home",
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Screen
          name="LibraryStack"
          component={LibraryStackScreen}
          options={{
            title: "Library",
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="bookshelf"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Screen
          name="AddAlbumStack"
          component={AddAlbumStackScreen}
          options={{
            title: "Search",
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="magnify"
                color={color}
                size={size}
              />
            ),
          }}
        />
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
