// ./screens/home.js

import React from "react";
import { View , Text  , ImageBackground , Dimensions ,Image , StyleSheet  , TouchableOpacity} from "react-native";
import CommonStyles from '../util/CommonStyle'
import DefaultHeader from '../components/DefaultHeader'
import { fonts} from '../util/fonts'
import CommonStyle from '../util/CommonStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from "../util/colors";
import { connect} from 'react-redux'
import {logout} from '../actions/Auth'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    
  }

    render(){
        return (
          <View style={CommonStyles.normalPage_white}>
           <DefaultHeader  title={'Main Menu'} back={false}/>
               
                <View style={styles.menu}>
                    <Text style={styles.menu_text}>Account Settings</Text>
                </View>
                { !this.props.Auth.isAuthenticated && 
                <TouchableOpacity  onPress={() =>{
                    this.props.navigation.navigate('Login')
                }} >
                <View style={styles.sub_menu}>
                    <Icon name="sign-in"  size={22} color={colors.LightGray }/> 
                    <Text style={styles.sub_menu_text}>Login / Register</Text>
                </View>
                </TouchableOpacity>
                }

                { this.props.Auth.isAuthenticated && 
                <TouchableOpacity  onPress={() =>{
                    this.props.navigation.navigate('Orders')
                }} >
                <View style={styles.sub_menu}>
                    <Icon name="file"  size={20} color={colors.LightGray }/> 
                    <Text style={styles.sub_menu_text}>My Orders</Text>
                </View>
                </TouchableOpacity>
                }

                {/* {  !this.props.Auth.activated &&
                <TouchableOpacity  onPress={() =>{
                    this.props.navigation.navigate('Activate')
                }} >
                <View style={styles.sub_menu}>
                    <Icon name="lock"  size={20} color={colors.LightGray }/> 
                    <Text style={styles.sub_menu_text}>Activate Account</Text>
                </View>
                </TouchableOpacity>
                } */}

                { this.props.Auth.isAuthenticated && 
                <TouchableOpacity  onPress={() =>{
                    this.props.logout && this.props.logout();
                }} >
                <View style={styles.sub_menu}>
                    <Icon name="sign-out"  size={20} color={colors.LightGray }/> 
                    <Text style={styles.sub_menu_text}>Log Out</Text>
                </View>
                </TouchableOpacity>
                }

                <TouchableOpacity  onPress={() =>{
                    this.props.navigation.navigate('AddAddress')
                }} >
                <View style={styles.sub_menu}>
                    <Icon name="map"  size={20} color={colors.LightGray }/> 
                    <Text style={styles.sub_menu_text}>Add Address</Text>
                </View>
                </TouchableOpacity>

                <View style={styles.menu}>
                    <Text style={styles.menu_text}>About</Text>
                </View>

                <View style={styles.sub_menu}>
                    <Icon name="user"  size={22} color={colors.LightGray }/> 
                    <Text style={styles.sub_menu_text}>About McDonals</Text>
                </View>

                <TouchableOpacity  onPress={() =>{
                    this.props.navigation.navigate('Feedback')
                }} >
                <View style={styles.sub_menu}>
                    <Icon name="pencil"  size={20} color={colors.LightGray }/> 
                    <Text style={styles.sub_menu_text}>Customer Feedback</Text>
                </View>
                </TouchableOpacity>

                <View style={styles.sub_menu}>
                    <Icon name="lock"  size={22} color={colors.LightGray }/> 
                    <Text style={styles.sub_menu_text}>Privacy Policies</Text>
                </View>
                <View style={styles.menu}>
                    <Text style={styles.menu_text}>Contact Us</Text>
                </View>
                <View style={{marginBottom : 15}}></View>
                <View style={styles.sub_menu2}>
                    <Icon name="phone"  size={22} color={colors.LightGray }/> 
                    <Text style={styles.sub_menu_text}>+94 71 456 6543</Text>
                </View>
                <View style={styles.sub_menu2}>
                    <Icon name="envelope"  size={22} color={colors.LightGray }/> 
            <Text style={styles.sub_menu_text}>complain@mcdelivery.com {JSON.stringify()}</Text>
                </View>
                

          </View>
        );
    }
}  
  const mapStateToProps = state => ({
    Auth : state.Auth || {} ,
  });

  const mapDispatchToProps = {
    logout :logout
  };

  export default connect( mapStateToProps , mapDispatchToProps)(MainMenu);




const styles = StyleSheet.create({
    menu: {
        paddingHorizontal : 12 ,
        paddingVertical : 8 ,
        borderBottomColor : '#f4f4f4' , 
        borderBottomWidth : 1.5,
    },
    sub_menu: {
        marginHorizontal : 20 ,
        paddingVertical : 12 ,
        flexDirection : 'row',
        // borderBottomWidth : 1.5,
        // borderBottomColor : '#f4f4f4'
       
    },
    sub_menu2: {
        marginHorizontal : 20 ,
        paddingVertical : 6 ,
        flexDirection : 'row',
        // borderBottomWidth : 1.5,
        // borderBottomColor : '#f4f4f4'
       
    },
    menu_text : {
        fontFamily : fonts.medium,
        fontSize : 16 , 
        color : colors.PrimaryDark
    },
    sub_menu_text : {
        fontFamily : fonts.regular,
        fontSize : 16 , 
        color : colors.LightGray,
        paddingLeft : 12 
    }
  
});
  