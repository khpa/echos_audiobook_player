/* eslint-disable @typescript-eslint/no-explicit-any */
// external dependencies
import React, {useEffect} from "react";
import {View, Text} from "react-native";
import {TabNavProps} from "../../components/navigation";

// internal dependencies
import {handlePermissions} from "./components";
import {useStore} from "../../../store/useStore";

export const Library = ({navigation}: TabNavProps<"Library">) => {
  const {library} = useStore.getState();
  // console.log("Library", library);

  useEffect(() => {
    handlePermissions();
  }, []);
  return (
    <View>
      {library &&
        library.map((album: any) => (
          <Text key={album.isbn13}>{album.title}</Text>
        ))}
    </View>
  );
};
