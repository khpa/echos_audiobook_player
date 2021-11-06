// external dependencies
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";

// internal dependencies
import {Library} from "./Library";
import {BookDetails} from "./BookDetails";
import {TabNavProps} from "../../components/navigation";
import {Pressable, StyleSheet, Text} from "react-native";
import {useStore} from "../../../store/store";
import {removeFolder} from "./BookDetails";
import {BookSettings} from "./BookSettings";

const LibraryStack = createStackNavigator();

type Props = TabNavProps<"Library">;

export const LibraryStackScreen = ({navigation}: Props) => {
  const {Navigator, Screen} = LibraryStack;
  const store = useStore();

  function onPressHandler(activeRoute: any) {
    const currentAlbum = store.library.find(
      b => b.id === activeRoute.params.album.id,
    );
    store.removeAlbum(activeRoute.params.album.id);
    removeFolder(currentAlbum);
    navigation.reset({
      index: 0,
      routes: [{name: "Library"}],
    });
  }

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Library" component={Library} />
      <Screen
        name="BookDetails"
        component={BookDetails}
        options={({route}: any) => ({
          headerTitle: route.params?.album.title,
          headerShown: true,
          headerTitleAlign: "center",
          headerRight: () => (
            <Pressable onPress={() => onPressHandler(route)}>
              <Text style={styles.topRightButton}>Delete</Text>
            </Pressable>
          ),
        })}
      />
      <Screen name="BookSettings" component={BookSettings} />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  topRightButton: {
    fontSize: 12,
    paddingRight: 10,
  },
});
