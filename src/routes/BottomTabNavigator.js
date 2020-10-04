import React from "react";
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";

import { StyleSheet , Text} from "react-native";

import HomePage from "../screens/HomePage";

 const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
     style={{ padding : 20 }}
      tabBarOptions={{
        activeTintColor : '#2D2D2D' , 
        labelStyle: { fontSize : 10 , marginBottom : 5 , fontWeight : 'bold'},
      }}
    >
    <Tab.Screen name="Home" component={HomePage}
      options={{
        title : "Home",
        tabBarIcon :  ({ color }) => 
        <Icon name="home" style={[styles.item_icon]}  size={24} color={color}/> ,
      }} 
    />
    <Tab.Screen name="Menu" component={HomePage}
      options={{
        title : "Menu",
        tabBarIcon :  ({ color }) => 
        <Icon name="book" style={[styles.item_icon]}  size={20} color={color}/> ,
      }} 
    />
    <Tab.Screen name="Favourite" component={HomePage}
      options={{
        title : "Favourite",
        tabBarIcon :  ({ color }) => 
        <Icon name="heart" style={[styles.item_icon]}  size={20} color={color}/> ,
      }} 
    />
    
    <Tab.Screen name="Track" component={HomePage}
      options={{
        title : "Track",
        tabBarIcon :  ({ color }) => 
        <Icon name="truck" style={[styles.item_icon]}  size={22} color={color}/> ,
      }} 
    />

    <Tab.Screen name="More" component={HomePage}
      options={{
        title : "More",
        tabBarIcon :  ({ color }) => 
        <Icon name="list" style={[styles.item_icon]}  size={20} color={color}/> ,
      }} 
    />
    </Tab.Navigator>
  );
}

export default BottomNavigator;


const styles = StyleSheet.create({
   
  item_icon : {
      alignSelf : 'center', 
      paddingTop : 8 ,
      borderRadius : 4,
  },
  item_text:{
      fontWeight : '700',
      fontSize : 14.5 ,
  },
});
  