// ./screens/About.js

import React from "react";
import { View , Text , StyleSheet , Image , Dimensions} from "react-native";
import CommonStyles from '../util/CommonStyle'
import Header from '../components/Header'
import { fonts} from '../util/fonts'
import { colors } from "../util/colors";
import { round } from "react-native-reanimated";

const width = Dimensions.get('window').width;

export default class FoodItem extends React.Component {
  
    render(){
        return (
       <View>
        <View style={styles.food_card}>
            <View style={{flex : 5 , }}>
            <Image source={this.props.image} 
            style={{width : 115 , height : 115 }}/>
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
                        <Text style={styles.price}>{`LKR ${this.props.price}.00`}</Text>
                        <Text style={styles.add_to_card}>Add to Cart</Text>
                    </View>
            </View>
        </View>
        <View style={styles.overlay}>
        </View>
        </View>
        );
    }
}




const styles = StyleSheet.create({
   
  food_card : {
      flexDirection : 'row' , 
      marginHorizontal : 12 , 
    //   backgroundColor : '#f4f4f4',
      borderRadius : 6,
      // elevation : 2 
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
  fontFamily : fonts.light,
  fontSize : 18,
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
 overlay : {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    bottom: 0,
    marginHorizontal : 12 , 
    borderRadius : 6,
    width: width - 24,
    height: 45,
    marginBottom : 8 ,
    backgroundColor : '#f4f4f4',
    zIndex : -1
 }

});
