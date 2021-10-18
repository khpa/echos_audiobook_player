// external dependencies
import {Alert} from "react-native";
import {FileSystem} from "react-native-file-access";

// internal dependencies
import useStore from "../../../../store/useStore";

// Todo: list all folders in localRoot
// TODO: let user set localRootFolder dynamically

export const getLocalLibrary = async () => {
  await handleLocalRoot();
};

// checking if local root exists and if not, create it
export async function handleLocalRoot() {
  const localRootFolder = useStore.getState().localRoot;
  try {
    if ((await FileSystem.exists(localRootFolder)) === false) {
      await FileSystem.mkdir(localRootFolder);
      Alert.alert(
        "Echos",
        `New local root folder created under ${localRootFolder}.`,
      );
    }
  } catch (err) {
    console.log(err);
  }
}
