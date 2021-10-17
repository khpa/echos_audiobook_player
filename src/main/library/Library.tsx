// external dependencies
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';

// internal dependencies
import {getLocalLibrary} from '../../data/android/getLocalLibrary';
import {handlePermissions} from '../../data/handlePermissions';
import {LibraryStackNavProp} from '../../navigation/types/props';

export function Library({navigation}: LibraryStackNavProp<'Library'>) {
  // check permissions and load available libraries
  useEffect(() => {
    async function loadLibrary() {
      await getLocalLibrary();
      // TODO: get local library, online library and store them in AsyncStorage (where it makes sense)
    }
    handlePermissions();
    loadLibrary();
  }, []);

  return (
    <View>
      <Text>Library</Text>
      <Button
        title="Go to Audio"
        onPress={() => navigation.navigate('AudioPlayer')}
      />
    </View>
  );
}
