import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {  View, StyleSheet , Text } from 'react-native';
import BottomTabNavigator from './BottomTabNavigator'

class Navigation extends Component {
  
  constructor(props) {
    super(props);
    
  }

    render(){
        return (
          <NavigationContainer>
            <BottomTabNavigator></BottomTabNavigator>
            {/* <Text></Text> */}
          </NavigationContainer>
        );
    }
}



export default Navigation


