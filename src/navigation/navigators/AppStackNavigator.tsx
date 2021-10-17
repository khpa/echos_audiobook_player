// external dependencies
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// internal dependencies
import MiniPlayer from '../../screens/audio/MiniPlayer';
import AudioPlayer from '../../screens/audio/AudioPlayer';
import {BottomTabsNavigator, AuthStackNavigator} from '..';
import {AppStackParamList, MainStackParamList} from '../types/params';

const AppStack = createStackNavigator<AppStackParamList>();
const MainStack = createStackNavigator<MainStackParamList>();

export const AppStackNavigator = () => {
  const {Navigator, Screen, Group} = AppStack;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Auth" component={AuthStackNavigator} />
      <Screen name="Main" component={MainStackNavigator} />
    </Navigator>
  );
};

const MainStackNavigator = () => {
  const {Navigator, Screen, Group} = MainStack;

  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="BottomTabs" component={BottomTabsNavigator} />
        <Group screenOptions={{presentation: 'modal'}}>
          <Screen name="AudioPlayer" component={AudioPlayer} />
        </Group>
      </Navigator>
      <MiniPlayer />
    </>
  );
};
