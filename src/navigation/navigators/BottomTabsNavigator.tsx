// external dependencies
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// internal dependencies
import Home from '../../main/home/Home';
import {Library} from '../../main/library/Library';
import {Settings} from '../../main/settings/Settings';
import {Analytics} from '../../main/analytics/Analytics';
import {BottomTabsParamList} from '../types/params';
import {LibraryStackNavigator} from '..';

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
