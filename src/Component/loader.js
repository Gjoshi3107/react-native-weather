import React from 'react';
import LottieView from 'lottie-react-native';

export function Loader() {
  return <LottieView source={require('../Assets/loader/226-splashy-loader.json')} autoPlay loop />
}