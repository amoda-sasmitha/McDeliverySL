import React from "react";
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";

import { StyleSheet , Text} from "react-native";
import { fonts} from '../util/fonts'

import HomePage from "../screens/HomePage";
import MenuPage from "../screens/MenuPage";
import MainMenu from "../screens/MainMenu";
import FavouritePage from "../screens/FavouritePage";


 const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
     
      tabBarOptions={{
        activeTintColor : '#2D2D2D' , 
        labelStyle: { fontSize : 11.5 , marginBottom : 5 , fontFamily : fonts.medium},
        style : {
          height : 60,
          backgroundColor: '#EFEFEF' 
        },
      }}
    >
    <Tab.Screen name="Home" component={HomePage}
      
      options={{
        title : "Home",
        tabBarIcon :  ({ color }) => 
        <Icon name="home" style={[styles.item_icon]}  size={27} color={color}/> ,
      }} 
    />
    <Tab.Screen name="Menu" component={MenuPage}
      options={{
        title : "Menu",
        tabBarIcon :  ({ color }) => 
        <Icon name="book" style={[styles.item_icon]}  size={23} color={color}/> ,
      }} 
    />
    <Tab.Screen name="Favourite" component={FavouritePage}

      options={{
        title : "Favourite",
        tabBarIcon :  ({ color }) => 
        <Icon name="heart" style={[styles.item_icon]}  size={23} color={color}/> ,
      }} 
    />
    
    <Tab.Screen name="Track" component={HomePage}
      options={{
        title : "Track",
        tabBarIcon :  ({ color }) => 
        <Icon name="truck" style={[styles.item_icon]}  size={25} color={color}/> ,
      }} 
    />

    <Tab.Screen name="More" component={MainMenu}
      options={{
        title : "More",
        tabBarIcon :  ({ color }) => 
        <Icon name="list" style={[styles.item_icon]}  size={23} color={color}/> ,
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
  