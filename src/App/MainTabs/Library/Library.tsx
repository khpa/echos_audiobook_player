/* eslint-disable @typescript-eslint/no-explicit-any */
// external dependencies
import React, {useEffect} from "react";
import {View, Text, Button} from "react-native";

// internal dependencies
import {getLibrary, handlePermissions} from "./components";

type Props = {
  navigation: any;
};

export const Library = ({navigation}: Props) => {
  useEffect(() => {
    handlePermissions();
    getLibrary();
  }, []);

  return (
    <View>
      <Text>Library</Text>
      <Button
        title="Go to Audio"
        onPress={() => navigation.navigate("AudioPlayer")}
      />
      <Button
        title="Go to AddAlbum"
        onPress={() => navigation.navigate("AddAlbum")}
      />
    </View>
  );
};
