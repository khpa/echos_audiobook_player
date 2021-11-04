// external dependencies
import React, {useEffect} from "react";
import {View, Text} from "react-native";
import {TabNavProps} from "../../components/navigation";

// internal dependencies
import {handlePermissions} from "./components";
import {useStore} from "../../../store/useStore";

export const Library = ({navigation}: TabNavProps<"Library">) => {
  const store = useStore();
  console.log("Library", store.library);

  useEffect(() => {
    handlePermissions();
  }, []);

  return (
    <View>
      {store.library &&
        store.library.map((album: any) => (
          <Text key={album.id}>{album.title}</Text>
        ))}
    </View>
  );
};
