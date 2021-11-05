// TODO: Show previous searches below searchbar

// external dependencies
import React, {useEffect, useState} from "react";
import {View, TextInput, FlatList, StyleSheet} from "react-native";

// internal dependencies
import {SearchResultsItem} from "./SearchResultsItem";
import {searchGoogleBooks} from "./searchGoogleBooks";
import {formatBookSearchResults} from "./formatBookSearchResults";

// constants
import {width} from "../../../components";
import {MainNavProps} from "../../../components/navigation";

type BookSearchResults = {
  id: string;
  title: string;
  authors: string[];
  description?: string;
  imageLink?: string;
  selfLink?: string;
};

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
          keyExtractor={(item, index) => index.toString()}
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
