// external dependencies
import * as React from "react";

//internal dependencies
import {createStackNavigator} from "@react-navigation/stack";
import {AudioRoutes} from "../../components";
import {AudioPlayer} from "./AudioPlayer/AudioPlayer";
import {CurrentQueue} from "./CurrentQueue";
import {Pressable, StyleSheet, Text} from "react-native";
import {MainNavProps} from "../../components/navigation";
import {SleepTimer} from "./SleepTimer";
import {PlaybackSpeed} from "./PlaybackSpeed";

const AudioStack = createStackNavigator<AudioRoutes>();

export const AudioStackScreen = ({navigation}: MainNavProps<"AudioStack">) => {
  const {Navigator, Screen} = AudioStack;

  function queueButton() {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("AudioStack", {screen: "CurrentQueue"});
        }}
      >
        <Text style={styles.queueButton}>Queue</Text>
      </Pressable>
    );
  }

  return (
    <Navigator
      screenOptions={{
        headerTitle: "",
        headerShadowVisible: false,
        headerStyle: {backgroundColor: "#212121"},
        headerRight: () => queueButton(),
      }}
    >
      <Screen name="AudioPlayer" component={AudioPlayer} />
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
});
