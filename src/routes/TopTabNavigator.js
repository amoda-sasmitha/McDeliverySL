import React from "react";
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { StyleSheet , Text} from "react-native";
import { fonts} from '../util/fonts'

import AddOrderPage from "../screens/AddOrderPage";
import AddSchedulePage from "../screens/AddSchedulePage";
import { HeaderTitle } from "@react-navigation/stack";
import { colors } from "../util/colors";



 const Tab = createMaterialTopTabNavigator ();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
        indicatorStyle: {
            height: null,
            top: 0,
            backgroundColor: colors.SecondaryDark,
        },
        tabStyle : {margin : 0 , padding : 0 },
        style:{
            paddingVertical: 0,    
            elevation: 3,
            margin : 0 ,
            padding : 0 
        },
    }}
    >
    <Tab.Screen name="OrderNow" component={AddOrderPage} options={{
        title : 'Order Now' ,
        tabBarLabel: ({ focused }) => {
            return <Text style={[styles.label, focused && styles.focusedLabel]}>{'Order Now'}</Text>;
          },
    }}/>
    <Tab.Screen name="ScheduleOrder" component={AddSchedulePage} options={{
        title : 'Schedule Order' ,
        tabBarLabel: ({ focused }) => {
            return <Text style={[styles.label, focused && styles.focusedLabel]}>{'Schedule Order'}</Text>;
          },
    }}/>
  </Tab.Navigator>
  );
}

export default TopTabNavigator;


const styles = StyleSheet.create({
   
    label : {
        fontFamily : fonts.medium,
        fontSize : 13,
    },
    focusedLabel:{
        color : colors.White
    },
  });
    