// external dependencies
import type { NavigatorScreenParams } from "@react-navigation/native";

// internal dependencies
import type { Album } from "../App/MainStack/SearchStack/AddAlbumPopup";
import type { VolumeInfoClass } from "../types/GoogleBooksApi";

// App
export type AppParamList = {
  Auth: NavigatorScreenParams<AuthParamList>;
  Main: NavigatorScreenParams<MainParamList>;
};

// ----------------------------------
// App/Auth
export type AuthParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

// App/Main
export type MainParamList = {
  AudioStack: NavigatorScreenParams<AudioParamList>;
  MainTabs: NavigatorScreenParams<MainTabsParamList>;
};

// ----------------------------------
// App/Main/AudioStack
export type AudioParamList = {
  AudioPlayer: { album: Album };
  CurrentQueue: undefined;
  SleepTimer: undefined;
  PlaybackSpeed: { albumId: string };
};

// App/Main/MainTabs
export type MainTabsParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  LibraryStack: NavigatorScreenParams<LibraryStackParamList>;
  SearchStack: NavigatorScreenParams<SearchStackParamList>;
  SettingsStack: NavigatorScreenParams<SettingsStackParamList>;
};

// ----------------------------------
// App/Main/MainTabs/HomeStack
export type HomeStackParamList = {
  Home: undefined;
};

// App/Main/MainTabs/LibraryStack
export type LibraryStackParamList = {
  Library: undefined;
  BookDetails: { album: Album };
  BookSettings: { album: Album };
};

// App/Main/MainTabs/SearchStack
export type SearchStackParamList = {
  AddAlbum: undefined;
  AddAlbumPopup: {
    rawAlbum: VolumeInfoClass & { selfLink: string; image: string };
  };
};

// App/Main/MainTabs/SettingsStack
export type SettingsStackParamList = {
  Settings: undefined;
};
