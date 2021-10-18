/* eslint-disable @typescript-eslint/no-explicit-any */
// external dependencies
import {checkMultiple, requestMultiple} from "react-native-permissions";

// check if permissions are already granted
export function handleAndroidPermissions(permissionsToCheck: any) {
  try {
    checkMultiple(permissionsToCheck).then(results => {
      const permissionRequests = [];
      for (const result in results) {
        if (results[result] !== "granted") {
          permissionRequests.push(result);
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
function requestAndroidPermissions(permissionsToRequest: any) {
  try {
    requestMultiple(permissionsToRequest).then(results => {
      for (const result in results) {
        if (results[result] !== "granted") {
          console.warn(`Permission ${result} was not granted`);
        }
      }
    });
  } catch (error) {
    console.warn(error);
  }
}
