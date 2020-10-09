// ./screens/About.js

import React from "react";
import { View , Text , StyleSheet , ScrollView  , Image , Alert , TouchableOpacity} from "react-native";
import CommonStyles from '../util/CommonStyle'
import Header from '../components/Header'
import FavItem from '../components/FavItem'
import NotFound from '../components/NotFound'
import { fonts} from '../util/fonts'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from "../util/colors";
import {getFav, products} from '../util/data'
import { connect} from 'react-redux'
import { Remove_Fav , Clear_FAV} from '../actions/Other'

class FavouritePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {Fav} = this.props;
      return (
        <View style={CommonStyles.normalPage_white}>
          <Header/>
            <ScrollView>
            <Text style={styles.current_category}>Favourites</Text>
              { getFav(Fav.items).map( (props,i) => 
              
              <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Product',{id : props.id})}
                key={i}  activeOpacity={0.5}>
                <FavItem {...props}
                OnPress={(id) => { this.props.remove(id , Fav.items)}} /> 
              </TouchableOpacity>
               )}

                { (Fav.items && Fav.items.length == 0) ? <NotFound subtitle={'Favourite List is Empty!'} title={`Let's Add Items`}/> 
                 :<TouchableOpacity 
                  activeOpacity={0.85}
                  onPress={this.props.clear}
                 >
                   <View style={styles.btn}>
                     <Text style={styles.btn_text}>CLEAR</Text>
                   </View>
                </TouchableOpacity> }
            </ScrollView>
        </View>
      );
  }
   
}


const mapDispatchToProps = {
  remove : Remove_Fav,
  clear : Clear_FAV
};

const mapStateToProps = state => ({
  Fav : state.Fav || {} ,
});

export default connect( mapStateToProps , mapDispatchToProps )(FavouritePage);

const styles = StyleSheet.create({
   
 current_category : {
   fontSize : 18 , 
   fontFamily : fonts.semiBold,
   paddingHorizontal : 12 ,
   marginTop : 5 ,
   paddingVertical : 5 ,
   backgroundColor : '#F5F5F5' , 
   color : colors.PrimaryDark
 },
 btn_text : {
  fontFamily : fonts.medium,
  color : colors.White , 
  fontSize : 18 ,
  textAlign : 'center',
  letterSpacing : 1
},
btn : {
  marginTop : 14 ,
  marginHorizontal : 15 , 
  paddingHorizontal : 10 ,
  paddingVertical : 8 ,
  flexDirection : 'row',
  justifyContent : 'center',
  backgroundColor : colors.SecondaryDark
},
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



