// external dependencies
import * as React from "react";

//internal dependencies
import {createStackNavigator} from "@react-navigation/stack";
import {AudioRoutes} from "../../components";
import {AudioPlayer} from "./AudioPlayer/AudioPlayer";
import {CurrentQueue} from "./CurrentQueue";
import {Pressable, StyleSheet, Text} from "react-native";
import {AudioPlayerProp} from "../../components/navigation";
import {SleepTimer} from "./SleepTimer";
import {PlaybackSpeed} from "./PlaybackSpeed";
import {Album} from "../SearchStack/AddAlbumPopup";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AudioStack = createStackNavigator<AudioRoutes>();

export const AudioStackScreen = ({navigation, route}: AudioPlayerProp) => {
  const {Navigator, Screen} = AudioStack;
  return (
    <Navigator
      screenOptions={{
        headerStyle: {backgroundColor: "#212121", shadowColor: "transparent"},
      }}
    >
      <Screen
        name="AudioPlayer"
        component={AudioPlayer}
        options={({route}) => ({
          headerTitle: route.params?.album.title,
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {color: "#fff"},
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
                style={{paddingHorizontal: 5}}
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

const styles = StyleSheet.create({
  queueButton: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFD479",
    paddingRight: 10,
  },
  topRightButton: {
    fontSize: 12,
    paddingRight: 10,
    color: "black",
  },
});
