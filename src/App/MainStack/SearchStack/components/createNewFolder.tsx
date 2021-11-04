// external dependencies
import {Alert} from "react-native";
import {FileSystem} from "react-native-file-access";
import {Album} from "../../components/types";

// internal dependencies
import {useStore} from "../../../../store/useStore";

export const createNewFolder = async (newAlbum: Album) => {
  const folderName = newAlbum.title;
  await createLocalFolder(folderName);
};

const createLocalFolder = async (folderName: string) => {
  const localRootFolder = useStore.getState().localRoot;
  const folderPath = `${localRootFolder}/${folderName}`;

  try {
    await FileSystem.mkdir(folderPath);
    Alert.alert("Success", "New Folder created");
  } catch (error) {
    Alert.alert("Error", "Folder already exists");
  }
};
