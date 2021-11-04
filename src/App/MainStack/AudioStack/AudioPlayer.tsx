// external dependencies
import * as React from "react";
import {View, Text, Button} from "react-native";

// internal dependencies
import {useStore} from "../../../store/useStore";
import {MainNavProps} from "../../components/navigation";

export const AudioPlayer = ({navigation}: MainNavProps<"AudioStack">) => {
  const store = useStore();
  return (
    <View>
      <Text>AudioPlayer</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Start" onPress={() => store.updateActiveAlbum(true)} />
    </View>
  );
};
