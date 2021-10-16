import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigation from './AuthNavigation';
import {AppRoutes, MainRoutes} from './Navigation';
import HomeNavigation from './HomeNavigation';
import AudioPlayer from '../main/audio/AudioPlayer';
import MiniPlayer from '../main/audio/MiniPlayer';

const AppStack = createStackNavigator<AppRoutes>();
const MainStack = createStackNavigator<MainRoutes>();

const Routes = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Auth" component={AuthNavigation} />
      <AppStack.Screen name="Main" component={MainNavigation} />
    </AppStack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name="HomeRoutes" component={HomeNavigation} />
        <MainStack.Screen name="AudioPlayer" component={AudioPlayer} />
      </MainStack.Navigator>
      <MiniPlayer />
    </>
  );
};

export default Routes;
