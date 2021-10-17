// external dependencies
import {NavigatorScreenParams} from '@react-navigation/native';

export type AppStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainStackParamList>;
};

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
};

export type MainStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
  AudioPlayer: undefined;
};

export type BottomTabsParamList = {
  Home: undefined;
  LibraryStack: NavigatorScreenParams<LibraryStackParamList>;
  Analytics: undefined;
  Settings: undefined;
};

export type LibraryStackParamList = {
  Library: undefined;
  AddAlbum: undefined;
};
