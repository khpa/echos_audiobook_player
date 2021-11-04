/* eslint-disable @typescript-eslint/no-explicit-any */
// external dependencies
import * as React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {useStore} from "../../../store/useStore";

// internal dependencies
import {height} from "../../components";
import {createNewFolder, removeFolder} from "./components";

export type Album = {
  isbn13: string;
  title: string;
  image: string;
};

export const AddAlbumPopup = ({route}: any) => {
  const newAlbum = route.params?.album.volumeInfo;
  // const {addAlbum, removeAlbum} = useStore();

  const isbn13 = newAlbum.industryIdentifiers.find(
    (identifier: any) => identifier.type === "ISBN_13",
  ).identifier;

  const album = {
    title: newAlbum.title,
    isbn13: isbn13,
    image: newAlbum.imageLinks.extraLarge,
  };

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
          // addAlbum(album);
        }}
      />
      <Button
        title="Remove Album"
        onPress={() => {
          removeFolder(album);
          // removeAlbum(isbn13);
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
