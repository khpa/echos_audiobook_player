// TODO - Permission handling for library could be done in a "on first startup" screen

// external dependencies
import React, {useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import {TabNavProps} from "../../components/navigation";

// internal dependencies
import {handlePermissions, checkRootFolder} from "./components";
import {useStore} from "../../../store/useStore";
import {FlatList} from "react-native-gesture-handler";
import {width} from "../../components";

export const Library = ({navigation}: TabNavProps<"Library">) => {
  const store = useStore();

  useEffect(() => {
    handlePermissions();
    checkRootFolder();
  }, []);

  if (store.library.length === 0) {
    return (
      <View style={styles.container}>
        <Text>"No Books added yet :("</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={store.library}
        numColumns={3}
        renderItem={({item}) => (
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("BookDetails", {
                book: item,
              });
            }}
          >
            <Image source={{uri: item.image}} style={styles.image} />
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: (width - 45) / 3,
    height: 180,
    margin: 5,
    borderRadius: 5,
  },
});
