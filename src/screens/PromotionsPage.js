// ./screens/home.js

import React from "react";
import { View , Text  , ImageBackground , Dimensions ,Image , StyleSheet  ,ScrollView} from "react-native";
import CommonStyles from '../util/CommonStyle'
import DefaultHeader from '../components/DefaultHeader'
import { fonts} from '../util/fonts'
import CommonStyle from '../util/CommonStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from "../util/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    
  }

    render(){
        return (
          <View style={CommonStyles.normalPage_white}>
            <DefaultHeader title={'Promotions'} back={true}/>
            <ScrollView 
             contentContainerStyle={{ paddingBottom : 10 }} 
            showsVerticalScrollIndicator={false}>
                {
                    data.map( (promo,i) => (
                    <View key={i}>
                        <Image
                            resizeMode={'contain'}
                            source={promo}
                            style={styles.card}>

                        </Image>
                        <Text style={styles.promo_text}>Only for 12 Days</Text>
                    </View>
                    ))
                }
            </ScrollView>
          </View>
        );
    }
}

const data = [
    require('../../assets/images/promo01.jpg'),
    require('../../assets/images/promo02.jpg'),
    require('../../assets/images/promo03.jpg'),
]



const styles = StyleSheet.create({
 card : {
    width : width -24 ,
    height : (width-24) / 750 * 400 ,
    marginTop : 12,
    marginHorizontal : 12 ,
    borderRadius : 6 ,
 },
 promo_text : {
    fontFamily : fonts.semiBold,
    backgroundColor : colors.White,
    position : 'absolute',
    bottom : -3 ,
    left : -3 ,
    borderRadius : 6 ,
    elevation : 5,
    paddingHorizontal : 15 ,
    marginHorizontal : 12,
    paddingVertical : 5  
 }
  
});
  