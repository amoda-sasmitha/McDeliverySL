import React from "react";
import { createStackNavigator , CardStyleInterpolators } from '@react-navigation/stack';

import MenuPage from "../screens/MenuPage";
import ShoppingCartPage from "../screens/ShoppingCartPage";
import LoginPage from "../screens/LoginPage";
import RegisterPage from "../screens/RegisterPage";
import ActivateAccountPage from "../screens/ActivateAccountPage";
import FeedbackPage from "../screens/FeedbackPage";
import SingleProductPage from "../screens/SingleProductPage";
import AddAddressPage from "../screens/AddAddressPage";
import OrderTrackPage from "../screens/OrderTrackPage";
import BottomTabNavigator from "./BottomTabNavigator";
import TopTabNavigator from "./TopTabNavigator";

const Stack = createStackNavigator();


const ProductStackNavigator = () => {
  return (
    <Stack.Navigator 
        initialRouteName={'Main'} 
        headerMode={'none'}
        
    >
    <Stack.Screen name="Main" component={BottomTabNavigator}
    options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
    />
    <Stack.Screen name="ShoppingCart" component={ShoppingCartPage} 
    options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
     />

    <Stack.Screen name="Login" component={LoginPage} 
    options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
     />

    <Stack.Screen name="Register" component={RegisterPage} 
    options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
     />
    <Stack.Screen name="Activate" component={ActivateAccountPage} 
    options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
     />
    <Stack.Screen name="Feedback" component={FeedbackPage} 
    options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
     />
    <Stack.Screen name="AddAddress" component={AddAddressPage} 
    options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
     />
    <Stack.Screen name="Product" component={SingleProductPage} 
    options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
     />
    <Stack.Screen name="AddOrder" component={TopTabNavigator} 
    options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
     />
    <Stack.Screen name="OrderTrack" component={OrderTrackPage} 
    options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
     />
  </Stack.Navigator>
  );
}

export default ProductStackNavigator;


  