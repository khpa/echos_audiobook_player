/* eslint-disable @typescript-eslint/no-explicit-any */
// external dependencies
import * as React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {useStore} from "../../../../store/store";

// internal dependencies
import {height} from "../../../components";
import {createNewFolder} from "./createNewFolder";

export type Album = {
  id: string;
  title: string;
  subtitle?: string;
  authors: string[];
  description?: string;
  categories?: string[];
  pageCount?: number;
  publishedDate?: string;
  addedDate?: string;
  image?: string;
  chapters: Chapter[];
  lastPlayed?: string;
  lastPlayedChapterIndex?: string;
};

export type Chapter = {
  index: number;
  title: string;
  url: string;
  artwork?: string;
  lastPosition?: string;
  finished?: boolean;
};

export const AddAlbumPopup = ({navigation, route}: any) => {
  const newAlbum = route.params?.searchResults;
  const store = useStore();

  const ISBN_13 = newAlbum.industryIdentifiers.find(
    (identifier: any) => identifier.type === "ISBN_13",
  ).identifier;

  const album: Album = {
    id: ISBN_13,
    title: newAlbum.title,
    subtitle: newAlbum.subtitle,
    authors: newAlbum.authors,
    description: newAlbum.description,
    categories: newAlbum.categories,
    pageCount: newAlbum.pageCount,
    publishedDate: newAlbum.publishedDate,
    addedDate: new Date().toISOString(),
    image: newAlbum.imageLinks.extraLarge
      ? newAlbum.imageLinks.extraLarge
      : newAlbum.imageLinks.thumbnail,
    chapters: [],
  };

  // TODO - Add a check to see if the album is already in the library
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{newAlbum.title}</Text>
        <Text style={styles.subtitle}>{newAlbum.subtitle}</Text>
      </View>
      <Button
        title="Add Album"
        onPress={() => {
          createNewFolder(album);
          store.addAlbum(album);
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: (height * 2) / 3,
    justifyContent: "space-between",
    backgroundColor: "#30444E",
    borderRadius: 16,
    marginHorizontal: 24,
    marginTop: height * 0.1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
  },
});
