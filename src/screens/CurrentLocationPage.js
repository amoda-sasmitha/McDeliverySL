// ./screens/home.js

import React from "react";
import { View , Text  , ImageBackground , Dimensions ,Image , StyleSheet  , ActivityIndicator ,
   TouchableOpacity} from "react-native";
import CommonStyles from '../util/CommonStyle'
import DefaultHeader from '../components/DefaultHeader'
import { fonts} from '../util/fonts'
import CommonStyle from '../util/CommonStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from "../util/colors";
import MapView ,{Marker }from 'react-native-maps';
import {mapStyle} from '../util/data'
import { showMessage } from "react-native-flash-message";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class CurrentLocationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : false
    }
  }
  submit =() => {
    this.setState({loading : true})
    setTimeout( () => {
      this.setState({loading : false})
      showMessage({
        message: "Location Added Successfully !",
        type: "success",
      });
      this.props.navigation.pop(2);
    } , 1500)
  }

    render(){
        return (
          <View style={CommonStyles.normalPage_white}>
           <DefaultHeader  title={'Add Location'} back={true}/>
           <TouchableOpacity style={styles.login_btn} 
                  activeOpacity={0.85}
                  onPress={this.submit}>
            <View style={{flexDirection : 'row'}} >
              <Text style={styles.login_btn_text}>Save Location</Text>
              { this.state.loading && 
            <ActivityIndicator color={colors.White} style={{ paddingLeft : 5 }}/> }
            </View>
          </TouchableOpacity>
           <MapView 
                
                 customMapStyle={mapStyle}
                 moveOnMarkerPress={false}
                style={{   marginTop : -10 , height : '110%' }}
                initialRegion={{
                latitude: 6.0579,
                longitude: 80.2060,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
                }}
            >
              <Marker
                key={1}
                draggable
                position={{ latitude: 6.0579,
                  longitude: 80.2060}}
                 coordinate={{ latitude: 6.0579,
                  longitude: 80.2060}}
             
              />
            </MapView>

           
          </View>
        );
    }
}  
 export default CurrentLocationPage;




const styles = StyleSheet.create({
  login_btn_text : {
    fontFamily : fonts.medium,
    color : colors.White , 
    fontSize : 16 ,
    textAlign : 'center',
    letterSpacing : 1
  },
  login_btn : {
    zIndex : 10 ,
    marginBottom : 15 ,
    position : 'absolute',
    bottom : 0 ,
    left : 0,
    width : width - 30 ,
    marginTop : 16 ,
    borderRadius : 6 ,
    marginHorizontal : 15 , 
    paddingHorizontal : 10 ,
    paddingVertical : 10 ,
    flexDirection : 'row',
    justifyContent : 'center',
    backgroundColor : colors.SecondaryDark
  },
});
  