// external dependencies
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// internal dependencies
import {Login} from '../../auth/Login';
import {Welcome} from '../../auth/Welcome';
import {AuthStackParamList} from '../types/params';

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
