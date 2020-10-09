
import React, {Component} from 'react';
import { View, Text, StyleSheet , TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../util/colors'
import CommonStyle from '../util/CommonStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { fonts } from '../util/fonts';

export default function DefaultHeader(props){

    const navigation = useNavigation();
    return(
       <View>
           <View style={styles.default}>
            { props.back && <TouchableOpacity onPress={(props) => { navigation.goBack() }}>
                <View style={styles.cart_btn}>
                <Icon name="angle-left"  size={30} color={colors.SecondaryDark }/> 
                </View>
            </TouchableOpacity>}
            <Text style={styles.title}>{props.title}</Text>
           
            </View>
       </View>
    );
}

const styles = StyleSheet.create({
    default : {
        flexDirection : 'row' ,
         paddingVertical : 12 , 
         marginBottom : 5 ,
         paddingHorizontal : 12 ,
         backgroundColor : '#FCFCFC',
         elevation : 4 ,

    },  
   
    title: {
        color: colors.SecondaryDark ,
        fontFamily : fonts.medium,
        fontSize : 18 ,
        opacity : 0.9,
        marginTop : 2 ,
        alignSelf : 'center'
    },
    subtitle: {
        color: colors.LightGray ,
        fontWeight : '500',
        fontSize : 15 ,
        alignSelf : 'center',
        paddingBottom : 8 ,
    },
    icon : {
        color: colors.SecondaryDark ,
        fontSize: 40,
        opacity : 0.7,
        alignSelf : 'center',
        paddingTop : 10
    },
    card : {
        backgroundColor : '#ffffff' , 
        flex : 1 , 
        paddingVertical : 8,
        borderRadius : 5,
        elevation: 4,
        marginBottom : 10
    },
    left : {
        marginRight : 5,
        marginLeft : 10
    },
    right : {
        marginLeft : 5,
        marginRight : 10
    },
    normal_input : {
        height: 40, 
        paddingHorizontal : 15,
        fontSize : 15,
        borderColor: '#DDDDDD', 
        borderWidth: 1 ,
      
        flex : 1
    },
    input: {
        flex: 1,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        fontSize : 15,
        fontFamily: "Poppins-Medium",
        height : 40 ,
        backgroundColor: '#fff',
        color: '#424242',
    },
    cart_btn :{
        marginLeft : 8,
        marginRight : 12,
        alignItems : 'center'
    },
    search_wrapper : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#DDDDDD', 
        borderWidth: 1 ,
        borderRadius : 5 ,
    }
})