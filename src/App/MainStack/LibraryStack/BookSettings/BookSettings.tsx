// external dependencies
import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import TrackPlayer from "react-native-track-player";

// internal dependencies
import type { LibraryProps } from "../../../../navigation/navigation";
import { width, Button } from "../../../../components";
import { useStore } from "../../../../store/store";
import { removeFolder } from "../BookDetails";

import { getChapters } from "./getChapters";

type Props = LibraryProps;

export const BookSettings = ({ navigation, route }: Props) => {
  const { album } = route.params;
  const store = useStore();

  function onPressHandler() {
    store.removeAlbum(album.id);
    removeFolder(album);
    navigation.reset({
      index: 0,
      routes: [{ name: "Library" }],
    });
  }

  async function reloadChapters() {
    const chapters = await getChapters(album);
    store.updateAlbum(album.id, "chapters", chapters);
  }

  const imgOpt: string[] = Object.values(album.imageOptions);
  return (
    <ScrollView style={styles.container}>
      <Button title="reload Chapters" onPress={reloadChapters} />
      <Button
        title="Set Duration"
        onPress={() => store.updateAlbum(album.id, "duration", 35638)}
      />
      <Button
        onPress={async () => {
          store.resetChapters();
          await TrackPlayer.seekTo(0);
        }}
        title="Reset"
      />
      <Button onPress={() => onPressHandler()} title="Delete" />
      {imgOpt.map((item, index) => {
        return (
          <View key={index}>
            <Pressable
              onPress={() => {
                store.updateAlbum(album.id, "image", item);
                navigation.goBack();
              }}
            >
              <Image source={{ uri: item }} style={styles.image} />
            </Pressable>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: (width - 40) / 3,
    height: (width - 40) / 2,
    margin: 5,
    resizeMode: "center",
  },
});
