
import { API_CALL, SAVE_LOCATION, FAIL_GEO_LOCATION } from '../action';
import { GET_LOCATION } from '../component(action type)';
import Geolocation from 'react-native-geolocation-service';


const geoLoc = ({ dispatch, getStore }) => next => action => {
  if (action.type !== GET_LOCATION)
    return next(action);

  try {
    Geolocation.getCurrentPosition(
      async (info) => {
        console.log("Geolocation\n", info);
        dispatch(SAVE_LOCATION([info.coords.latitude, info.coords.longitude]));
        dispatch(API_CALL());
      },
      (error) => {
        console.log(error.code, error.message);
        dispatch(FAIL_GEO_LOCATION(error.message));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 10000
      }
    )
  }
  catch (err) {
    console.log("geolocation err:-\n", err);
    dispatch(FAIL_GEO_LOCATION(err.message));
  }

}


export default geoLoc;