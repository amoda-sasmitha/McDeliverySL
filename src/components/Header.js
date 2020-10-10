
import React, {Component} from 'react';
import { View, Text, StyleSheet , TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../util/colors'
import CommonStyle from '../util/CommonStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { fonts } from '../util/fonts';
import {  useSelector } from "react-redux";
export default function Card(props){

    const navigation = useNavigation();
    const cart = useSelector(state => state.Cart.items);

    return(
       <View>
           <View style={{flexDirection : 'row' , marginTop : 15 , marginBottom : 5 ,paddingHorizontal : 12 ,}}>
            <View  style={styles.search_wrapper}>
            <Icon style={styles.searchIcon} name="search" size={20} color={'#D7D7D7'}/>
            <TouchableOpacity  style={{  marginTop : 2 }} onPress={(props) => {
            navigation.navigate('Search')
            }}>
            <Text
                style={styles.input}
                >Search Burgers..</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={(props) => {
            navigation.navigate('ShoppingCart')
            }}>
                <View style={styles.cart_btn}>
                <Icon name="shopping-cart" style={CommonStyle.item_icon}  size={24} color={'#FFFFFF'}/> 
                {/* <Text style={styles.nu}>{("0" + cart.length).slice(-2)}</Text> */}
                </View>
            </TouchableOpacity>
            </View>
       </View>
    );
}

const styles = StyleSheet.create({
    searchIcon: {
        padding: 10,
    },
    title: {
        color: colors.SecondaryDark ,
        fontWeight : '700',
        fontSize : 15 ,
        opacity : 0.9,
        alignSelf : 'center',
        paddingTop : 5 ,
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
       
        paddingRight: 10,
        paddingVertical: 7,
        paddingLeft: 0,
        fontSize : 15,
        fontFamily: "Poppins-Medium",
        height : 40 ,
        backgroundColor: '#fff',
        color: '#42424280',
    },
    cart_btn : {
        paddingHorizontal : 10 ,
        backgroundColor : '#CB3640' , 
        borderRadius : 10,
        height : 40 ,
        marginLeft : 8
    },
    search_wrapper : {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#DDDDDD', 
        borderWidth: 1 ,
        borderRadius : 5 ,
    },
    nu : {
        position : 'absolute' ,
        top : 4 ,
        paddingHorizontal : 2 ,
        right : 4 ,
        fontSize : 10 , 
        fontFamily : fonts.semiBold , 
        backgroundColor : colors.White ,
        borderRadius : 10 , 
        color : colors.PrimaryDark,
        elevation : 20 ,
    }
})