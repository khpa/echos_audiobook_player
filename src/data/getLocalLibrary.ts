// external dependencies
import {Alert} from 'react-native';
import {FileSystem} from 'react-native-file-access';

// internal dependencies
import useStore from '../store/useStore';

export const getLocalLibrary = async () => {
  await handleLocalRoot();
  // Todo: list all folders in localRoot
};

// checking if local root exists and if not, create it
export async function handleLocalRoot() {
  const localRootFolder = useStore.getState().localRoot; // TODO: let user set localRootFolder dynamically
  try {
    if ((await FileSystem.exists(localRootFolder)) === false) {
      await FileSystem.mkdir(localRootFolder);
      Alert.alert(
        'Echos',
        `New local root folder created under ${localRootFolder}.`,
      );
    }
  } catch (error) {
    console.log(error);
  }
}
