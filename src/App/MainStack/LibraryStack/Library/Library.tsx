// external dependencies
import React, {useEffect} from "react";
import {View, Text, StyleSheet, Image, FlatList, Pressable} from "react-native";
import {TabNavProps} from "../../../components/navigation";

// internal dependencies
import {handlePermissions} from "./handlePermissions";
import {checkRootFolder} from "./checkRootFolder";
import {useStore} from "../../../../store/store";
import {width} from "../../../components";

export const Library = ({navigation}: TabNavProps<"Library">) => {
  const store = useStore();

  // TODO - Permission handling could be done in a "on first startup" screen
  useEffect(() => {
    handlePermissions();
    checkRootFolder();
  }, []);

  if (store.library.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyLibrary}>No books added yet :(</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={store.library}
        keyExtractor={(item, index) => item + index.toString()}
        numColumns={3}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate("BookDetails", {
                album: item,
              });
            }}
          >
            <Image source={{uri: item.image}} style={styles.image} />
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  image: {
    width: (width - 40) / 3,
    height: (width - 40) / 2,
    margin: 5,
    borderRadius: 5,
  },
  emptyLibrary: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
