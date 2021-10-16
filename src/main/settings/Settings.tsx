// external dependencies
import React from 'react';
import {View, Text} from 'react-native';

// internal dependencies
import {HomeNavigationProps} from '../../navigation/Navigation';

export function Settings({navigation}: HomeNavigationProps<'Settings'>) {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}
