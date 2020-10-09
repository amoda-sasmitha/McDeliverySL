// ./screens/About.js

import React from "react";
import { View , Text , StyleSheet , Image , Dimensions , TouchableOpacity} from "react-native";
import CommonStyles from '../util/CommonStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import { fonts} from '../util/fonts'
import { colors } from "../util/colors";
import moment from 'moment'


const width = Dimensions.get('window').width;

export default class FavItem extends React.Component {
  
    render(){
        return (
       <View>
        <View style={styles.food_card}>
            <View style={{flex : 2 , }}>
                <Image source={require('../../assets/images/icons/bag.png')} resizeMode={'contain'}
                style={{width : 75 , height : 75 }}/>
                <View style={styles.icon}>
                    { this.props.is_completed && <Icon  name="check" style={styles.status} ></Icon>}
                    { !this.props.is_completed && <Icon  name="clock-o" style={styles.pending} ></Icon>}
                </View>
            </View>
            <View style={{flex : 5 , justifyContent : 'center' }}>
                    <View style={{flexDirection : 'row' , justifyContent : 'space-between' }}>
                    <View>
                    <Text style={styles.food_name}>{`REF-DT-${this.props.id}`}</Text>
                    <Text style={styles.food_subtitle}>{moment(this.props.date, 'YYYY-MM-DD').format('MMMM Do YYYY')}</Text>
                    </View>
                        <View>
                        { this.props.is_completed && <Text style={styles.more}>More Details</Text>}
                        { !this.props.is_completed && <Text style={styles.more} >Track Order</Text>}
                        </View>
                    </View>
                    <View style={{flexDirection : 'row' , paddingTop : 10  }}>
                        <Text style={styles.price}>{`LKR ${this.props.total}.00`}</Text>
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
    //   backgroundColor : '#f7f7f7',
      paddingHorizontal : 10,
      paddingVertical : 12,
      borderColor : '#f4f4f4',
      borderWidth : 2
  },
  icon : {
      position : 'absolute',
      bottom : 5 ,
      right : 15 ,
  },
  status : {
    backgroundColor : '#27ae60',
    color : colors.White,
    borderRadius : 10,
    padding : 4,
  },
   more : {
    borderColor : colors.SecondaryDark,
    color : colors.SecondaryDark,
    borderWidth : 0.5,
    fontSize : fonts.semiBold ,
    fontSize : 12, 
    borderRadius : 4,
    paddingHorizontal : 8 ,
    paddingVertical : 4 ,
  },
  pending : {
    backgroundColor : '#f39c12',
    color : colors.White,
    borderRadius : 10,
    padding : 4,
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
