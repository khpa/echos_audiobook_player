// external dependencies
import React, {useEffect} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// components
import {MainRoutes, TabRoutes} from "../components";

// internal dependencies
import {HomeStackScreen} from "./HomeStack";
import {LibraryStackScreen} from "./LibraryStack";
import {AudioStackScreen} from "./AudioStack";
import {SearchStackScreen} from "./SearchStack";
import {TabBar, setupAudioPlayer} from "../components";

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
      tabBar={props => <TabBar {...props} />}
    >
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
        name="SearchStack"
        component={SearchStackScreen}
        options={{
          title: "Search",
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
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
