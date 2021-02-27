
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Temp } from './temp';
import { globalStyles } from '../StyleSheet';


export function Today(props) {
  return (
    <View style={[globalStyles.textContainer, { height: '50%' }]}>
      <Temp style={[globalStyles.textView, { fontSize: 50 }]} temp={props.temp} />
      <Text style={[globalStyles.textView, { fontSize: 40 }]}>{props.location}</Text>
    </View>
  )
}