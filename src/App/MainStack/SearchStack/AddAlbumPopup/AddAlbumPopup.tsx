// external dependencies
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// internal dependencies
import type { SearchStackNavProps } from "../../../../navigation";
import type {
  ImageLinks,
  IndustryIdentifier,
} from "../../../../types/GoogleBooksApi";
import { useStore } from "../../../../store/store";
import { height } from "../../../../components";

import { createNewFolder } from "./createNewFolder";

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
  selfLink: string;
  image?: string;
  imageOptions: ImageLinks;
  chapters: Chapter[];
  duration?: number;
  lastPlayed?: string;
  lastPlayedChapterIndex?: number;
  playbackSpeed?: number;
};

export type Chapter = {
  index: number;
  title: string;
  url: string;
  artwork?: string;
  lastPosition?: number;
  finished?: boolean;
};

type Props = SearchStackNavProps<"AddAlbumPopup">;

export const AddAlbumPopup = ({ navigation, route }: Props) => {
  const { rawAlbum } = route.params;
  const store = useStore();

  console.log("newAlbum", route.params.rawAlbum);

  const ISBN_13 =
    rawAlbum.industryIdentifiers.find(
      (identifier: IndustryIdentifier) => identifier.type === "ISBN_13"
    )?.identifier || rawAlbum.title;

  const album: Album = {
    id: ISBN_13,
    title: rawAlbum.title,
    subtitle: rawAlbum.subtitle,
    authors: rawAlbum.authors,
    description: rawAlbum.description,
    categories: rawAlbum.categories,
    pageCount: rawAlbum.pageCount,
    publishedDate: rawAlbum.publishedDate,
    addedDate: new Date().toISOString(),
    selfLink: rawAlbum.selfLink,
    image: rawAlbum.image,
    imageOptions: rawAlbum.imageLinks,
    chapters: [],
    lastPlayedChapterIndex: 0,
  };
  console.log("album", album);
  // TODO - Add a check to see if the album is already in the library
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{rawAlbum.title}</Text>
        <Text style={styles.subtitle}>{rawAlbum.subtitle}</Text>
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
