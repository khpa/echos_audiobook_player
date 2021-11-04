// TODO - Only the add or the remove function should be shown, depending on the state

/* eslint-disable @typescript-eslint/no-explicit-any */
// external dependencies
import * as React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {useStore} from "../../../store/useStore";

// internal dependencies
import {height} from "../../components";
import {createNewFolder, removeFolder} from "./components";

export const AddAlbumPopup = ({navigation, route}: any) => {
  const newAlbum = route.params?.album.volumeInfo;
  const store = useStore();

  const ISBN_13 = newAlbum.industryIdentifiers.find(
    (identifier: any) => identifier.type === "ISBN_13",
  ).identifier;

  const album = {
    id: ISBN_13,
    title: newAlbum.title,
    image: newAlbum.imageLinks.extraLarge
      ? newAlbum.imageLinks.extraLarge
      : newAlbum.imageLinks.thumbnail,
  };

  console.log(newAlbum);
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
          navigation.pop();
          navigation.navigate("Library");
        }}
      />
      <Button
        title="Remove Album"
        onPress={() => {
          removeFolder(album);
          store.removeAlbum(album.id);
          navigation.pop();
          navigation.navigate("Library");
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
