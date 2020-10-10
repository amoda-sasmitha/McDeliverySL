// ./screens/home.js

import React from "react";
import { View , Text  , ImageBackground , Dimensions ,Image , StyleSheet  , TouchableOpacity} from "react-native";
import CommonStyles from '../util/CommonStyle'
import DefaultHeader from '../components/DefaultHeader'
import { fonts} from '../util/fonts'
import CommonStyle from '../util/CommonStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from "../util/colors";
import moment from 'moment'
import MapView ,{Marker }from 'react-native-maps';
import {mapStyle} from '../util/data'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class OrderTrackPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        longitude : 80.2078,
        intervalId : 0,
    }
  }

  componentDidMount(){
    var intervalId = setInterval(() => {
        let {longitude} = this.state;
        if(longitude > 80.2060){
            this.setState({longitude : longitude - 0.00005})
        }
    }, 2500);
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

    render(){
        return (
          <View style={CommonStyles.normalPage_white}>
           <DefaultHeader  title={'Order Status'} back={true}/>
           <View style={styles.cardtop}>
           <Text style={styles.food_name}>{`Estimated time ${moment(new Date()).add(15, 'minutes').format('LT') }`}</Text>
            <View style={{ flexDirection : 'row' }}>
                    <View style={[styles.ic,{ backgroundColor : '#EDC32Fbf' }]}>
                    </View>
                    <View style={[styles.ic,{ backgroundColor : '#EDC32Fbf' }]}>
                    </View>
                    <View style={[styles.ic,{ backgroundColor : '#21212130' }]}>
                    </View>
            </View>
            </View>
           <MapView 
                 customMapStyle={mapStyle}
                style={{   marginTop : -10 , height : '110%' }}
                initialRegion={{
                latitude: 6.057016,
                longitude: 80.205990,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
                }}
            >
                <Marker
                    key={1}
                    coordinate={{ latitude: 6.0579,
                        longitude: this.state.longitude}}
                   
                >
                     <Image
                        source={require('../../assets/images/icons/dguy.png')}
                        style={{width: 40, height: 40}}
                        resizeMode="contain"
                    />
                </Marker>
                </MapView>

            <View style={styles.card}>
            <View style={{flex : 2 , }}>
                <Image source={require('../../assets/images/icons/user.png')} resizeMode={'contain'}
                style={{width : 65 , height : 65 }}/>
            </View>
            <View style={{flex : 5 , justifyContent : 'center' }}>
                    <View style={{flexDirection : 'row' , justifyContent : 'space-between' }}>
                    <View>
                    <Text style={styles.food_name}>{`Handling By`}</Text>
                    <Text style={styles.food_subtitle}>{`Saman Kumar`}</Text>
                    <Text style={styles.sub02}>{`REF-DT-1001`}</Text>
                    </View>
                    </View>
            </View>
            </View>
          </View>
        );
    }
}  
 export default OrderTrackPage;

 


const styles = StyleSheet.create({
  card : {
      flexDirection : 'row' ,
    position : 'absolute' ,
    bottom : 0,
    left : 0 ,
    backgroundColor : colors.White ,
    paddingVertical : 13 ,
    paddingHorizontal : 15 ,
    borderRadius : 10 ,
    elevation : 4 ,
    width : width - 30 ,
    marginVertical : 15 ,
    marginHorizontal : 15 ,
  },
  cardtop : {
    position : 'absolute' ,
    top : 50,
    left : 0 ,
    backgroundColor : colors.White ,
    paddingVertical : 13 ,
    paddingHorizontal : 15 ,
    borderRadius : 10 ,
    elevation : 4 ,
    width : width - 30 ,
    marginVertical : 15 ,
    marginHorizontal : 15 ,
  },
  food_name : {
    fontFamily : fonts.medium,
    fontSize : 15
 },
 food_subtitle : {
   fontFamily : fonts.regular,
   fontSize : 13,
   color : '#818181'
},
sub02 : {
   fontFamily : fonts.semiBold,
   fontSize : 15,
   color : '#818181'
},
ic : {
    flex : 1 ,
    marginRight : 10,
    marginTop : 8,
    height : 6 ,
    borderRadius : 6 ,
}
});
  