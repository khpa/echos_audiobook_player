// external dependencies
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';

// internal dependencies
import {getLocalLibrary, handlePermissions} from '../../../data';
import {CompLibraryStackNavProp} from '../../../navigation/types';

type Props = CompLibraryStackNavProp<'Library'>;

export const Library = ({navigation}: Props) => {
  useEffect(() => {
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
      <Button
        title="Go to AddAlbum"
        onPress={() => navigation.navigate('AddAlbum')}
      />
    </View>
  );
};

// TODO: get local library, online library and store them in AsyncStorage (where it makes sense)
async function loadLibrary() {
  await getLocalLibrary();
}
