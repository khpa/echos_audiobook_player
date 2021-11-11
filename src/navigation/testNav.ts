// App
type AppParamList = {
  Main: undefined;
  Auth: undefined;
};

// ----------------------------------
// App/Auth
type AuthParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

// App/Main
type MainParamList = {
  MainTabs: undefined;
  AudioStack: undefined;
};

// ----------------------------------
// App/Main/AudioStack
type AudioParamList = {
  AudioPlayer: undefined;
  CurrentQueue: undefined;
  SleepTimer: undefined;
  PlaybackSpeed: undefined;
};

// App/Main/MainTabs
type MainTabsParamList = {
  HomeStack: undefined;
  LibraryStack: undefined;
  SearchStack: undefined;
  SettingsStack: undefined;
};

// ----------------------------------
// App/Main/MainTabs/HomeStack
type HomeStackParamList = {
  Home: undefined;
};

// App/Main/MainTabs/LibraryStack
type LibraryStackParamList = {
  Library: undefined;
  BookDetails: undefined;
  BookSettings: undefined;
};

// App/Main/MainTabs/SearchStack
type SearchStackParamList = {
  AddAlbum: undefined;
  AddAlbumPopup: undefined;
};

// App/Main/MainTabs/SettingsStack
type SettingsStackParamList = {
  Settings: undefined;
};
