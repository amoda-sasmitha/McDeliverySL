// ./screens/home.js

import React from "react";
import { View , Text  , ImageBackground , Dimensions ,Image , TextInput , StyleSheet  ,ScrollView ,ActivityIndicator ,
   TouchableOpacity} from "react-native";
import CommonStyles from '../util/CommonStyle'
import DefaultHeader from '../components/DefaultHeader'
import { fonts} from '../util/fonts'
import CommonStyle from '../util/CommonStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from "../util/colors";
import Modal from 'react-native-modal';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class FeedbackPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : false ,
      isVisible : false ,
      name : '',
      phone : '',
      subject : '',
      notes : '',
    }
  }

  submit =() => {
    this.setState({loading : true})
    setTimeout( () => {
      this.setState({loading : false , isVisible : true})
    } , 1500)
  }

    render(){
        return (
          <View style={CommonStyles.normalPage_white}>
           <DefaultHeader  title={'Customer Feedback'} back={true}/>
           <ScrollView showsVerticalScrollIndicator={false}>

              <View style={CommonStyle.default_input_wrapper}>
              <Icon name="user" size={20} color={'#D7D7D7'}/>
              <TextInput 
                value={this.state.offroad}
                onChangeText={(name) =>this.setState({name})}
                style={CommonStyle.default_input}
                placeholder={'Name'}
              ></TextInput>
              </View>

              <View style={CommonStyle.default_input_wrapper}>
              <Icon name="phone" size={20} color={'#D7D7D7'}/>
              <TextInput 
                value={this.state.phone}
                onChangeText={(phone) =>this.setState({phone})}
                style={CommonStyle.default_input}
                placeholder={'Phone Number'}
              ></TextInput>
              </View>

              <View style={CommonStyle.default_input_wrapper}>
              <Icon name="envelope" size={20} color={'#D7D7D7'}/>
              <TextInput 
                value={this.state.subject}
                onChangeText={(subject) =>this.setState({subject})}
                style={CommonStyle.default_input}
                placeholder={'Subject'}
              ></TextInput>
              </View>

              <View style={[CommonStyle.default_input_wrapper , { alignItems : 'flex-start'}]}>
              <Icon name="pencil" size={20} color={'#D7D7D7'} style={{marginTop : 10 }}/>
              <TextInput 
                value={this.state.notes}
                multiline
                numberOfLines={5}
                onChangeText={(notes) =>this.setState({notes})}
                style={[CommonStyle.default_input , {textAlignVertical : 'top'}]}
                placeholder={'Write your message here...'}
              ></TextInput>
              </View>

              <TouchableOpacity 
                  activeOpacity={0.85}
                  onPress={this.submit}>
            <View style={styles.login_btn}>
              <Text style={styles.login_btn_text}>Send Feedback</Text>
            { this.state.loading && 
            <ActivityIndicator color={colors.White} style={{ paddingLeft : 5 }}/> }
            </View>
          </TouchableOpacity>
             </ScrollView>
              <this.Modal/>  
          </View>
        );
    }

    Modal = () => (
      <Modal 
        isVisible={this.state.isVisible} 
        backdropOpacity={0.4}
        onBackdropPress={() => {
          this.setState({isVisible : false})
          }}  
      >
        <View style={{ flex: 1 , justifyContent : 'center' }}>
          <View style={styles.modal_wrapper}>
            <View style={{justifyContent : 'center' , alignItems : 'center' }}>
            <Image source={require('../../assets/images/icons/correct.png')} 
                  style={{width : 60 , height : 60 , marginBottom : 6 }}/>
            <Text style={styles.title} >Thank you for your valuable feedback. We will get back to you soon, Enjoy!</Text>

            <TouchableOpacity 
                  activeOpacity={0.85}
                  onPress={() => {
                    this.setState({ isVisible : false})
                    this.props.navigation.goBack()
                  }}>
            <View style={styles.login_btn2}>
              <Text style={styles.login_btn_text}>Go Back</Text>
            </View>
          </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
  )
}  
 export default FeedbackPage;




const styles = StyleSheet.create({
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
  login_btn2 : {
    marginTop : 16 ,
    borderRadius : 6 ,
    paddingHorizontal : 10 ,
    paddingVertical : 10 ,
    flexDirection : 'row',
    justifyContent : 'center',
    backgroundColor : '#27AE60'
  },
  modal_wrapper : {
    backgroundColor : colors.White,
    paddingVertical : 20 , 
    paddingHorizontal : 15, 
    borderRadius : 6,
  },
  title : {
    fontFamily : fonts.medium,
    fontSize : 15,
    color : colors.SecondaryDark
 },
});
  