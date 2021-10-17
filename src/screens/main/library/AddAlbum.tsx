// external dependencies
import React, {useEffect, useState} from 'react';
import {View, TextInput, FlatList, StyleSheet} from 'react-native';

// internal dependencies
import {width} from '../../../assets/theme';
import {searchGoogleBooks} from '../../../data';
import {SearchResultItem} from '../../../components';
import {CompLibraryStackNavProp} from '../../../navigation/types';

type Props = CompLibraryStackNavProp<'AddAlbum'>;

export const AddAlbum = ({navigation}: Props) => {
  const [searchString, onChangeText] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    searchGoogleBooks(searchString).then((res: any[]) => {
      setSearchResults(res);
    });
  }, [searchString]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputField}
        onChangeText={input => {
          onChangeText(input);
        }}
        value={searchString}
      />
      <FlatList
        data={searchResults}
        style={styles.albumList}
        renderItem={SearchResultItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputField: {
    height: 40,
    width: width - 20,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
  },
  albumList: {
    flex: 1,
    paddingTop: 100,
    padding: 5,
    width: '100%',
    backgroundColor: 'gray',
    alignSelf: 'center',
  },
});
