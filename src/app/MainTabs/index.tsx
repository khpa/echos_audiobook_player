// TODO: Find a better way to integrate the MiniPlayer (fragments can't be the only solution)

// external dependencies
import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

// components
import {MiniPlayer} from "../components";
import type {MainRoutes} from "../components";

// internal dependencies
import {HomeStackScreen} from "./Home";
import {LibraryStackScreen} from "./Library";
import {SettingsStackScreen} from "./Settings";
import {AnalyticsStackScreen} from "./Analytics";

const MainTabs = createBottomTabNavigator<MainRoutes>();

export const MainTabsScreen = () => {
  const {Navigator, Screen} = MainTabs;
  return (
    <>
      <Navigator>
        <Screen name="HomeStack" component={HomeStackScreen} />
        <Screen name="LibraryStack" component={LibraryStackScreen} />
        <Screen name="AnalyticsStack" component={AnalyticsStackScreen} />
        <Screen name="SettingsStack" component={SettingsStackScreen} />
      </Navigator>
      <MiniPlayer navigation={undefined} />
    </>
  );
};
