
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';

import { WeatherScreen, NoNetScreen } from './Screens';

import { Loader } from './Component/loader';
import { useNetInfo } from "@react-native-community/netinfo";
import requestLocationPermission from './Functions/locationPermission';


import { NETWORK, GEO_LOCATION, FAIL_GEO_LOCATION, GET_LOADER } from './store/action'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const netinfo = useNetInfo();
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    callMyData2();
  }, [netinfo])

  async function callMyData2() {
    const into = await requestLocationPermission();
    if (netinfo.isConnected == false || !into) {
      dispatch(NETWORK(netinfo.isConnected))
      dispatch(FAIL_GEO_LOCATION())
      dispatch(GET_LOADER(false))
    }
    else if (netinfo.isConnected && into) {
      dispatch(NETWORK(netinfo.isConnected))
      dispatch(GET_LOADER(true))
      dispatch(GEO_LOCATION())
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      {(state.network && !state.hasApiError) ?
        (state.loading) ?
          <Loader />
          : <SafeAreaView>
            <WeatherScreen temp={state.forecast.Temp} city={state.forecast.City} day={state.forecast.Day} />
          </SafeAreaView>
        : <SafeAreaView><NoNetScreen myData={callMyData2} /></SafeAreaView>
      }
    </>
  );
};


export default App;