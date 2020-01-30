/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AdMobBanner } from 'react-native-admob';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, alignContent: "center", justifyContent: "center"}}>
          <AdMobBanner
            adSize="fullBanner"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            testDevices={[AdMobBanner.simulatorId]}git
            onAdFailedToLoad={error => console.error(error)}
          />
        <Text>This is the App page</Text>
      </View>
    )
  }
}