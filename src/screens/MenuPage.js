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
import { connect} from 'react-redux'
import { AddToCart} from '../actions/Other'
import { showMessage } from "react-native-flash-message";

class MenuPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active : 1,
      acitve_item : null,
      is_visible : false,
      qty : 1 ,
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
                { [...products , ...products].filter(i => i.category_id == active).map( (props,i) => 
                  <FoodItem 
                    key={i} 
                    {...props} 
                    addtocart={this.OnClickAddToCart}
                  />) }
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
        <Modal 

          isVisible={this.state.is_visible} 
          backdropOpacity={0.4}
          onBackdropPress={() => this.setState({is_visible : false , acitve_item : null , qty : 1})}  
        >
          <View style={{ flex: 1 , justifyContent : 'center' }}>
            <View style={styles.modal_wrapper}>
              <View style={{justifyContent : 'center' }}>
                      <View style={{flexDirection : 'row' , }}>
                      <View>
                          <Text style={styles.food_name}>{this.state.acitve_item && this.state.acitve_item.title}</Text>
                          <Text style={styles.food_subtitle}>
                          {this.state.acitve_item && this.state.acitve_item.subtitle}
                          </Text>
                      </View>
                      </View>
                      <View style={{flexDirection : 'row' , paddingTop : 10 }}>
                          <TouchableOpacity activeOpacity={0.5}
                                onPress={() => this.setState({qty : this.state.qty+ 1 }) }>
                          <Text style={styles.btns}>+</Text>
                          </TouchableOpacity>
                          
                          <Text style={styles.btns2}>{("0" + this.state.qty).slice(-2)}</Text>
                          
                          <TouchableOpacity activeOpacity={0.5}
                                onPress={() => this.setState({qty : this.state.qty == 1 ? 1 : this.state.qty - 1 }) }>
                          <Text style={styles.btns}>-</Text>
                          </TouchableOpacity>
                          
                          <TouchableOpacity activeOpacity={0.5}
                                onPress={this.submit}>
                          <Text style={styles.add_to_card2}>Add to Cart</Text>
                          </TouchableOpacity>
                      </View>
              </View>
            </View>
          </View>
        </Modal>
    )

    OnClickAddToCart = (id) => {
      this.setState({
        acitve_item : products.find( i => i.id == id ) ,
         is_visible : true
        })
    }

    submit = () => {
        let cart  = this.props.Cart.items;
        let item_id = this.state.acitve_item.id;
        let qty = this.state.qty;
        
        let item_find = cart.find( i => i.id == item_id);
        if(item_find == undefined){
            cart = [...cart , { id : item_id , qty : qty}]
        }else{
          cart = cart.map( item => {
            if(item.id == item_id){
              return {
                id : item_id,
                qty : item_find.qty + qty
              }
            }else{
              return item;
            }
          })
        }

        this.props.AddToCart(cart);
        this.setState({is_visible : false , acitve_item : null , qty : 1});
        showMessage({
          message: 'Item Added Successfully !',
          type: "success",
          floating : true,
          
        });
        this.props.navigation.navigate('ShoppingCart')


    }
    
}
const mapDispatchToProps = {
  AddToCart : AddToCart
};

const mapStateToProps = state => ({
  Cart : state.Cart || {} ,
});

export default connect( mapStateToProps ,
  mapDispatchToProps  )(MenuPage);



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
 },
  modal_wrapper : {
    backgroundColor : colors.White,
    paddingVertical : 20 , 
    paddingHorizontal : 15, 
    borderRadius : 6,
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
add_to_card : {
  fontFamily : fonts.medium,
  fontSize : 12,
  color : colors.White ,
  backgroundColor : '#454545',
  textAlignVertical : 'center',
  paddingHorizontal : 14 ,
  paddingVertical : 8 ,
  marginLeft : 6 ,
  borderRadius : 6 ,
  justifyContent: 'flex-end',
 },
add_to_card2 : {
  fontFamily : fonts.medium,
  fontSize : 12,
  color : colors.White ,
  backgroundColor : '#F43E04',
  textAlignVertical : 'center',
  paddingHorizontal : 14 ,
  paddingVertical : 8 ,
  marginLeft : 6 ,
  borderRadius : 6 ,
  justifyContent: 'flex-end',
 },
 btns : {
  fontFamily : fonts.medium,
  fontSize : 15,
  color : colors.White ,
  backgroundColor : '#454545',
  textAlignVertical : 'center',
  paddingHorizontal : 14 ,
  paddingVertical : 6 ,
  borderRadius : 6 ,
  justifyContent: 'flex-end',
 },
 btns2 : {
  fontFamily : fonts.medium,
  fontSize : 15,
  color : colors.SecondaryDark ,
  backgroundColor : colors.White,
  textAlignVertical : 'center',
  paddingHorizontal : 14 ,
  paddingVertical : 6 ,
  borderRadius : 6 ,
  justifyContent: 'flex-end',
 },

});



