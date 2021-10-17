// external dependencies
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// internal dependencies
import {AuthStackParamList} from '../types';
import {Login, Welcome} from '../../screens/auth';

const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
  const {Navigator, Screen} = AuthStack;
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};
