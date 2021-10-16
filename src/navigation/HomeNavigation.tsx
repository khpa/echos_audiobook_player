import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../main/home/Home';
import {HomeRoutes} from './Navigation';
import {Library} from '../main/library/Library';
import {Settings} from '../main/settings/Settings';
import {Analytics} from '../main/analytics/Analytics';

const HomeTabs = createBottomTabNavigator<HomeRoutes>();

export default function HomeNavigation() {
  return (
    <HomeTabs.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeTabs.Screen name="Home" component={Home} />
      <HomeTabs.Screen name="Library" component={Library} />
      <HomeTabs.Screen name="Analytics" component={Analytics} />
      <HomeTabs.Screen name="Settings" component={Settings} />
    </HomeTabs.Navigator>
  );
}
