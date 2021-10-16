// external dependencies
import {Platform} from 'react-native';
import {PERMISSIONS} from 'react-native-permissions';

// internal dependencies
import {handleAndroidPermissions} from './android/handleAndroidPermissions';

// centralized permission handling
export const handlePermissions = () => {
  switch (Platform.OS) {
    case 'android':
      const readStorage = PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
      const writeStorage = PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;
      handleAndroidPermissions([readStorage, writeStorage]);
      break;
    default:
      console.log('unknown Platform');
      break;
  }
};
