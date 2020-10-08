// ./screens/About.js

import React from "react";
import { View , Text , StyleSheet , Image , Dimensions , TouchableOpacity} from "react-native";
import CommonStyles from '../util/CommonStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import { fonts} from '../util/fonts'
import { colors } from "../util/colors";



const width = Dimensions.get('window').width;

export default class NotFound extends React.Component {
  
    render(){
        return (
       <View style={styles.wrapper}>
            <Image source={require('../../assets/images/icons/empty.png')} 
            style={{width : 55 , height : 55 , tintColor : '#212121BF' , marginRight : 12  }}/>
           <View>
           <Text style={styles.title}>Sorry,</Text>
           <Text style={styles.text}>{this.props.item}List is Empty !</Text>
           </View>
       </View>
        );
    }
}




const styles = StyleSheet.create({
    wrapper : {
        flexDirection : 'row' , 
        borderColor : '#DDDDDD',
        borderWidth : 1,
        marginHorizontal : 12 , 
        marginVertical : 12 ,
        borderRadius : 6 , 
        paddingHorizontal : 12 , 
        paddingVertical : 20 ,
    },
    text : {
        fontFamily : fonts.regular , 
        fontSize : 15.5 ,
        color : colors.LightGray,
        lineHeight : 22
    },
    title : {
        marginTop : 5 ,
        fontFamily : fonts.medium , 
        fontSize : 18 ,
        color : colors.LightGray,
        
    }


});
