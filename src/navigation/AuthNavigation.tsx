import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Login} from '../auth/Login';
import {Onboarding} from '../auth/Onboarding';
import {Welcome} from '../auth/Welcome';
import {AuthRoutes} from './Navigation';

const AuthStack = createStackNavigator<AuthRoutes>();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
