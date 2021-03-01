
import React from 'react';
import { Daily } from './daily';

export function DailyList(props) {
  let DailyData = [];
  for (let i = 1; i < 6; i++) {
    DailyData.push(<Daily key={i} day={props.day[i]} temp={props.temp[i]} />)
  }
  return DailyData;
}