// ./screens/About.js

import React from "react";
import { View , Text , StyleSheet , Image , Dimensions , TouchableOpacity} from "react-native";
import CommonStyles from '../util/CommonStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import { fonts} from '../util/fonts'
import { colors } from "../util/colors";



const width = Dimensions.get('window').width;

export default class FavItem extends React.Component {
  
    render(){
        return (
       <View>
        <View style={styles.food_card}>
            <View style={{flex : 4 , }}>
            <Image source={this.props.image} 
            style={{width : 75 , height : 75 }}/>
            </View>
            <View style={{flex : 8 , justifyContent : 'center' }}>
                    <View style={{flexDirection : 'row' }}>
                    <View>
                    <Text style={styles.food_name}>{this.props.title}</Text>
                    <Text style={styles.food_subtitle}>{this.props.subtitle}</Text>
                    </View>
                    </View>
                    <View style={{flexDirection : 'row' , paddingTop : 10  }}>
                        <Text style={styles.price}>{`LKR ${this.props.price}.00`}</Text>
                        
                    </View>
            </View>
            <View style={{flex : 1 , justifyContent : 'center' }}>
            <TouchableOpacity
            onPress={() => this.props.OnPress(this.props.id)}>
           <Image source={require('../../assets/images/icons/remove_fav.png')}  resizeMode={'contain'}
            style={{width : 25 , height : 25 , alignItems : 'flex-start' }}/>
            </TouchableOpacity>
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
  fontFamily : fonts.medium,
  fontSize : 16,
  paddingRight : 10 ,
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
