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

class ActivateAccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      loading : false,
      code : '' ,
      errors : {}
    }
    
  }

  submit = () => {
    const {email, code} = this.state;
    let errors = {}
    errors.email = email.length == 0
    errors.code = code.length == 0

    if(errors.email || errors.code){
      showMessage({
        message: "Email or Code can not be Empty !",
        type: "danger",
      });
      this.setState({errors})
    }else{
      this.completed();
    }
  }

   completed = () => {
    this.setState({loading : true})
    setTimeout( () => {
        this.setState({loading : false})
        showMessage({
            message: "Activation Successfull !",
            type: "success",
          });
        this.props.navigation.navigate("Login")
    }, 1800)
  }


    render(){

        const {email , code , errors } = this.state;
        return (
          <View style={CommonStyles.normalPage_white}>

              <DefaultHeader  title={'Activate Account'} back={true}/>
              <ScrollView showsVerticalScrollIndicator={false} >
              <View style={styles.bottom}>

                <Text style={styles.text_normal3}>
                  We've send an activation code to your registered mobile via SMS,
                  or an activation email to your registed email.
                </Text>
                <Text style={styles.text_normal3}>
                  Follow the instruction in the SMS / Email to activate your account
                </Text>

                 <View style={CommonStyle.default_input_wrapper}>
                  <Icon name="envelope" size={20} color={'#D7D7D7'}/>
                  <TextInput 
                    value={email}
                    onChangeText={(email) =>this.setState({email ,
                         errors : {...this.state.errors , email : email.length == 0 }})}
                   
                    style={CommonStyle.default_input}
                    placeholder={'Email Address'}
                  ></TextInput>
                   {errors.email && <Icon name="exclamation-circle" size={25}    color={'red'}/>}
                  </View>
                

                 <View style={CommonStyle.default_input_wrapper}>
                  <Icon name="lock" size={20} color={'#D7D7D7'}/>
                  <TextInput 
                    value={code}
                    onChangeText={(code) =>this.setState({code ,
                        errors : {...this.state.errors , code : code.length == 0 }})}
              
                    keyboardType={'phone-pad'}
                    style={CommonStyle.default_input}
                    placeholder={'Activation Code'}
                  ></TextInput>
                   {errors.code && <Icon name="exclamation-circle" size={25}    color={'red'}/>}
                  </View>

                 <TouchableOpacity 
                  activeOpacity={0.85}
                  onPress={this.submit}
                 >
                   <View style={styles.login_btn}>
                     <Text style={styles.login_btn_text}>SUBMIT</Text>
                    { this.state.loading && 
                    <ActivityIndicator color={colors.White} style={{ paddingLeft : 5 }}/> }
                   </View>
                 </TouchableOpacity>

                  <View style={styles.bottom_options}>
                    <View style={{flexDirection : 'row' ,   justifyContent : 'center' ,}}>
                      <TouchableOpacity 
                          activeOpacity={0.85}
                          onPress={() => { showMessage({
                            message: "Activation Code Re-send Successfully!",
                            type: "success",
                          });}}
                        >
                      <Text style={[styles.text_normal, styles.underline]}>Resend Activation Code</Text>
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

export default connect( mapStateToProps )(ActivateAccountPage);

const styles = StyleSheet.create({
  logo : {
    alignItems : 'center',
    flex : 1,
    justifyContent : 'flex-end',
    marginBottom : 25 , 
  },
  bottom : {
    marginTop : 30 ,
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
    fontSize : 14 ,
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



