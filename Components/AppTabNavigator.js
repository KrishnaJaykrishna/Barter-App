import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import ExchangeScreen from '../screens/ExchangeScreen.js';
import HomeScreen from '../screens/HomeScreen.js';


export const AppTabNavigator = createBottomTabNavigator({
  Exchange : {
    screen: ExchangeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/icon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Exchange",
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/icon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Home",
    }
  }
});
