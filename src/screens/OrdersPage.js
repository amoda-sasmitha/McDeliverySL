// ./screens/home.js

import React from "react";
import { View , Text  , ImageBackground , Dimensions ,Image , ScrollView ,
    StyleSheet  , TouchableOpacity} from "react-native";
import CommonStyles from '../util/CommonStyle'
import Header from '../components/Header'
import OrderItem from '../components/OrderItem'
import { fonts} from '../util/fonts'
import CommonStyle from '../util/CommonStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from "../util/colors";
import {orders} from '../util/data'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class OrdersPage extends React.Component {
  constructor(props) {
    super(props);
    
  }

    render(){
        return (
          <View style={CommonStyles.normalPage_white}>
           <Header/>
           <ScrollView showsVerticalScrollIndicator={false}>
                {orders.map( (order,i) => <OrderItem key={i} {...order}  navigation={this.props.navigation}/>)}
            </ScrollView>
          </View>
        );
    }
}  
 export default OrdersPage;




const styles = StyleSheet.create({
    current_category : {
        fontSize : 18 , 
        fontFamily : fonts.semiBold,
        paddingHorizontal : 12 ,
        marginTop : 5 ,
        paddingVertical : 5 ,
        backgroundColor : '#F5F5F5' , 
        color : colors.PrimaryDark
    }
});
  