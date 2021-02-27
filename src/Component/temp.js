
import { Text } from 'react-native';
import React from 'react';

export function Temp(props) {
  return (
    <Text style={props.style}>{props.temp}°</Text>
  )
}