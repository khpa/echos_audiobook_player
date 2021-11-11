// external dependencies
import React, { useEffect, useState } from "react";
import { TextInput, FlatList, StyleSheet } from "react-native";

// internal dependencies
import { Container, width } from "../../../../components";
import { selectDevice } from "../../../../store/slices/device";
import { useStore } from "../../../../store/store";
import type { IndustryIdentifier } from "../../../../types/GoogleBooksApi";

import { formatBookSearchResults } from "./formatBookSearchResults";
import { searchGoogleBooks } from "./searchGoogleBooks";
import { SearchResultsItem } from "./SearchResultsItem";

export type BookSearchResults = {
  id: string;
  title: string;
  subtitle: string;
  authors: string[];
  description: string;
  imageLink: string;
  selfLink: string;
  industryIdentifiers?: IndustryIdentifier[];
  image?: string;
};

export const AddAlbum = () => {
  const [searchString, onChangeText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<BookSearchResults[] | []>(
    []
  );
  const theme = useStore(selectDevice.theme);

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

  // TODO: Show previous searches below TextInput
  return (
    <Container style={styles.container}>
      <TextInput
        style={[
          styles.textInputField,
          { color: theme.text, backgroundColor: "gray" },
        ]}
        onChangeText={(input) => {
          onChangeText(input);
        }}
        keyboardAppearance="dark"
        value={searchString}
      />
      <Container style={styles.albumList}>
        <FlatList
          data={searchResults}
          keyExtractor={(item, index) => item + index.toString()}
          extraData={searchString}
          renderItem={({ item }) => <SearchResultsItem item={item} />}
        />
      </Container>
    </Container>
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
