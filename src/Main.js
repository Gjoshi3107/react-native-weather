
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

import { WetherScreen } from './Screens';


function App() {

  const [network, getNetwork] = useState(true);

  useEffect(() => {
    NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      getNetwork(state.isConnected);
    });
  }, [])

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        {(network) ? <WetherScreen /> : null
          // <NoNetScreen />
        }
      </SafeAreaView>
    </>
  );
};

export default App;
