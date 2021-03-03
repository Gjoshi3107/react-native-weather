
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';

import { WeatherScreen, NoNetScreen } from './Screens';

import { Loader } from './Component/loader';
import { useNetInfo } from "@react-native-community/netinfo";
import { requestLocationPermission, myData } from './Functions';


import { connect } from 'react-redux';
import { STORE_FORECAST } from './redux/action'
import { getStateFromStore } from './index';

function App() {

  const netinfo = useNetInfo();
  const [network, setNetwork] = useState(false);
  const [hasApiError, getApiError] = useState(false);
  const [runLoader, useLoader] = useState(false);
  const [temp, setTemp] = useState([]);
  const [day, setDay] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    console.log("netinfo.isConnected", netinfo.isConnected);
    setNetwork(netinfo.isConnected);
    requestLocationPermission();
    console.log("netinfo.isConnected 0 ", netinfo.isConnected);
    if (!netinfo.isConnected) {
      console.log("netinfo.isConnected 1 ", netinfo.isConnected);
      useLoader(false)
    }
    else {
      console.log("netinfo.isConnected 2 ", netinfo.isConnected);
      useLoader(true);
      myData(getApiError, setCity, setTemp, setDay, useLoader);
    }
  }, [netinfo])

  function callMyData() {
    myData(getApiError, setCity, setTemp, setDay, useLoader);
  }

  useEffect(() => {
    console.log('Loader:-', runLoader);
  }, [runLoader]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      {(network && !hasApiError) ?
        (runLoader) ?
          <Loader />
          : <SafeAreaView>
            <WeatherScreen temp={temp} city={city} day={day} />
          </SafeAreaView>
        : <SafeAreaView><NoNetScreen myData={callMyData} /></SafeAreaView>
      }
    </>
  );
};


const mapStateToProps = state => {
  return { data: state };
};


function mapDispatchToProps(dispatch) {
  return {
    SF: (article) => { dispatch(STORE_FORECAST(article)) },
  };
}
const Connect = connect(mapStateToProps, mapDispatchToProps)(App);
export default Connect;