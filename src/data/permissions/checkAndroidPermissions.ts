import {Platform, PermissionsAndroid} from 'react-native';
import {requestAndroidPermissions} from './requestAndroidPermissions';

export const checkAndroidPermissions = async () => {
  try {
    if (Platform.OS === 'android') {
      const readGranted = await PermissionsAndroid.check(
        'android.permission.READ_EXTERNAL_STORAGE',
      );
      const writeGranted = await PermissionsAndroid.check(
        'android.permission.WRITE_EXTERNAL_STORAGE',
      );
      if (readGranted && writeGranted) {
        return;
      } else {
        await requestAndroidPermissions();
      }
    } else {
      // TODO: add iOS permission checks
      console.log('This is not Android.');
    }
  } catch (err) {
    console.warn(err);
  }
};
