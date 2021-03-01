import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

import { DailyList } from '../Component/dailylist';
import { Today } from '../Component/today';


export function WeatherScreen(props) {
  return (
    <>
      <SafeAreaView>
        <Today temp={props.temp[0]} location={props.city} />
        <DailyList {...props} />
      </SafeAreaView>
    </>
  );
};

export default WeatherScreen;
