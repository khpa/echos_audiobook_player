import * as React from 'react';
import {View, Text, TextInput} from 'react-native';
import {width} from '../../assets/theme';
import {LibraryStackNavProp} from '../../navigation/types/props';

export const AddAlbum = ({navigation}: LibraryStackNavProp<'AddAlbum'>) => {
  const [searchString, onChangeText] = React.useState<string>('');

  return (
    <View>
      <Text>AddAlbum</Text>
      <TextInput
        style={{
          height: 40,
          width: width - 20,
          backgroundColor: '#F0F0F0',
          color: 'black',
          borderRadius: 10,
        }}
        onChangeText={input => {
          onChangeText(input);
        }}
        value={searchString}
      />
    </View>
  );
};
