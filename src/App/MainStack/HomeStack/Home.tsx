// TODO: Look into fluid transition between Home and AudioRoutes
// https://reactnavigation.org/docs/community-libraries-and-navigators

// external dependencies
import React from "react";
import {Text, View, StyleSheet, FlatList, Pressable, Image} from "react-native";
import {useStore} from "../../../store/store";
import {width} from "../../components";

// internal dependencies
import {MainNavProps} from "../../components/navigation";
import {playAlbum} from "../LibraryStack/BookDetails/playAlbum";

export const Home = ({navigation}: MainNavProps<"MainTabs">) => {
  const store = useStore();

  return (
    <View style={styles.container}>
      <View style={styles.lastPlayedContainer}>
        <FlatList
          // TODO - This function should be refactored
          data={store.library.filter(
            book => book.chapters !== undefined && book.chapters.length > 0,
          )}
          keyExtractor={(item, index) => item + index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                {
                  store.setActiveAlbum(item);
                  store.updateAlbum(item.id, "lastPlayed");
                  playAlbum(item).then(() => {
                    navigation.navigate("AudioStack" as any);
                  });
                }
              }}
            >
              <Image source={{uri: item.image}} style={styles.image} />
            </Pressable>
          )}
        />
      </View>
      <View style={styles.recentlyAdded}>
        <Text style={styles.lastPlayedTitle}>Recently Played</Text>
        <FlatList
          data={store.library}
          keyExtractor={(item, index) => item + index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                {
                  store.setActiveAlbum(item);
                  store.updateAlbum(item.id, "lastPlayed");
                  playAlbum(item).then(() => {
                    navigation.navigate("AudioStack" as any);
                  });
                }
              }}
            >
              <Image source={{uri: item.image}} style={styles.image} />
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  lastPlayedContainer: {
    height: width / 1.5,
  },
  lastPlayedTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  image: {
    width: (width - 40) / 3,
    height: (width - 40) / 2,
    margin: 5,
    borderRadius: 5,
  },
  recentlyAdded: {
    flex: 1,
  },
});
