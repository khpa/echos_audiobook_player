// ! After initial search is conducted, the first item of an updated search is not clickable
// TODO - Most likely a an issue with Flatlist + async, but not sure how to fix

/* eslint-disable @typescript-eslint/no-explicit-any */
// external dependencies
import React, {useEffect, useState} from "react";
import {View, TextInput, FlatList, StyleSheet} from "react-native";

// internal dependencies
import type {BookSearchResults} from "./components";
import {
  SearchResultsItem,
  searchGoogleBooks,
  formatBookSearchResults,
} from "./components";

// constants
import {width} from "../../components";
import {MainNavProps} from "../../components/navigation";

export const AddAlbum = ({navigation}: MainNavProps<"MainTabs">) => {
  const [searchString, onChangeText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<BookSearchResults[]>([]);

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      async function fetchData() {
        if (searchString.length > 2) {
          const results = await searchGoogleBooks(searchString);
          const formattedResults = await formatBookSearchResults(results);
          setSearchResults(formattedResults);
        }
      }
      fetchData();
    }, 500);
    return () => clearTimeout(delayedSearch);
  }, [searchString]);

  return (
    <View style={styles.container}>
      <TextInput
        autoFocus={true}
        style={styles.textInputField}
        onChangeText={input => {
          onChangeText(input);
        }}
        keyboardAppearance="dark"
        value={searchString}
      />
      <View style={styles.albumList}>
        <FlatList
          data={searchResults}
          keyExtractor={item => item.id}
          extraData={searchString}
          renderItem={({item}) => (
            <SearchResultsItem item={item} navigation={navigation} />
          )}
        />
      </View>
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
    color: "black",
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#c5c5c5",
  },
  albumList: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
  },
});
