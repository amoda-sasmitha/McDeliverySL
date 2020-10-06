import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {  View, StyleSheet , Text } from 'react-native';
import ProductsStackNavigator from './ProductsStackNavigator'

class Navigation extends Component {
  
  constructor(props) {
    super(props);
    
  }

    render(){
        return (
          <NavigationContainer>
            <ProductsStackNavigator></ProductsStackNavigator>
            {/* <Text></Text> */}
          </NavigationContainer>
        );
    }
}



export default Navigation


