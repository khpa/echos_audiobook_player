// external dependencies
import type {RouteProp} from "@react-navigation/native";
import type {StackNavigationProp} from "@react-navigation/stack";

export interface AppNavProps<RouteName extends keyof AppRoutes> {
  navigation: StackNavigationProp<AppRoutes, RouteName>;
  route: RouteProp<AppRoutes, RouteName>;
}

export interface MainNavProps<RouteName extends keyof MainRoutes> {
  navigation: StackNavigationProp<MainRoutes, RouteName>;
  route: RouteProp<MainRoutes, RouteName>;
}

export interface AuthNavProps<RouteName extends keyof AuthRoutes> {
  navigation: StackNavigationProp<AuthRoutes, RouteName>;
  route: RouteProp<AuthRoutes, RouteName>;
}

export type AppRoutes = {
  Main: undefined;
  Auth: undefined;
  AudioPlayer: undefined;
  AddAlbumPopup: undefined;
};

export type MainRoutes = {
  AnalyticsStack: undefined;
  HomeStack: undefined;
  LibraryStack: undefined;
  SettingsStack: undefined;
  AddAlbum: undefined;
};

export type AuthRoutes = {
  SignIn: undefined;
  SignUp: undefined;
};
