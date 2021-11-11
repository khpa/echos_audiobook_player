// external dependencies
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import RenderHtml from "react-native-render-html";
// import {format as pretty} from "pretty-format";

// internal dependencies
import { useAlbumSetup } from "../../../../hooks";
import { width } from "../../../../components";
import type { TabNavProps } from "../../../../util/navigation";
import type { Album } from "../../SearchStack/AddAlbumPopup";

type Props = TabNavProps<"BookDetails">;

export const BookDetails = ({ route }: Props) => {
  const { album } = route.params;
  const [albumSetup, setAlbumSetup] = useState<Album>();
  useAlbumSetup(albumSetup);

  if (!album) {
    return <View />;
  }
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {album.subtitle ? (
        <Text style={styles.subtitle}>{album.subtitle}</Text>
      ) : null}
      <View style={styles.topContainer}>
        <Pressable onPress={() => setAlbumSetup(album)}>
          <Image source={{ uri: album.image }} style={styles.cover} />
        </Pressable>
        <View style={styles.detailsContainer}>
          <Text style={styles.authors}>
            {album.authors.map((a) => a).join(", ")}
          </Text>
          <View>
            {album.categories?.map((category, index) => (
              <Text key={index} style={styles.categories} numberOfLines={1}>
                {category}
              </Text>
            ))}
          </View>

          <Text style={styles.pageCount}>{album.pageCount} pages</Text>
          <Text style={styles.chapters}>
            {album.chapters && album.chapters.length > 0
              ? album.chapters.length + " "
              : "There are currently no "}
            files
          </Text>
        </View>
      </View>
      <RenderHtml
        source={{ html: album.description || "" }}
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
});
