
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Temp } from './temp';
import { globalStyles } from '../StyleSheet';

export function Daily(props) {
  return (
    <View style={styles.textContainer}>
      <Text style={[styles.textView, { textAlign: 'left' }]}>{props.day}</Text>
      <Temp style={[styles.textView, { textAlign: 'right' }]} temp={props.temp} />
    </View>
  )
}


const styles = StyleSheet.create({
  textContainer: {
    ...globalStyles.textContainer,
    backgroundColor: '#ccc',
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 25,
    height: '10%'
  },
  textView: {
    ...globalStyles.textView,
    fontSize: 25,
    width: '50%',
  },
});