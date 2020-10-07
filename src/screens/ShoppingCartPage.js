// ./screens/About.js

import React from "react";
import { View , Text , StyleSheet , ScrollView  , Image , Alert , TouchableOpacity} from "react-native";
import CommonStyles from '../util/CommonStyle'
import DefaultHeader from '../components/DefaultHeader'
import CartItem from '../components/CartItem'
import { fonts} from '../util/fonts'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from "../util/colors";
import {getCart} from '../util/data'


export default class ShoppingCartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    
  }
    render(){
      const {active} = this.state;
        return (
          <View style={CommonStyles.normalPage_white}>
            <DefaultHeader  title={'Shopping Cart'} back={true}/>
             <ScrollView>
               
                { getCart(cart).map( (props,i) => <CartItem key={i} {...props} />) }
             </ScrollView>
          </View>
        );
    }


   
    
}

const styles = StyleSheet.create({
   
 current_category : {
   fontSize : 18 , 
   fontFamily : fonts.semiBold,
   paddingHorizontal : 12 ,
   marginTop : 5 ,
   paddingVertical : 5 ,
   backgroundColor : '#F5F5F5' , 
   color : colors.PrimaryDark
 }

});

const cart = [
  { id : 2 , qty : 2},
  { id : 1 , qty : 1}
]


