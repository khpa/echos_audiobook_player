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

  if (!currentAlbum) return <View />;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {album.subtitle ? (
        <Text style={styles.subtitle}>{album.subtitle}</Text>
      ) : null}
      <View style={styles.topContainer}>
        <Pressable
          // TODO - this function needs to be refactored
          onPress={() => {
            {
              if (album.chapters.length === 0) {
                return;
              }
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
          <Text style={styles.authors}>
            {currentAlbum.authors.map(a => a).join(", ")}
          </Text>
          <View>
            {currentAlbum.categories?.map((category, index) => (
              <Text key={index} style={styles.categories} numberOfLines={1}>
                {category}
              </Text>
            ))}
          </View>

          <Text style={styles.pageCount}>{currentAlbum.pageCount} pages</Text>
          <Text style={styles.chapters}>
            {currentAlbum.chapters && currentAlbum.chapters.length > 0
              ? currentAlbum.chapters.length + " "
              : "There are currently no "}
            files
          </Text>
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
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  topContainer: {
    marginVertical: 20,

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
    textAlign: "center",
  },
  authors: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
    marginBottom: 10,
  },
  categories: {
    fontSize: 12,
    color: "black",
  },
  pageCount: {
    marginTop: 10,
    fontSize: 12,
    color: "black",
  },
  chapters: {
    fontSize: 12,
    color: "black",
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    color: "black",
  },
  track: {
    fontSize: 14,
    color: "black",
    marginVertical: 10,
  },
});
