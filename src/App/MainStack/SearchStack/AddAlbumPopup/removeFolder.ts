// external dependencies
import {Alert} from "react-native";
import {FileSystem} from "react-native-file-access";

// internal dependencies
import {useStore} from "../../../../store/useStore";

export async function removeFolder(newAlbum: any) {
  const folderName = newAlbum.title;
  const localRootFolder = useStore.getState().localRoot;
  const folderPath = `${localRootFolder}/${folderName}`;

  try {
    const folderContent = await FileSystem.ls(folderPath);
    if (folderContent.length > 0) {
      Alert.alert(
        "Folder is not empty",
        `${newAlbum.title} was deleted from your library, but the folder is still there`,
      );
    } else {
      await FileSystem.unlink(folderPath);
      Alert.alert("Success", `${folderName} was removed`);
    }
  } catch (error) {
    Alert.alert("Error", "Could not remove folder");
  }
}
