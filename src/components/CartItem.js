// ./screens/About.js

import React from "react";
import { View , Text , StyleSheet , Image , Dimensions} from "react-native";
import CommonStyles from '../util/CommonStyle'
import Header from './Header'
import { fonts} from '../util/fonts'
import { colors } from "../util/colors";
import { round } from "react-native-reanimated";

const width = Dimensions.get('window').width;

export default class CartItem extends React.Component {
  
    render(){
        return (
       <View>
        <View style={styles.food_card}>
            <View style={{flex : 4 , }}>
            <Image source={this.props.image} 
            style={{width : 80 , height : 80 }}/>
            </View>
            <View style={{flex : 8 , justifyContent : 'center' }}>
                    <View style={{flexDirection : 'row' , }}>
                    <View>
                        <Text style={styles.food_name}>{this.props.title}</Text>
                        <Text style={styles.food_subtitle}>{this.props.subtitle}</Text>
                    </View>
                    {/* <Icon  name="heart" size={20} color={'red'}/> */}
                    </View>
                    <View style={{flexDirection : 'row' , paddingTop : 10 }}>
                        <Text style={styles.price}>{`10 X LKR ${this.props.price}.00`}</Text>
                        <Text style={styles.add_to_card}>-</Text>
                        <Text style={styles.add_to_card}>+</Text>
                    </View>
            </View>
        </View>
        </View>
        );
    }
}




const styles = StyleSheet.create({
   
  food_card : {
      marginTop : 8 ,
      flexDirection : 'row' , 
      marginHorizontal : 12 , 
      borderRadius : 6,
      paddingHorizontal : 10,
      paddingVertical : 12,
      borderColor : '#f4f4f4',
      borderWidth : 2
  },
  food_name : {
     fontFamily : fonts.medium,
     fontSize : 15
  },
  food_subtitle : {
    fontFamily : fonts.regular,
    fontSize : 13,
    color : '#818181'
 },
 price : {
  flex: 1,
  fontFamily : fonts.medium,
  fontSize : 16,
  color : '#383838',
  justifyContent: 'flex-start',
 },
 add_to_card : {
  fontFamily : fonts.medium,
  fontSize : 12,
  color : colors.White ,
  backgroundColor : '#454545',
  textAlignVertical : 'center',
  paddingHorizontal : 10 ,
  marginLeft : 6 ,
  borderRadius : 6 ,
  justifyContent: 'flex-end',
 },


});
