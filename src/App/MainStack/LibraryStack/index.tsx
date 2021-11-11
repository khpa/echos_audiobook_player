// external dependencies
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// internal dependencies
import type {
  LibraryStackNavProps,
  LibraryStackParamList,
} from "../../../navigation";

import { Library } from "./Library";
import { BookDetails } from "./BookDetails";
import { BookSettings } from "./BookSettings";

const LibraryStack = createStackNavigator<LibraryStackParamList>();

type Props = LibraryStackNavProps<"Library">;

export const LibraryStackScreen = ({ navigation }: Props) => {
  const { Navigator, Screen } = LibraryStack;

  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        headerTitleStyle: { color: "black" },
        headerStyle: {
          shadowColor: "transparent",
        },
        headerTitle: route.params?.album.title,
      })}
    >
      <Screen
        name="Library"
        component={Library}
        options={{ headerShown: false }}
      />
      <Screen
        name="BookDetails"
        component={BookDetails}
        options={({ route }) => ({
          headerRight: () => (
            <Pressable
              onPress={() =>
                navigation.navigate("BookSettings", {
                  album: route.params.album,
                })
              }
            >
              <Text style={styles.topRightButton}>Settings</Text>
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
    color: "black",
  },
});
