// external dependencies
import {RouteProp, CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

// internal dependencies
import {
  AppStackParamList,
  AuthStackParamList,
  BottomTabsParamList,
  LibraryStackParamList,
  MainStackParamList,
} from './params';

export type CompAuthStackNavProps<RouteName extends keyof AuthStackParamList> =
  {
    navigation: CompositeNavigationProp<
      StackNavigationProp<AuthStackParamList, RouteName>,
      StackNavigationProp<AppStackParamList, 'Main'>
    >;
    route: RouteProp<AuthStackParamList, RouteName>;
  };

export type MainStackNavProp<RouteName extends keyof MainStackParamList> = {
  navigation: StackNavigationProp<MainStackParamList, RouteName>;
  route: RouteProp<MainStackParamList, RouteName>;
};

export type CompBottomTabsNavProp<RouteName extends keyof BottomTabsParamList> =
  {
    navigation: CompositeNavigationProp<
      BottomTabNavigationProp<BottomTabsParamList, RouteName>,
      StackNavigationProp<MainStackParamList, 'AudioPlayer'>
    >;
    route: RouteProp<BottomTabsParamList, RouteName>;
  };

export type CompLibraryStackNavProp<
  RouteName extends keyof LibraryStackParamList,
> = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<LibraryStackParamList, RouteName>,
    StackNavigationProp<MainStackParamList, 'AudioPlayer'>
  >;
  route: RouteProp<LibraryStackParamList, RouteName>;
};
