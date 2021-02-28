
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { WeatherScreen, NoNetScreen } from './Screens';

import { Loader } from './Component/loader';
import { useNetInfo } from "@react-native-community/netinfo";

import LottieView from 'lottie-react-native';
import { getAPIData } from './API'

function App() {

  const netinfo = useNetInfo();
  const [network, setNetwork] = useState(false);
  const [checkNetwork, getNetwork] = useState(true);
  const [runLoader, useLoader] = useState(false);

  console.log("netinfo.isConnected", netinfo.isConnected);
  useEffect(() => {
    setNetwork(netinfo.isConnected);
    if (!netinfo.isConnected) {
      console.log("netinfo.isConnected 1 ", netinfo.isConnected);
      useLoader(false)
    }
    else {
      console.log("netinfo.isConnected 2 ", netinfo.isConnected);
      useLoader(true);
      const response = getAPIData(29.235294, 79.547332);
      console.log(response.ok);
      if (!response.ok) {
        useLoader(false);
        setNetwork(false);
      }
    }
  })

  return (
    <>
      <StatusBar barStyle="light-content" />
      {(network) ?
        (runLoader) ?
          // <LottieView source={require('./Assets/loader/226-splashy-loader.json')} autoPlay loop />
          <Loader />
          : <SafeAreaView> <WeatherScreen /></SafeAreaView>
        : <SafeAreaView><NoNetScreen getNetwork={getNetwork} /></SafeAreaView>
      }
    </>
  );
};

export default App;
