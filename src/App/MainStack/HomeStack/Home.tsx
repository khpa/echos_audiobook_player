// TODO: Look into fluid transition between Home and AudioRoutes
// https://reactnavigation.org/docs/community-libraries-and-navigators

// external dependencies
import React, { useState } from "react";
import { View, StyleSheet, FlatList, Pressable, Image } from "react-native";

// internal dependencies
import { useStore } from "../../../store/store";
import { Container, width } from "../../../components";
import { useAlbumSetup } from "../../../hooks";
import type { MainNavProps } from "../../../util/navigation";
import type { Album } from "../SearchStack/AddAlbumPopup";

export const Home = ({}: MainNavProps<"MainTabs">) => {
  const store = useStore();
  const [albumSetup, setAlbumSetup] = useState<Album>();
  useAlbumSetup(albumSetup);

  return (
    <Container style={styles.container}>
      <View style={styles.lastPlayedContainer}>
        <FlatList
          // TODO - This function should be refactored
          data={store.library.filter(
            (book) => book.chapters !== undefined && book.chapters.length > 0
          )}
          keyExtractor={(item, index) => item + index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable onPress={() => setAlbumSetup(item)}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </Pressable>
          )}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  lastPlayedContainer: {
    height: width / 1.5,
  },
  image: {
    width: (width - 40) / 3,
    height: (width - 40) / 2,
    margin: 5,
    borderRadius: 5,
  },
});
