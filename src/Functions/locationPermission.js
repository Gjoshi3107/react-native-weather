import {
  PermissionsAndroid
} from 'react-native';


export async function requestLocationPermission() {
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
      } else {
        console.log('LOCATION permission denied');
      }
    }
    // return granted;
  } catch (err) {
    console.warn(err);
    // return false;
  }
}