// external dependencies
import React, {useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import RenderHtml from "react-native-render-html";

// internal dependencies
import {useStore} from "../../../../store/store";
import {width} from "../../../components";
import {TabNavProps} from "../../../components/navigation";
import {getChapters} from "./getChapters";
import {playAlbum} from "./playAlbum";

type Props = TabNavProps<"BookDetails">;

export const BookDetails = ({navigation, route}: Props) => {
  const store = useStore();
  const {album} = route.params;
  const currentAlbum = store.library.find(b => b.id === album.id);

  useEffect(() => {
    async function fetchData() {
      const chapters = await getChapters(album);
      store.updateAlbum(album.id, "chapters", chapters);
    }
    fetchData();
  }, []);

  console.log(currentAlbum);
  if (!currentAlbum) return <View />;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.topContainer}>
        <Pressable
          onPress={() => {
            {
              store.setActiveAlbum(album);
              store.updateAlbum(album.id, "lastPlayed");
              playAlbum(album).then(() => {
                navigation.navigate("AudioStack" as any);
              });
            }
          }}
        >
          <Image source={{uri: currentAlbum.image}} style={styles.cover} />
        </Pressable>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{album.title}</Text>
          {album.subtitle ? (
            <Text style={styles.subtitle}>{album.subtitle}</Text>
          ) : null}
          <Text style={styles.authors}>
            by {currentAlbum.authors.map(a => a).join(", ")}
          </Text>
          <Text style={styles.categories} numberOfLines={1}>
            {currentAlbum.categories?.map(c => c).join(", ")}
          </Text>
          <Text style={styles.pageCount}>{currentAlbum.pageCount} pages</Text>
        </View>
      </View>
      <RenderHtml
        source={{html: album.description || ""}}
        contentWidth={width}
        baseStyle={styles.description}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
  topContainer: {
    marginVertical: 10,

    flexDirection: "row",
    column: true,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 20,
  },
  cover: {
    width: width * 0.5 * 0.6,
    height: width * 0.75 * 0.6,
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
