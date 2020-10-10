import React from "react";
import { View , Text  , ImageBackground , Dimensions ,Image , StyleSheet  } from "react-native";
import CommonStyles from '../util/CommonStyle'
import { fonts} from '../util/fonts'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from "../util/colors";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
      setTimeout(() => {
        this.props.navigation.navigate('Main')
      }, 1200)
  }

    render(){
        return (
            <View style={[CommonStyles.normalPage_white,{ justifyContent : 'center'}]}>
                <Image source={require('../../assets/images/icons/logo.png')} 
                style={{width : 60 , height : 60  , alignSelf : 'center' }}/>
                <Text style={{textAlign : 'center' , fontFamily : fonts.light , paddingTop : 6 }}>Loading ...</Text>
            </View>
        );
    }
}




const styles = StyleSheet.create({

});
  