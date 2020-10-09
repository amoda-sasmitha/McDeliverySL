// ./screens/home.js

import React from "react";
import { View , Text  , ImageBackground , Dimensions ,Image , StyleSheet  ,
  ScrollView , TouchableOpacity  , TextInput , ActivityIndicator} from "react-native";
import CommonStyles from '../util/CommonStyle'
import DefaultHeader from '../components/DefaultHeader'
import { fonts} from '../util/fonts'
import CommonStyle from '../util/CommonStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from "../util/colors";
import {Picker} from '@react-native-community/picker';
import MapView from 'react-native-maps';
import { showMessage } from "react-native-flash-message";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class AddAddressPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city : 'Colombo',
      mainroad : 'New Kandy Road',
      subroad : 'Sangaraja Road',
      offroad : '',
      loading : false ,
    }
  }

  submit =() => {
    this.setState({loading : true})
    setTimeout( () => {
      this.setState({loading : false})
      showMessage({
        message: "Address Added Successfully !",
        type: "success",
      });
      this.props.navigation.goBack();
    } , 1500)
  }

    render(){
        return (
          <View style={CommonStyles.normalPage_white}>
           <DefaultHeader  title={'Add Address'} back={true}/>
           <ScrollView showsVerticalScrollIndicator={false}>
           <Text style={styles.form}>Select City</Text>
           <View style={CommonStyle.default_input_wrapper2}>
              <Picker
              selectedValue={this.state.city}
              style={{height: 45, width: '100%' , }}
              onValueChange={( city,i) =>
                this.setState({city: city})
              }>
              <Picker.Item label="Colombo" value="Colombo" />
              <Picker.Item label="Kaduwela" value="Kaduwela" />
              <Picker.Item label="Malabe" value="Malabe" />
            </Picker>
            </View>

           <Text style={styles.form}>Main Road</Text>
           <View style={CommonStyle.default_input_wrapper2}>
              <Picker
              selectedValue={this.state.mainroad}
              style={{height: 45, width: '100%' , }}
              onValueChange={( mainroad,i) =>
                this.setState({mainroad: mainroad})
              }>
              <Picker.Item label="New Kandy Road" value="New Kandy Road" />
              <Picker.Item label="Galle Road" value="Galle Road" />
              <Picker.Item label="Colombo Road" value="Colombo Road" />
            </Picker>
            </View>

           <Text style={styles.form}>Sub Road</Text>
           <View style={CommonStyle.default_input_wrapper2}>
              <Picker
              selectedValue={this.state.mainroad}
              style={{height: 45, width: '100%' , }}
              onValueChange={( mainroad,i) =>
                this.setState({mainroad: mainroad})
              }>
              <Picker.Item label="Sangaraja Road" value="Sangaraja Road" />
              <Picker.Item label="Jothipala Mawatha" value="Jothipala Mawatha" />
            </Picker>
            </View>

            <Text style={styles.form}>Off Road</Text>
            <View style={CommonStyle.default_input_wrapper2}>
            <TextInput 
              value={this.state.offroad}
              onChangeText={(offroad) =>this.setState({offroad})}
              style={CommonStyle.default_input}
              placeholder={'Enter Off Road'}
            ></TextInput>
            </View>

            <TouchableOpacity 
                  activeOpacity={0.85}
                  onPress={this.submit}>
            <View style={styles.login_btn}>
              <Text style={styles.login_btn_text}>Save Address</Text>
            { this.state.loading && 
            <ActivityIndicator color={colors.White} style={{ paddingLeft : 5 }}/> }
            </View>
          </TouchableOpacity>

          <Text style={styles.text_or}>OR</Text>
          <TouchableOpacity 
            activeOpacity={0.85}
            style={styles.skip}
            onPress={() => { this.props.navigation.navigate('Map')}}
          >
          <Text style={[styles.text_normal2 , { textAlign : 'center'}]}>Add Current Location</Text>
          </TouchableOpacity>

            </ScrollView>
          </View>
        );
    }
}  
 export default AddAddressPage;




const styles = StyleSheet.create({

  form : {
    fontFamily : fonts.medium,
    fontSize : 16 ,
    color : colors.SecondaryDark,
    paddingTop : 10 ,
    paddingHorizontal : 15
  },
  login_btn_text : {
    fontFamily : fonts.medium,
    color : colors.White , 
    fontSize : 18 ,
    textAlign : 'center',
    letterSpacing : 1
  },
  login_btn : {
    marginTop : 16 ,
    borderRadius : 6 ,
    marginHorizontal : 15 , 
    paddingHorizontal : 10 ,
    paddingVertical : 10 ,
    flexDirection : 'row',
    justifyContent : 'center',
    backgroundColor : colors.SecondaryDark
  },
  text_normal2 : {
    fontFamily : fonts.regular,
    fontSize : 16 ,
    color : colors.PrimaryDark
  },
  text_or : {
    fontFamily : fonts.medium,
    fontSize : 16 ,
    textAlign : 'center' , 
    paddingVertical : 10 ,
    color : colors.PrimaryDark
  },
  skip : {
    borderRadius : 6 ,
    marginHorizontal : 15 , 
    paddingHorizontal : 10 ,
    paddingVertical : 8 ,
    flexDirection : 'row',
    justifyContent : 'center',
    borderWidth : 0.5 ,
    borderColor : colors.PrimaryDark,
},
});
  