import {PermissionsAndroid} from 'react-native';

export const requestAndroidPermissions = async () => {
  try {
    PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]).then(result => {
      if (
        result['android.permission.READ_EXTERNAL_STORAGE'] &&
        result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
      ) {
        console.log('Permission granted');
      } else if (
        result['android.permission.READ_EXTERNAL_STORAGE'] ||
        result['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          'never_ask_again'
      ) {
        console.log('Permission denied');
      }
    });
  } catch (err) {
    console.warn(err);
  }
};
