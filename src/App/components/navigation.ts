// external dependencies
import {StackNavigationProp, StackScreenProps} from "@react-navigation/stack";
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteProp,
} from "@react-navigation/native";
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import {Album} from "../MainStack/SearchStack/AddAlbumPopup";
import {BookSearchResults} from "../MainStack/SearchStack/AddAlbum/AddAlbum";

export type AudioPlayerProp = CompositeScreenProps<
  StackScreenProps<MainRoutes, "AudioStack">,
  CompositeScreenProps<
    StackScreenProps<AudioRoutes, "AudioPlayer">,
    BottomTabScreenProps<TabRoutes>
  >
>;

export type LibraryProps = CompositeScreenProps<
  StackScreenProps<LibraryRoutes, "BookSettings">,
  CompositeScreenProps<
    StackScreenProps<AudioRoutes, "AudioPlayer">,
    BottomTabScreenProps<TabRoutes>
  >
>;

export interface MainNavProps<RouteName extends keyof MainRoutes> {
  navigation: StackNavigationProp<MainRoutes, RouteName>;
  route: RouteProp<MainRoutes, RouteName>;
}

export interface TabNavProps<RouteName extends keyof TabRoutes> {
  navigation: BottomTabNavigationProp<TabRoutes, RouteName>;
  route: RouteProp<TabRoutes, RouteName>;
}

export interface AuthNavProp<RouteName extends keyof AuthRoutes> {
  navigation: StackNavigationProp<AuthRoutes, RouteName>;
  route: RouteProp<AuthRoutes, RouteName>;
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
  AudioPlayer: {album: Album};
  CurrentQueue: undefined;
  SleepTimer: undefined;
  PlaybackSpeed: {albumId: string};
};

export type TabRoutes = {
  HomeStack: NavigatorScreenParams<HomeRoutes>;
  LibraryStack: NavigatorScreenParams<LibraryRoutes>;
  SearchStack: undefined;
  AddAlbum: undefined;
  AddAlbumPopup: {searchResults: BookSearchResults};
};

export type AuthRoutes = {
  SignIn: undefined;
  SignUp: undefined;
};

export type LibraryRoutes = {
  Library: undefined;
  BookDetails: {album: Album};
  BookSettings: {album: Album};
};

type HomeRoutes = {
  Home: undefined;
};
