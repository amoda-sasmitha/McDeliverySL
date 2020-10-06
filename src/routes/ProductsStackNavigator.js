import React from "react";
import { createStackNavigator , CardStyleInterpolators } from '@react-navigation/stack';
import MenuPage from "../screens/MenuPage";
import ShoppingCartPage from "../screens/ShoppingCartPage";
import BottomTabNavigator from "./BottomTabNavigator";
const Stack = createStackNavigator();

// const fadeConfig = ({ current }) => {
//     return {
//         cardStyle: {
//             opacity: current.progress,
//         },
//     }
// };

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
  </Stack.Navigator>
  );
}

export default ProductStackNavigator;


  