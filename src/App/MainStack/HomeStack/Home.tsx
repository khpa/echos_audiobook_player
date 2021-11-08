// TODO: Look into fluid transition between Home and AudioRoutes
// https://reactnavigation.org/docs/community-libraries-and-navigators

// external dependencies
import React, {useState} from "react";
import {View, StyleSheet, FlatList, Pressable, Image} from "react-native";

// internal dependencies
import {useStore} from "../../../store/store";
import {width} from "../../components";
import {useAlbumSetup} from "../../../hooks";
import {MainNavProps} from "../../components/navigation";
import {Album} from "../SearchStack/AddAlbumPopup";

export const Home = ({}: MainNavProps<"MainTabs">) => {
  const store = useStore();
  const [albumSetup, setAlbumSetup] = useState<Album>();
  useAlbumSetup(albumSetup);

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
            <Pressable onPress={() => setAlbumSetup(item)}>
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
