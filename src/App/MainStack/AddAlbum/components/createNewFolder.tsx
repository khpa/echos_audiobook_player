// external dependencies
import {Alert} from "react-native";
import {FileSystem} from "react-native-file-access";
import {Album} from "../../../../store/slices/createLibrarySlice";

// internal dependencies
import {useStore} from "../../../../store/useStore";

export const createNewFolder = async (newAlbum: Album) => {
  await createLocalFolder(newAlbum);
};

const createLocalFolder = async (newAlbum: Album) => {
  const folderName = newAlbum.title;
  const localRootFolder = useStore.getState().localRoot;
  const folderPath = `${localRootFolder}/${folderName}`;

  try {
    await FileSystem.mkdir(folderPath);
    Alert.alert("Success", "New Folder created");
  } catch (error) {
    Alert.alert("Error", "Folder already exists");
  }
};
