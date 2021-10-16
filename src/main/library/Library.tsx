import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {handlePermissions} from '../../data/permissions/handlePermissions';
import {HomeNavigationProps} from '../../navigation/Navigation';

export function Library({navigation}: HomeNavigationProps<'Library'>) {
  // check permissions and load available libraries
  useEffect(() => {
    handlePermissions();
    async function loadLibrary() {
      // TODO: get local library, online library and store them in AsyncStorage (where it makes sense)
    }
    loadLibrary();
  }, []);

  return (
    <View>
      <Text>Library</Text>
    </View>
  );
}
