/* eslint-disable @typescript-eslint/no-explicit-any */
// external dependencies
import React, {useEffect, useState} from "react";
import {View, TextInput, FlatList, StyleSheet} from "react-native";

// internal dependencies
import {width} from "../../../components";

import {SearchResultsItem, searchGoogleBooks} from "./components";

type Props = {
  navigation: any;
};

export const AddAlbum = ({navigation}: Props) => {
  const [searchString, onChangeText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    searchGoogleBooks(searchString).then((res: any[]) => {
      setSearchResults(res);
    });
  }, [searchString]);

  const renderItem = ({item}: any) => {
    return <SearchResultsItem item={item} navigation={navigation} />;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputField}
        onChangeText={input => {
          onChangeText(input);
        }}
        keyboardAppearance="dark"
        value={searchString}
      />
      <FlatList
        data={searchResults}
        style={styles.albumList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInputField: {
    height: 40,
    width: width - 20,
    backgroundColor: "white",
    color: "black",
    borderRadius: 10,
  },
  albumList: {
    flex: 1,
    paddingTop: 100,
    padding: 5,
    width: "100%",
    backgroundColor: "gray",
    alignSelf: "center",
  },
});
