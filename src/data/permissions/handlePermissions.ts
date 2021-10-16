import {Platform} from 'react-native';
import {PERMISSIONS} from 'react-native-permissions';
import {handleAndroidPermissions} from './handleAndroidPermissions';

// distribute permissionChecks depending on platform
export const handlePermissions = () => {
  if (Platform.OS === 'android') {
    const readStorage = PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
    const writeStorage = PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;
    handleAndroidPermissions([readStorage, writeStorage]);
  } else if (Platform.OS === 'ios') {
    // TODO: add iOS permission checks
  }
};
