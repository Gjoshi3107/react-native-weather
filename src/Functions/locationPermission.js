import {
  PermissionsAndroid
} from 'react-native';


export default async function requestLocationPermission() {
  try {
    var permission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Location Permission Required",
        message: "Require Location Permission for Locality Weather Report. Cannot pass Weather without it ",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    console.log("LOCATION permission granted:- ", permission);
    var hasGranted;
    if (!permission) {
      var granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission Required",
          message: "Require Location Permission for Locality Weather Report. Cannot pass Weather without it ",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('LOCATION permissions granted');
        hasGranted = true;
      } else {
        console.log('LOCATION permission denied');
        hasGranted = false;
      }
    }
    else {
      hasGranted = true;
    }
    return hasGranted;
  } catch (err) {
    console.warn(err);
    return false;
  }
}