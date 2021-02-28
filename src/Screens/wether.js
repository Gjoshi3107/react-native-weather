import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

import { Daily } from '../Component/daily';
import { Today } from '../Component/today';


export function WeatherScreen() {
  return (
    <>
      <SafeAreaView>
        <Today temp="23" location='Delhi' />
        <Daily day="Mon" temp="23" />
        <Daily day="Mon" temp="23" />
        <Daily day="Mon" temp="23" />
        <Daily day="Mon" temp="23" />
        <Daily day="Mon" temp="23" />
      </SafeAreaView>
    </>
  );
};

export default WeatherScreen;
