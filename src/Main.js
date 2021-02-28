
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { WeatherScreen, NoNetScreen } from './Screens';

import { Loader } from './Component/loader';
import { useNetInfo } from "@react-native-community/netinfo";
import { getAPIData } from './API'
import { requestLocationPermission } from './Permission/location';
import Geolocation from '@react-native-community/geolocation';


function App() {

  const netinfo = useNetInfo();
  const [network, setNetwork] = useState(false);
  const [hasApiError, getApiError] = useState(false);
  const [runLoader, useLoader] = useState(false);

  useEffect(() => {
    console.log("netinfo.isConnected", netinfo.isConnected);
    setNetwork(netinfo.isConnected);
    requestLocationPermission()
    checkNet()
  })

  function checkNet() {
    console.log("netinfo.isConnected 0 ", netinfo.isConnected);
    if (!netinfo.isConnected) {
      console.log("netinfo.isConnected 1 ", netinfo.isConnected);
      useLoader(false)
    }
    else {
      console.log("netinfo.isConnected 2 ", netinfo.isConnected);
      useLoader(true);
    }
  }

  function myData() {
    Geolocation.getCurrentPosition(async (info) => {
      console.log("Geolocation\n", info)
      const response = await getAPIData(info.coords.latitude, info.coords.longitude);
      console.log("useeffect response:-\n", response.ok);
      if (!response.ok) {
        getApiError(true);
      }
    });
  }
  useEffect(() => {
    myData()
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      {(network && !hasApiError) ?
        (runLoader) ?
          <Loader />
          : <SafeAreaView><WeatherScreen /></SafeAreaView>
        : <SafeAreaView><NoNetScreen myData={myData} /></SafeAreaView>
      }
    </>
  );
};

export default App;
