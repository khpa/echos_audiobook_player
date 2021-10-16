import {checkMultiple, requestMultiple} from 'react-native-permissions';

// check if permissions are already granted
export function handleAndroidPermissions(requiredPermissions: any[]) {
  try {
    checkMultiple(requiredPermissions).then(results => {
      let permissionRequests = [];
      for (const permission in results) {
        if (results[permission] !== 'granted') {
          permissionRequests.push(permission);
        }
      }
      if (permissionRequests.length > 0) {
        requestAndroidPermissions(permissionRequests);
      }
    });
  } catch (error) {
    console.warn(error);
  }
}

// request permissions that have not been granted
function requestAndroidPermissions(permissions: any[]) {
  try {
    requestMultiple(permissions).then(results => {
      for (const permission in results) {
        if (results[permission] !== 'granted') {
          console.warn(`Permission ${permission} was not granted`);
        }
      }
    });
  } catch (error) {
    console.warn(error);
  }
}
