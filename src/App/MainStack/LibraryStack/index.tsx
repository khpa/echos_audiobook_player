// external dependencies
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// internal dependencies
import type { TabNavProps } from "../../components/navigation";

import { Library } from "./Library";
import { BookDetails } from "./BookDetails";
import { BookSettings } from "./BookSettings";

const LibraryStack = createStackNavigator();

type Props = TabNavProps<"Library">;

export const LibraryStackScreen = ({ navigation }: Props) => {
  const { Navigator, Screen } = LibraryStack;

  return (
    <Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: false,
        headerTitleStyle: { color: "black" },
        headerStyle: {
          shadowColor: "transparent",
        },
      }}
    >
      <Screen name="Library" component={Library} />
      <Screen
        name="BookDetails"
        component={BookDetails}
        options={({ route }: any) => ({
          headerTitle: route.params?.album.title,
          headerShown: true,
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
