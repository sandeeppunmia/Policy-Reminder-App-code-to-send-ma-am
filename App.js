import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import IntroScreen1 from "./screens/IntroScreen1";
import IntroScreen2 from './screens/IntroScreen2';
import IntroScreen3 from './screens/IntroScreen3';
import SignUpLoginScreen from './screens/SignUpLoginScreen';

export default function App(){
  return(
    <AppContainer/>
  )
}

const switchNavigator = createSwitchNavigator({
  IntroScreen1:{
    screen:IntroScreen1
  },
  IntroScreen2:{
    screen:IntroScreen2
  },
  IntroScreen3:{
    screen:IntroScreen3
  }
})

const AppContainer = createAppContainer(switchNavigator);