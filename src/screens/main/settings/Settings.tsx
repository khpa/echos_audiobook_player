// external dependencies
import React from 'react';
import {View, Text} from 'react-native';

// internal dependencies
import {CompBottomTabsNavProp} from '../../../navigation/types/props';

export function Settings({navigation}: CompBottomTabsNavProp<'Settings'>) {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}
