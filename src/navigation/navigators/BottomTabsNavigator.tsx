// external dependencies
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// internal dependencies
import {LibraryStackNavigator} from '..';
import {Home} from '../../screens/main/home';
import {BottomTabsParamList} from '../types';
import {Settings} from '../../screens/main/settings';
import {Analytics} from '../../screens/main/analytics';

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabsNavigator = () => {
  const {Navigator, Screen} = BottomTabs;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={Home} />
      <Screen name="LibraryStack" component={LibraryStackNavigator} />
      <Screen name="Analytics" component={Analytics} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
};
