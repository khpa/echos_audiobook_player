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

const AudioStack = createStackNavigator<AudioRoutes>();

export const AudioStackScreen = ({navigation}: AudioPlayerProp) => {
  const {Navigator, Screen} = AudioStack;
  return (
    <Navigator
      screenOptions={{
        headerTitle: "",
        headerShadowVisible: false,
        headerStyle: {backgroundColor: "#212121"},
      }}
    >
      <Screen
        name="AudioPlayer"
        component={AudioPlayer}
        options={({route}) => ({
          headerTitle: route.params?.album.title,
          headerShown: true,
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
              <Text style={styles.topRightButton}>Details</Text>
            </Pressable>
          ),
        })}
      />
      <Screen
        name="CurrentQueue"
        component={CurrentQueue}
        options={{headerShown: false}}
      />
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
