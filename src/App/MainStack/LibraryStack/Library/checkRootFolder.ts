// TODO: let user set localRootFolder dynamically

// external dependencies
import { Alert } from "react-native";
import { FileSystem } from "react-native-file-access";

// internal dependencies
import { useStore } from "../../../../store/store";

export async function checkRootFolder() {
  if (useStore.getState().localRoot === "") {
    await createLocalRoot();
  }
}

// checking if local root exists and if not, create it
async function createLocalRoot() {
  const localRootFolder = useStore.getState().localRoot;
  try {
    if ((await FileSystem.exists(localRootFolder)) === false) {
      await FileSystem.mkdir(localRootFolder);
      Alert.alert(
        "Echos",
        `New local root folder created under ${localRootFolder}.`
      );
    }
  } catch (err) {
    console.log(err);
  }
}
