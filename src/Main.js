
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';

import { WeatherScreen, NoNetScreen } from './Screens';

import { Loader } from './Component/loader';
import { useNetInfo } from "@react-native-community/netinfo";
import { requestLocationPermission } from './Functions';


import { NETWORK, GEO_LOCATION, GET_LOADER } from './store/action'
import store from './store/configureStore';

function App() {
  const netinfo = useNetInfo();
  const [state, setState] = useState({});
  console.log("netinfo:-\n", netinfo);

  const unsubscribe = store.subscribe(() => {
    setState(store.getState());
    console.log("store changed:-", state);
  });
  useEffect(() => {
    requestLocationPermission();
    if (netinfo.isConnected == false) {
      store.dispatch(NETWORK(netinfo.isConnected))
      store.dispatch(GET_LOADER(false))
    }
    else if (netinfo.isConnected) {
      store.dispatch(NETWORK(netinfo.isConnected))
      store.dispatch(GET_LOADER(true))
      store.dispatch(GEO_LOCATION())
    }
  }, [netinfo])

  // useEffect(() => {
  //   console.log("loader state:-", state.loading);
  // }, [state])

  function callMyData() {
    // myData(getApiError, setCity, setTemp, setDay, useLoader);
  }

  console.log("state:-\n", state);
  return (
    <>
      <StatusBar barStyle="light-content" />
      {(state.network) ?
        (state.loading) ?
          <Loader />
          : <SafeAreaView>
            <WeatherScreen temp={state.forecast.Temp} city={state.forecast.City} day={state.forecast.Day} />
          </SafeAreaView>
        : <SafeAreaView><NoNetScreen myData={callMyData} /></SafeAreaView>
      }
    </>
  );
};


export default App;