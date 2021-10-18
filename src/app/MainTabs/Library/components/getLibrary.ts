// TODO: list all folders in localRoot
// TODO: let user set localRootFolder dynamically
// TODO: get local library, online library and store them in AsyncStorage (where it makes sense)

// external dependencies
import {Alert} from "react-native";
import {FileSystem} from "react-native-file-access";

// internal dependencies
import {useStore} from "../../../../store/useStore";

export async function getLibrary() {
  await getLocalLibrary();
}

async function getLocalLibrary() {
  await handleLocalRoot();
}

// checking if local root exists and if not, create it
async function handleLocalRoot() {
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