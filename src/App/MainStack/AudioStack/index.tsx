// external dependencies
import * as React from "react";

//internal dependencies
import {createStackNavigator} from "@react-navigation/stack";
import {AudioRoutes} from "../../components";
import {MiniPlayer} from "./MiniPlayer";
import {AudioPlayer} from "./AudioPlayer/AudioPlayer";
import {CurrentQueue} from "./CurrentQueue";

const AudioStack = createStackNavigator<AudioRoutes>();

export const AudioStackScreen = () => {
  const {Navigator, Screen} = AudioStack;
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="MiniPlayer" component={MiniPlayer} />
      <Screen name="AudioPlayer" component={AudioPlayer} />
      <Screen name="CurrentQueue" component={CurrentQueue} />
    </Navigator>
  );
};
