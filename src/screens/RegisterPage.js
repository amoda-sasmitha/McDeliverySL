// ./screens/About.js

import React from "react";
import { View , Text , StyleSheet , ScrollView  , Image , Alert , TouchableOpacity 
  ,ToastAndroid , TextInput, Button ,  ActivityIndicator } from "react-native";
import CommonStyles from '../util/CommonStyle'
import DefaultHeader from '../components/DefaultHeader'
import { fonts} from '../util/fonts'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from "../util/colors";
import CommonStyle from "../util/CommonStyle";
import { connect} from 'react-redux'
import { showMessage } from "react-native-flash-message";
import CheckBox from '@react-native-community/checkbox';
class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      con_password : '' ,
      phone : '' ,
      name : '' ,
      privacy : false ,
      loading : false,
      errors : {}
    }
    
  }

  submit = () => {
    const {email , password , con_password , phone , name ,  privacy} = this.state;
    let errors = {}
    if(privacy){
       
        errors.name = name.length == 0
        errors.email = email.length == 0
        errors.password = password.length == 0
        errors.con_password = con_password.length == 0
        errors.phone = phone.length == 0

        this.setState({errors : errors })
        if(!errors.name && !errors.email && !errors.password && !errors.con_password && !errors.phone){
            this.completed();
        }else{
            showMessage({
                message: "Please Fill All Required Fields !",
                type: "danger",
              });
        }
    }

  }

  completed = () => {
    this.setState({loading : true})
    setTimeout( () => {
        this.setState({loading : false})
        showMessage({
            message: "Account Created Successfull !",
            type: "success",
          });
        this.props.navigation.navigate("Login")
    }, 1800)
  }


    render(){

        const {email , password , con_password , phone , name 
            ,errors ,  privacy} = this.state;
        return (
          <View style={CommonStyles.normalPage_white}>
              {/* <View style={styles.logo}>
              <Image source={require('../../assets/images/icons/logo.jpg')} 
                style={{width : 80 , height : 80 }}/>
              </View> */}
               <DefaultHeader  title={'Create Account'} back={true}/>
              <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.bottom}>

            <Text style={styles.text_normal3}>Personal Information</Text>

                 <View style={CommonStyle.default_input_wrapper}>
                  <Icon name="user" size={20} color={'#D7D7D7'}/>
                  <TextInput 
                    value={name}
                    onChangeText={(name) =>this.setState({name ,
                         errors : {...this.state.errors , name : name.length == 0 }})}
                    textContentType={'username'}
                    style={CommonStyle.default_input}
                    placeholder={'Full Name'}
                  ></TextInput>
                   {errors.name && <Icon name="exclamation-circle" size={25}    color={'red'}/>}
                  </View>
                

                 <View style={CommonStyle.default_input_wrapper}>
                  <Icon name="phone" size={20} color={'#D7D7D7'}/>
                  <TextInput 
                    value={phone}
                    onChangeText={(phone) =>this.setState({phone ,
                        errors : {...this.state.errors , phone : phone.length == 0 }})}
                    textContentType={'telephoneNumber'}
                    style={CommonStyle.default_input}
                    placeholder={'Mobile Number'}
                  ></TextInput>
                   {errors.phone && <Icon name="exclamation-circle" size={25}    color={'red'}/>}
                  </View>

                  
                  <Text style={styles.text_normal3}>Login Details</Text>
                  
                  <View style={CommonStyle.default_input_wrapper}>
                  <Icon name="envelope" size={20} color={'#D7D7D7'}/>
                  <TextInput 
                    value={email}
                    onChangeText={(email) =>this.setState({email ,
                        errors : {...this.state.errors , email : email.length == 0 }})}
                    textContentType={'emailAddress'}
                    style={CommonStyle.default_input}
                    placeholder={'Email Address'}
                  ></TextInput>
                   {errors.email && <Icon name="exclamation-circle" size={25}    color={'red'}/>}
                  </View>

                  <View style={CommonStyle.default_input_wrapper}>
                  <Icon name="lock" size={25} color={'#D7D7D7'}/>
                  <TextInput 
                    secureTextEntry={password.length > 0}
                    value={password}
                    onChangeText={(password) =>this.setState({password ,
                        errors : {...this.state.errors , password : password.length == 0 }})}
                    textContentType={'password'}
                    style={CommonStyle.default_input}
                    placeholder={'Password'}
                  ></TextInput>
                  {errors.password && <Icon name="exclamation-circle" size={25}    color={'red'}/>}
                  </View>

                  <View style={CommonStyle.default_input_wrapper}>
                  <Icon name="lock" size={25} color={'#D7D7D7'}/>
                  <TextInput 
                    secureTextEntry={con_password.length > 0}
                    value={con_password}
                    onChangeText={(con_password) =>this.setState({con_password ,
                        errors : {...this.state.errors , con_password : con_password.length == 0 }})}
                    textContentType={'password'}
                    style={CommonStyle.default_input}
                    placeholder={'Confirm Password'}
                  ></TextInput>
                   {errors.con_password && <Icon name="exclamation-circle" size={25}    color={'red'}/>}
                  </View>

                  <View style={styles.privacy_wrap}>
                  <CheckBox
                     value={privacy}
                     tintColors={{ true:  colors.PrimaryDark , false: '#DDDDDD' }}
                   onValueChange={(privacy) => this.setState({privacy})}
                  ></CheckBox>
                  <Text style={styles.privacy}>
                      Yes I have read and agree to the following policies Terms
                       & conditions & Privacy Policy
                  </Text>
                  </View>

                 <TouchableOpacity 
                  activeOpacity={0.85}
                  onPress={this.submit}
                 >
                   <View style={styles.login_btn}>
                     <Text style={styles.login_btn_text}>SIGN UP</Text>
                    { this.state.loading && 
                    <ActivityIndicator color={colors.White} style={{ paddingLeft : 5 }}/> }
                   </View>
                 </TouchableOpacity>

                  <View style={styles.bottom_options}>
                    <View style={{flexDirection : 'row' ,   justifyContent : 'center' ,}}>
                      <Text style={styles.text_normal}>Already have an Account ?</Text>
                      
                      <TouchableOpacity 
                          activeOpacity={0.85}
                          onPress={() => { this.props.navigation.navigate('Login')}}
                        >
                      <Text style={[styles.text_normal, styles.underline]}>Log In</Text>
                      </TouchableOpacity>
                    </View>
                   
                  </View>

              </View>
              </ScrollView>
          </View>
        );
    }
 
}


const mapStateToProps = state => ({
  Auth : state.Auth || {} ,
});

export default connect( mapStateToProps )(RegisterPage);

const styles = StyleSheet.create({
  logo : {
    alignItems : 'center',
    flex : 1,
    justifyContent : 'flex-end',
    marginBottom : 25 , 
  },
  bottom : {
    flex : 1
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
  privacy_wrap : {
    paddingHorizontal : 15 ,
    marginTop : 14 ,
    flexDirection : 'row'
  },
  privacy : {
    fontFamily : fonts.light,
    fontSize : 13 ,
    paddingLeft : 5 ,
    flex : 1 , 
    lineHeight : 18 ,
    color : colors.PrimaryDark
  },
  text_normal3 : {
    fontFamily : fonts.regular,
    fontSize : 17 ,
    paddingHorizontal : 15 ,
    marginTop : 10,
    color : colors.SecondaryDark
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
error : {
    fontFamily : fonts.regular,
    fontSize : 13 , 
    color : 'red',
    paddingLeft : 15 ,
    paddingTop : 5,
}
});



