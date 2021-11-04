// external dependencies
import {StackNavigationProp} from "@react-navigation/stack";
import type {NavigatorScreenParams, RouteProp} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {Album} from "../MainStack/components/types";

export interface MainNavProps<RouteName extends keyof MainRoutes> {
  navigation: StackNavigationProp<MainRoutes, RouteName>;
  route: RouteProp<MainRoutes, RouteName>;
}

export interface TabNavProps<RouteName extends keyof TabRoutes> {
  navigation: BottomTabNavigationProp<TabRoutes, RouteName>;
  route: RouteProp<TabRoutes, RouteName>;
}

export interface AudioNavProp<RouteName extends keyof AudioRoutes> {
  navigation: StackNavigationProp<AudioRoutes, RouteName>;
  route: RouteProp<AudioRoutes, RouteName>;
}

export type AppRoutes = {
  Main: NavigatorScreenParams<MainRoutes>;
  Auth: NavigatorScreenParams<AuthRoutes>;
};

export type MainRoutes = {
  MainTabs: NavigatorScreenParams<TabRoutes>;
  AudioStack: NavigatorScreenParams<AudioRoutes>;
};

export type AudioRoutes = {
  AudioPlayer: undefined;
  MiniPlayer: undefined;
};

export type TabRoutes = {
  HomeStack: undefined;
  LibraryStack: undefined;
  SearchStack: undefined;
  Home: undefined;
  Library: undefined;
  AddAlbum: undefined;
  BookDetails: {book: Album};
  AddAlbumPopup: {
    album: {
      id: string;
      title: string;
      subtitle: string;
      authors: string[];
      description: string;
      imageLink: string;
    };
  };
};

export type AuthRoutes = {
  SignIn: undefined;
  SignUp: undefined;
};
