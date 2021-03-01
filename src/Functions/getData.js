

import { weatherAPI, forecastAPI } from '../API';
import Geolocation from 'react-native-geolocation-service';

// Timestamp covertion to day
function tsToDay(timestamp) {
  var dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var d = new Date(0);
  let x = d.setUTCSeconds(timestamp);
  let date = new Date(x);
  console.log("date:- ", date);
  return dayArray[date.getDay()];
}

export function myData(getApiError, setCity, setTemp, setDay, useLoader) {
  Geolocation.getCurrentPosition(
    async (info) => {
      console.log("Geolocation\n", info);

      const responseW = await weatherAPI(info.coords.latitude, info.coords.longitude);
      const responseF = await forecastAPI(info.coords.latitude, info.coords.longitude);
      console.log("getAPIData got response:-\n", responseW.ok, "\n", responseF.ok);
      if (!responseW.ok && !responseF.ok) {
        getApiError(true);
      }
      else {
        setCity(responseW.data.name);
        let tempC = [];
        let nextDay = [];
        tempC.push(responseF.data.current.temp);

        responseF.data.daily.forEach((element) => {
          tempC.push(element.temp.day);
          nextDay.push(tsToDay(element.dt));
        })
        setTemp(tempC);
        setDay(nextDay);
        useLoader(false);

        console.log("temperature:-\n", tempC);
        console.log("Day:-\n", nextDay);
        console.log("city:-\n", responseW.data.name);
      }
    },
    (error) => {
      console.log(error.code, error.message);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 10000
    }
  );

}