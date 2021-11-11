// external dependencies
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import type { RouteProp } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";

// internal dependencies
import type * as Params from "./params";

// App
export type AppNavProps<T extends keyof Params.AppParamList> = {
  navigation: StackNavigationProp<Params.AppParamList, T>;
  route: RouteProp<Params.AppParamList, T>;
};

// ----------------------------------
// App/Auth
export type AuthNavProps<T extends keyof Params.AuthParamList> = {
  navigation: StackNavigationProp<Params.AuthParamList, T>;
  route: RouteProp<Params.AuthParamList, T>;
};

// App/Main
export type MainNavProps<T extends keyof Params.MainParamList> = {
  navigation: StackNavigationProp<Params.MainParamList, T>;
  route: RouteProp<Params.MainParamList, T>;
};

// ----------------------------------
// App/Main/AudioStack
export type AudioNavProps<T extends keyof Params.AudioParamList> = {
  navigation: StackNavigationProp<Params.AudioParamList, T>;
  route: RouteProp<Params.AudioParamList, T>;
};

// App/Main/MainTabs
export type MainTabsNavProps<T extends keyof Params.MainTabsParamList> = {
  navigation: BottomTabNavigationProp<Params.MainTabsParamList, T>;
  route: RouteProp<Params.MainTabsParamList, T>;
};

// ----------------------------------
// App/Main/MainTabs/HomeStack
export type HomeStackNavProps<T extends keyof Params.HomeStackParamList> = {
  navigation: BottomTabNavigationProp<Params.HomeStackParamList, T>;
  route: RouteProp<Params.HomeStackParamList, T>;
};

// App/Main/MainTabs/LibraryStack
export type LibraryStackNavProps<T extends keyof Params.LibraryStackParamList> =
  {
    navigation: BottomTabNavigationProp<Params.LibraryStackParamList, T>;
    route: RouteProp<Params.LibraryStackParamList, T>;
  };

// App/Main/MainTabs/SearchStack
export type SearchStackNavProps<T extends keyof Params.SearchStackParamList> = {
  navigation: BottomTabNavigationProp<Params.SearchStackParamList, T>;
  route: RouteProp<Params.SearchStackParamList, T>;
};

// App/Main/MainTabs/SettingsStack
export type SettingsStackNavProps<
  T extends keyof Params.SettingsStackParamList
> = {
  navigation: BottomTabNavigationProp<Params.SettingsStackParamList, T>;
  route: RouteProp<Params.SettingsStackParamList, T>;
};
