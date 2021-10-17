// external dependencies
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
// @ts-ignore
import {BookSearch} from 'react-native-google-books';

// internal dependencies
import {width} from '../../../assets/theme';
import {config} from '../../../assets/config';
import {CompLibraryStackNavProp} from '../../../navigation/types/props';

export const AddAlbum = ({navigation}: CompLibraryStackNavProp<'AddAlbum'>) => {
  const [searchString, onChangeText] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  async function searchGoogleBooks(searchString: string) {
    if (searchString.length > 2) {
      try {
        const books = await BookSearch.searchbook(
          searchString,
          config.googleBooksApi.key,
        );
        return books.data;
      } catch {
        return [];
      }
    }
  }
  const renderItem = ({item}: {item: any}) => {
    return (
      <View key={item.id} style={{flex: 1}}>
        <Text>{item.volumeInfo.title}</Text>
      </View>
    );
  };

  useEffect(() => {
    searchGoogleBooks(searchString).then((res: any[]) => {
      setSearchResults(res);
    });
  }, [searchString]);

  return (
    <View style={{flex: 1}}>
      <Text>AddAlbum</Text>
      <TextInput
        style={{
          height: 40,
          width: width - 20,
          backgroundColor: 'white',
          color: 'black',
          borderRadius: 10,
        }}
        onChangeText={input => {
          onChangeText(input);
        }}
        value={searchString}
      />
      <FlatList
        data={searchResults}
        style={{
          flex: 1,
          paddingTop: 100,
          padding: 5,
          width: '100%',
          backgroundColor: 'gray',
          alignSelf: 'center',
        }}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
