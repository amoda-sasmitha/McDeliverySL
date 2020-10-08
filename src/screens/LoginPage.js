// ./screens/About.js

import React from "react";
import { View , Text , StyleSheet , ScrollView  , Image , Alert , TouchableOpacity , Dimensions
  ,ToastAndroid , TextInput, Button ,  ActivityIndicator, ImageBackground } from "react-native";
import CommonStyles from '../util/CommonStyle'
import { fonts} from '../util/fonts'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from "../util/colors";
import CommonStyle from "../util/CommonStyle";
import { login} from '../actions/Auth'
import { connect} from 'react-redux'
import { showMessage } from "react-native-flash-message";

const width = Dimensions.get('window').width;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      login_loading : false
    }
    
  }

  submit = () => {
    this.setState({login_loading : true})
    this.login_demo();
  }

  login_demo = () => {
    const {email , password} = this.state;
    this.props.login(email , password)
    .then( result => {
        
        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 1500);
    })
    .catch(err => {
      this.setState({login_loading : false})
      showMessage({
        message: "Please Enter Correct Email & Password !",
        type: "danger",
      });
    })
  }

    render(){
        return (
          <View style={CommonStyles.normalPage_white}>
              <View style={styles.logo}>
              <Image source={require('../../assets/images/icons/logo.jpg')} 
                style={{width : 80 , height : 80 }}/>
              </View>

              <View style={styles.bottom}>
                  <View style={CommonStyle.default_input_wrapper}>
                  <Icon name="envelope" size={20} color={'#D7D7D7'}/>
                  <TextInput 
                    value={this.state.email}
                    onChangeText={(email) =>this.setState({email})}
                    textContentType={'emailAddress'}
                    style={CommonStyle.default_input}
                    placeholder={'Email Address'}
                  ></TextInput>
                  </View>

                  <View style={CommonStyle.default_input_wrapper}>
                  <Icon name="lock" size={25} color={'#D7D7D7'}/>
                  <TextInput 
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(password) =>this.setState({password})}
                    textContentType={'password'}
                    style={CommonStyle.default_input}
                    placeholder={'Password'}
                  ></TextInput>
                  </View>

                 <TouchableOpacity 
                  activeOpacity={0.85}
                  onPress={this.submit}
                 >
                   <View style={styles.login_btn}>
                     <Text style={styles.login_btn_text}>LOG IN </Text>
                    { this.state.login_loading && 
                    <ActivityIndicator color={colors.White} style={{ paddingLeft : 5 }}/> }
                   </View>
                 </TouchableOpacity>

                  <View style={styles.bottom_options}>
                    <View style={{flexDirection : 'row' ,   justifyContent : 'center' ,}}>
                      <Text style={styles.text_normal}>Don't have an Account ?</Text>
                      
                      <TouchableOpacity 
                          activeOpacity={0.85}
                          onPress={() => { this.props.navigation.navigate('Register')}}
                        >
                      <Text style={[styles.text_normal, styles.underline]}>Register</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.text_or}>OR</Text>
                    <TouchableOpacity 
                      activeOpacity={0.85}
                      style={styles.skip}
                      onPress={() => { this.props.navigation.navigate('Home')}}
                    >
                    <Text style={[styles.text_normal2 , { textAlign : 'center'}]}>Skip for Now</Text>
                    </TouchableOpacity>
                  </View>

              </View>

              {/* <Image source={require('../../assets/images/mask06.png')} 
                resizeMode={'cover'}
                style={styles.overlay}/> */}
          </View>
        );
    }
 
}

const mapDispatchToProps = {
  login :login
};

const mapStateToProps = state => ({
  Auth : state.Auth || {} ,
});

export default connect( mapStateToProps ,
  mapDispatchToProps  )(LoginPage);

const styles = StyleSheet.create({
  logo : {
    alignItems : 'center',
    flex : 1,
    justifyContent : 'flex-end',
    marginBottom : 25 , 
  },
  bottom : {
    flex : 3
  },
  login_btn_text : {
    fontFamily : fonts.medium,
    color : colors.White , 
    fontSize : 18 ,
    textAlign : 'center',
    letterSpacing : 1
  },
  login_btn : {
    marginTop : 14 ,
    borderRadius : 6 ,
    marginHorizontal : 15 , 
    paddingHorizontal : 10 ,
    paddingVertical : 10 ,
    flexDirection : 'row',
    justifyContent : 'center',
    backgroundColor : colors.SecondaryDark
  },
  text_normal : {
    fontFamily : fonts.regular,
    fontSize : 16 ,
    color : colors.PrimaryDark
  },
  text_normal2 : {
    fontFamily : fonts.regular,
    fontSize : 14 ,
    color : colors.PrimaryDark
  },
  text_or : {
    fontFamily : fonts.regular,
    fontSize : 14 ,
    textAlign : 'center' , 
    paddingVertical : 6 ,
    color : colors.PrimaryDark
  },
  bottom_options :{
    marginHorizontal : 15 ,
    paddingTop : 20,
  },
  underline : {
    paddingLeft : 10,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  },
  skip : {
    alignSelf : 'center' , 
    width : 130,
    borderRadius : 6 ,
    borderWidth : 0.5 , 
    paddingVertical : 4,
    borderColor : colors.PrimaryDark,
},
overlay : {
  width : '100%' , 
  position : 'absolute' , 
  bottom : 0 ,
  left : 0 ,
  zIndex : -1 ,

  height : '105%',
  opacity : 1
}
});



