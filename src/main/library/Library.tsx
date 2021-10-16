import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {checkAndroidPermissions} from '../../data/permissions/checkAndroidPermissions';
import {HomeNavigationProps} from '../../navigation/Navigation';

export function Library({navigation}: HomeNavigationProps<'Library'>) {
  useEffect(() => {
    async function loadLibrary() {
      await checkAndroidPermissions(); // checking for permissions to read and write storage
      // TODO: get local library
      // TODO: get online library
      // TODO: store library in AsyncStorage (where it makes sense)
    }
    loadLibrary();
  }, []);

  return (
    <View>
      <Text>Library</Text>
    </View>
  );
}
