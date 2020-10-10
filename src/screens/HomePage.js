// ./screens/home.js

import React from "react";
import { View , Text  , ImageBackground , Dimensions ,Image , StyleSheet } from "react-native";
import CommonStyles from '../util/CommonStyle'
import Header from '../components/Header'
import Carousel from 'react-native-snap-carousel';
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

  
  _renderItem = ({item, index}) => {
    return (
        <View >
            <ImageBackground style={{width : width - 24  , height : width - 80  }} 
           imageStyle={{ borderRadius: 12 }}
            source={item.image} >
              <View style={{flex : 1 , justifyContent : 'flex-end'  }}>
               
                  <View style={{flex : 1 , justifyContent : 'flex-end' }}>
                    <View style={styles.header}>
                    <Text style={styles.sub_title}>{item.title}</Text>
                   <Text style={styles.header_title}>{`LKR ${item.price}`}</Text>
                   </View>
                   </View>
              </View>
            </ImageBackground>
        </View>
    );
}

    render(){
        return (
          <View style={CommonStyles.normalPage_white}>
            <Header/>
            <View style={{marginTop : 10 , marginHorizontal : 12}}>
              {/* <Text style={styles.headertext}>Welcome Back,</Text> */}
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={data}
              renderItem={this._renderItem}
              sliderWidth={width-24}
              itemWidth={width - 24}
              inactiveSlideOpacity={0.95}
              autoplay={false}
              loop={true}
              autoplayInterval={3000}
            />
            </View>
            <View style={{marginTop : 15}}>
              <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Menu')}
                activeOpacity={0.85}>
              <View style={styles.card}>
                <View style={{flexDirection : 'row' , alignItems : 'center'}}>
                    <View style={styles.card_btn}>
                    <Image source={ require('../../assets/images/icons/home_rocket.png')} 
                    style={{width : 24 , height : 24}}/>
                    </View>
                    <View style={{paddingHorizontal : 15}}>
                      <Text style={styles.card_title}>{`Let's`}</Text>
                    <Text style={styles.card_subtitle}>{`Get Started !`}</Text>  
                    </View> 
                </View>
              </View>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Promotions')}
                activeOpacity={0.85}>
              <View style={styles.card}>
                <View style={{flexDirection : 'row' , alignItems : 'center'}}>
                    <View style={styles.card_btn}>
                    <Image source={ require('../../assets/images/icons/home_burger.png')} 
                    style={{width : 24 , height : 24}}/>
                    </View>
                    <View style={{paddingHorizontal : 15}}>
                      <Text style={styles.card_title}>{`Explore`}</Text>
                    <Text style={styles.card_subtitle}>{`Our Promotions`}</Text>  
                    </View> 
                </View>
              </View>
              </TouchableOpacity>
            </View>
          </View>
        );
    }
}


const data = [
  {
    id : 1,
    image : require('../../assets/images/slide02.png') ,
    price : '780.00' ,
    title : 'Big Mac Meal'
  },
  {
    id : 3,
    image : require('../../assets/images/slide03.png') ,
    price : '980.00' ,
    title : 'Mac Wrap'
  },
  {
    id : 2,
    image : require('../../assets/images/slide04.png') ,
    price : '340.00' ,
    title : 'Mac Fries'
  },
 
]


const styles = StyleSheet.create({
   
  header : {
      paddingHorizontal : 12 ,
      paddingVertical : 8 ,
      backgroundColor : '#21212130' ,
     borderBottomLeftRadius : 10,
     borderBottomRightRadius : 10,
  },
  header_title : {
      fontSize : 20  ,
      color : 'white' ,
      fontFamily : fonts.semiBold,
      lineHeight : 28
  },
  sub_title : {
      fontSize : 18  ,
      color : 'white' ,
      fontFamily : fonts.light

  },
  headertext : {
    fontFamily : fonts.semiBold,
    color : '#5A5757',
    fontSize : 17,
    paddingBottom : 6 ,
  },
  item_text:{
      fontWeight : '700',
      fontSize : 14.5 ,
  },

  card : {
    backgroundColor : '#373737',
    borderRadius : 10,
    paddingHorizontal : 12 ,
    paddingVertical : 15,
    marginHorizontal : 12 ,
    marginBottom : 8 ,
  },
  card_btn : {
    
    backgroundColor : colors.White, 
    borderRadius : 10,
    height : 40 ,
    width : 40 ,
    justifyContent : 'center',
    alignItems : 'center' , 
    marginLeft : 8
},
card_title : {
  fontSize : 18  ,
  color : 'white' ,
 
  fontFamily : fonts.semiBold,
},
card_subtitle : {
  fontSize : 16  ,
  color : 'white' ,
  lineHeight : 23,
  fontFamily : fonts.light

},
  
});
  