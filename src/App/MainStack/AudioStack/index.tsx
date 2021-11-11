// external dependencies
import React from "react";
import { Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//internal dependencies
import type { AudioRoutes } from "../../../components";
import type { AudioPlayerProp } from "../../../util/navigation";
import type { Album } from "../SearchStack/AddAlbumPopup";

// types
import { AudioPlayer } from "./AudioPlayer/AudioPlayer";
import { CurrentQueue } from "./CurrentQueue";
import { SleepTimer } from "./SleepTimer";
import { PlaybackSpeed } from "./PlaybackSpeed";

const AudioStack = createStackNavigator<AudioRoutes>();

export const AudioStackScreen = ({ navigation }: AudioPlayerProp) => {
  const { Navigator, Screen } = AudioStack;
  return (
    <Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#212121", shadowColor: "transparent" },
      }}
    >
      <Screen
        name="AudioPlayer"
        component={AudioPlayer}
        options={({ route }) => ({
          headerTitle: route.params?.album.title,
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#fff" },
          headerRight: () => (
            <Pressable
              onPress={() => {
                navigation.navigate("MainTabs", {
                  screen: "LibraryStack",
                  params: {
                    screen: "BookDetails",
                    params: {
                      album: route.params.album as Album,
                    },
                  },
                });
              }}
            >
              <Icon
                name="dots-vertical"
                size={25}
                color="#fff"
                style={{ paddingHorizontal: 5 }}
              />
            </Pressable>
          ),
        })}
      />
      <Screen name="CurrentQueue" component={CurrentQueue} />
      <Screen name="SleepTimer" component={SleepTimer} />
      <Screen name="PlaybackSpeed" component={PlaybackSpeed} />
    </Navigator>
  );
};
