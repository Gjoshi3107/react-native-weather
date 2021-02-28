
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';



export function NoNetScreen(props) {

  function retry() {
    console.log("here");
    props.myData();
  }

  return (
    <>
      <SafeAreaView style={{ justifyContent: 'center', height: '100%', paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 60 }}>Something went wrong at our end</Text>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => { retry() }}
        >
          <Text style={{ fontSize: 30 }}>Retry</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  touch: {
    marginVertical: 40,
    justifyContent: 'center',
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
    width: '25%',
    height: 50
  }
})

export default NoNetScreen;
