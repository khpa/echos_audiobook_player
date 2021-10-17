// external dependencies
import React from 'react';
import {View, Text} from 'react-native';

// internal dependencies
import {CompBottomTabsNavProp} from '../../../navigation/types';

type Props = CompBottomTabsNavProp<'Settings'>;

export const Settings = ({navigation}: Props) => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};
