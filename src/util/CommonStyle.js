import { colors } from './colors'
import {  StyleSheet } from "react-native";

export default  StyleSheet.create({
    normalPage: {
      position: 'relative',
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    normalPage_white: {
      position: 'relative',
      flex: 1,
      backgroundColor: '#ffffff',
    },
    card : {
        backgroundColor : '#ffffff' , 
        // paddingVertical : 3 , 
        marginHorizontal : 10,
        marginTop : 5,
        borderRadius : 5,
        elevation: 4,
        marginBottom : 5
    },
    h3 : {
        color: colors.SecondaryDark ,
        fontSize : 16 ,
        alignSelf : 'flex-start',
       
    },
    h4 : {
        color: colors.SecondaryDark ,
        fontSize : 14.5 ,
        alignSelf : 'flex-start',
    },
    h5 : {
        color: colors.LightGray ,
        fontSize : 14 ,
        alignSelf : 'flex-start',
    },
    cardheder : {
        paddingHorizontal : 15 ,
        backgroundColor : '#F5F5F5',
        width : '100%',
        paddingVertical : 8,
        borderColor : '#c9c9c9',
        borderBottomWidth : 0.33
    },
    item_icon : {
        alignSelf : 'center', 
        paddingTop : 8 ,
        borderRadius : 4,
    },
});