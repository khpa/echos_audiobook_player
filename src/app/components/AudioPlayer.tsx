/* eslint-disable @typescript-eslint/no-explicit-any */
// external dependencies
import * as React from "react";
import {View, Text, Button} from "react-native";

// internal dependencies
import useStore from "../../store/useStore";

type Props = {
  navigation: any;
};

export const AudioPlayer = ({navigation}: Props) => {
  return (
    <View>
      <Text>AudioPlayer</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Start Playing"
        onPress={() =>
          useStore.setState({
            hasActiveAlbum: true,
          })
        }
      />
    </View>
  );
};
