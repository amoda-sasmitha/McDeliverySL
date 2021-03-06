// ./screens/home.js

import React from "react";
import { View , Text  , ImageBackground , Dimensions ,Image ,ActivityIndicator ,
  TextInput, StyleSheet  ,ScrollView , TouchableOpacity} from "react-native";
import CommonStyles from '../util/CommonStyle'
import DefaultHeader from '../components/DefaultHeader'
import { fonts} from '../util/fonts'
import CommonStyle from '../util/CommonStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from "../util/colors";
import {Picker} from '@react-native-community/picker';
import { showMessage } from "react-native-flash-message";
import { connect} from 'react-redux'
import { AddToCart} from '../actions/Other'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class AddOrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address : 'No 329 , Sarasavi Road,Galle',
      notes : '',
      loading : false ,
    }
  }

  submit =() => {
    this.setState({loading : true})
    setTimeout( () => {
      this.setState({loading : false})
      showMessage({
        message: "Order Added Successfully !",
        type: "success",
      });
      this.props.AddToCart([])
      this.props.navigation.navigate('Main' ,{ screen : 'Track'});
    } , 1500)
  }

    render(){
        return (
          <View style={CommonStyles.normalPage_white}>
          <ScrollView 
           contentContainerStyle={{ flexGrow: 1,  justifyContent: 'space-between', }} 
            showsVerticalScrollIndicator={false}>
            <View style={{paddingTop : 8 }}>
           <Text style={styles.form}>Select Address</Text>
           <View style={CommonStyle.default_input_wrapper2}>
              <Picker
              selectedValue={this.state.address}
              style={{height: 45, width: '100%' , }}
              onValueChange={( address,i) =>
                this.setState({address: address})
              }>
              <Picker.Item label="No 329 , Sarasavi Road,Galle" value="No 329 , Sarasavi Road,Galle" />
              <Picker.Item label="No 12, New Kandy Road, Malabe" value="No 12, New Kandy Road, Malabe" />
            </Picker>
            </View>

            <Text style={styles.form}>Special Notes</Text>
            <View style={CommonStyle.default_input_wrapper}>
            <TextInput 
              value={this.state.notes}
              onChangeText={(notes) =>this.setState({notes})}
              style={[CommonStyle.default_input , {textAlignVertical : 'top'}]}
              multiline={true}
              numberOfLines={5}
              placeholder={'Enter Specail Notes'}
            ></TextInput>
            </View>
            </View>
            <TouchableOpacity 
            activeOpacity={0.85}
            style={styles.skip}
            onPress={this.submit}
          >
          <Text style={[styles.text_normal2 , { textAlign : 'center'}]}>Placed Order</Text>
          { this.state.loading && 
            <ActivityIndicator color={colors.White} style={{ paddingLeft : 5 }}/> }
          </TouchableOpacity>

            
            </ScrollView>
          </View>
        );
    }
}  

 const mapStateToProps = state => ({
  Cart : state.Cart || {} ,
});

const mapDispatchToProps = {
  AddToCart : AddToCart
};


export default connect( mapStateToProps , mapDispatchToProps )(AddOrderPage);



const styles = StyleSheet.create({
  form : {
    fontFamily : fonts.medium,
    fontSize : 16 ,
    color : colors.SecondaryDark,
    paddingTop : 10 ,
    paddingHorizontal : 15
  },
  text_normal2 : {
    fontFamily : fonts.regular,
    fontSize : 16 ,
    color : colors.White,
  },
  skip : {
    marginVertical : 15,
    borderRadius : 6 ,
    marginHorizontal : 15 , 
    paddingHorizontal : 10 ,
    paddingVertical : 10 ,
    flexDirection : 'row',
    justifyContent : 'center',
    backgroundColor : colors.SecondaryDark,
},
});
  