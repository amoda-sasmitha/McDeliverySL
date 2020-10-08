// ./screens/About.js

import React from "react";
import { View , Text , StyleSheet , ScrollView  , Image , Alert , TouchableOpacity} from "react-native";
import CommonStyles from '../util/CommonStyle'
import Header from '../components/Header'
import FoodItem from '../components/FoodItem'
import { fonts} from '../util/fonts'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from "../util/colors";
import { categories , products } from "../util/data";
import Modal from 'react-native-modal';

export default class MenuPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active : 1
    }
    
  }
    render(){
      const {active} = this.state;
        return (
          <View style={CommonStyles.normalPage_white}>
            <Header/>
             <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{marginTop : 10}}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                  { categories.map( (props,i) => <this.CategoryCard {...props} index={i}  key={i}/> ) }
                  </ScrollView>
                </View>
              <Text style={styles.current_category}>Main Menu</Text>
                { [...products , ...products].filter(i => i.category_id == active)
                .map( (props,i) => <FoodItem key={i} {...props} />) }
             </ScrollView>
             <this.Modal/>
          </View>
        );
    }


    CategoryCard = (props) => (
      <TouchableOpacity
        key={props.id}
        activeOpacity={0.9}
        onPress={() => this.setState({active : props.id}) }
      >
      <View >
        <View  style={[(props.id == this.state.active) ? styles.c_card_active : styles.c_card  ,
           {marginLeft : (props.index == 0) ? 12 : 0}]}>
        <Image source={props.image} 
          style={{width : 40 , height : 40 , tintColor : (props.id == this.state.active) ? '#FFFFFF' : '#979797'}}/>
        </View>
        <Text style={(props.id == this.state.active) ? styles.c_text_active : styles.c_text}>{props.title}</Text>
      </View>
      </TouchableOpacity>
    );

    Modal = () => (
        <Modal isVisible={false}>
          <View style={{ flex: 1 }}>
            <Text>I am the modal content!</Text>
          </View>
        </Modal>
    )
    
}



const styles = StyleSheet.create({
   
  c_card : {
    backgroundColor : colors.White, 
    borderRadius : 10,
    borderColor : '#97979760' ,
    borderWidth : 1.25 ,
    height : 80 ,
    width : 80 ,
    marginRight : 8 ,
    justifyContent : 'center',
    alignItems : 'center'
  },
  c_text_active : {
    fontSize : 13 ,
    paddingTop : 3 ,  
    fontFamily : fonts.semiBold,
    textAlign : 'center',
    color : '#555555', 
  },
  c_text : {
    fontSize : 13 ,
    paddingTop : 3 ,  
    fontFamily : fonts.medium,
    textAlign : 'center',
    color : '#555555BF', 
  },
  c_card_active : {
    backgroundColor : '#555555', 
    borderRadius : 10,
    height : 80 ,
    width : 80 ,
    marginRight : 8 ,
    justifyContent : 'center',
    alignItems : 'center'
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



