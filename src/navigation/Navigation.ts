import {RouteProp, CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export interface AuthNavigationProps<RouteName extends keyof AuthRoutes> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthRoutes, RouteName>,
    StackNavigationProp<AppRoutes, 'Main'>
  >;
  route: RouteProp<AuthRoutes, RouteName>;
}

export interface MainNavigationProps<RouteName extends keyof MainRoutes> {
  navigation: StackNavigationProp<MainRoutes, RouteName>;
  route: RouteProp<MainRoutes, RouteName>;
}

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<HomeRoutes, RouteName>,
    StackNavigationProp<MainRoutes, 'AudioPlayer'>
  >;
  route: RouteProp<HomeRoutes, RouteName>;
}

export type AppRoutes = {
  Auth: undefined;
  Main: undefined;
};

export type AuthRoutes = {
  Welcome: undefined;
  Login: undefined;
  Onboarding: undefined; // TODO: move to HomeRoutes
};

export type MainRoutes = {
  HomeRoutes: undefined;
  AudioPlayer: undefined;
};

export type HomeRoutes = {
  Home: undefined;
  Library: undefined;
  Analytics: undefined;
  Settings: undefined;
};
