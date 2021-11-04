// external dependencies
import React, {useEffect} from "react";
import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import RenderHtml from "react-native-render-html";

// internal dependencies
import {useStore} from "../../../../store/useStore";
import {width} from "../../../components";
import {TabNavProps} from "../../../components/navigation";
import {getAlbumTracks} from "./getAlbumTracks";

export const BookDetails = ({route}: TabNavProps<"BookDetails">) => {
  const store = useStore();
  const {book} = route.params;
  const currentBook = store.library.find(b => b.id === book.id);

  useEffect(() => {
    async function fetchData() {
      const tracks = await getAlbumTracks(book.title);
      store.setTracks(book.id, tracks);
    }
    fetchData();
  }, []);

  if (!currentBook) return <View />;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={{uri: currentBook.image}} style={styles.cover} />
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.authors}>
        by {currentBook?.authors?.map(a => a).join(", ")}
      </Text>
      <RenderHtml
        source={{html: book.description}}
        contentWidth={width}
        baseStyle={styles.description}
      />
      {currentBook.tracks &&
        currentBook.tracks.map(track => (
          <Text key={track.index} style={styles.track}>
            {track.title}
          </Text>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  cover: {
    width: width * 0.5,
    height: width * 0.75,
    alignSelf: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  authors: {
    fontSize: 14,
    marginBottom: 10,
    color: "black",
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    color: "black",
  },
  track: {
    fontSize: 14,
    color: "grey",
  },
});
