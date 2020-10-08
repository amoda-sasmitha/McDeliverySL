// ./screens/home.js

import React from "react";
import { View , Text  , ImageBackground , Dimensions ,Image , StyleSheet  , TouchableOpacity} from "react-native";
import CommonStyles from '../util/CommonStyle'
import DefaultHeader from '../components/DefaultHeader'
import { fonts} from '../util/fonts'
import CommonStyle from '../util/CommonStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from "../util/colors";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class FeedbackPage extends React.Component {
  constructor(props) {
    super(props);
    
  }

    render(){
        return (
          <View style={CommonStyles.normalPage_white}>
           <DefaultHeader  title={'Customer Feedback'} back={true}/>
               
                
          </View>
        );
    }
}  
 export default FeedbackPage;




const styles = StyleSheet.create({
  
});
  