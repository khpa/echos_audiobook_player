// external dependencies
import React, {useEffect} from "react";
import {View, Text, StyleSheet, Image, ScrollView, Button} from "react-native";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import RenderHtml from "react-native-render-html";
import TrackPlayer from "react-native-track-player";

// internal dependencies
import {useStore} from "../../../../store/useStore";
import {width} from "../../../components";
import {TabNavProps} from "../../../components/navigation";
import {removeFolder} from "../../SearchStack/AddAlbumPopup/removeFolder";
import {getAlbumTracks} from "./getAlbumTracks";

export const BookDetails = ({
  navigation,
  route,
}: TabNavProps<"BookDetails">) => {
  const store = useStore();
  const {book} = route.params;
  const currentBook = store.library.find(b => b.id === book.id);

  useEffect(() => {
    async function fetchData() {
      const tracks = await getAlbumTracks(book);
      store.setTracks(book.id, tracks);
    }
    fetchData();
  }, []);

  console.log(currentBook);
  if (!currentBook) return <View />;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Button
        title="Remove Album"
        onPress={() => {
          store.removeAlbum(book.id);
          // removeFolder(currentBook);
          navigation.reset({
            index: 0,
            routes: [{name: "Library"}],
          });
        }}
      />
      <View style={styles.details}>
        <Image source={{uri: currentBook.image}} style={styles.cover} />
        <Text style={styles.title}>{book.title}</Text>
        {book.subtitle ? (
          <Text style={styles.subtitle}>{book.subtitle}</Text>
        ) : null}
        <Text style={styles.authors}>
          by {currentBook.authors.map(a => a).join(", ")}
        </Text>
        <Text style={styles.categories} numberOfLines={1}>
          {currentBook.categories?.map(c => c).join(", ")}
        </Text>
        <Text style={styles.pageCount}>{currentBook.pageCount} pages</Text>
      </View>
      <RenderHtml
        source={{html: book.description}}
        contentWidth={width}
        baseStyle={styles.description}
      />
      {currentBook.tracks &&
        currentBook.tracks.map(track => (
          <TouchableWithoutFeedback
            key={track.url}
            onPress={async () => {
              await TrackPlayer.add(track);
              store.updateActiveAlbum(true);
              await TrackPlayer.play();
            }}
          >
            <Text key={track.index} style={styles.track} numberOfLines={1}>
              {track.title}
            </Text>
          </TouchableWithoutFeedback>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  details: {
    marginVertical: 10,
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
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  authors: {
    fontSize: 14,
    color: "black",
    marginBottom: 10,
  },
  categories: {
    fontSize: 12,
    color: "gray",
  },
  pageCount: {
    fontSize: 12,
    color: "gray",
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    color: "black",
  },
  track: {
    fontSize: 14,
    color: "grey",
    marginVertical: 10,
  },
});
