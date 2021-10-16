import * as React from 'react';
import {View, Text} from 'react-native';
import {HomeNavigationProps} from '../../navigation/Navigation';

export function Settings({navigation}: HomeNavigationProps<'Settings'>) {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}
