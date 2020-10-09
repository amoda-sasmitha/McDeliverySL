// ./screens/About.js

import React from "react";
import { View , Text , StyleSheet , ScrollView  , Image , Alert , TouchableOpacity , Dimensions} from "react-native";
import CommonStyles from '../util/CommonStyle'
import DefaultHeader from '../components/DefaultHeader'
import CartItem from '../components/CartItem'
import NotFound from '../components/NotFound'
import { fonts} from '../util/fonts'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from "../util/colors";
import {getCart , Total} from '../util/data'
import { connect} from 'react-redux'
import { AddToCart} from '../actions/Other'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class ShoppingCartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  onUpdate = (item_id ,is_plus) => {
    let cart = this.props.Cart.items;
    let newqty = is_plus ? 1 : -1;
    let item_find = cart.find( i => i.id == item_id);

    if(item_find != undefined){
       let qty =  item_find.qty + newqty;
       if(qty == 0 ){
         cart = cart.filter( i => i.id != item_id );
       }else{
        cart = cart.map( item => {
          if(item.id == item_id){
            return {
              id : item_id,
              qty : qty
            }
          }else{
            return item;
          }
        })
       }
    }
    this.props.AddToCart(cart);
  }

  render(){
      return (
        <View style={CommonStyles.normalPage_white}>
          <DefaultHeader  title={'Shopping Cart'} back={true}/>
            <ScrollView  contentContainerStyle={{ flexGrow: 1,  justifyContent: 'space-between', }} 
            showsVerticalScrollIndicator={false}>
            
              <View>
              { this.props.Cart.items.length == 0 && <NotFound subtitle={'Shopping Cart is Empty !'} title={`Let's Add Items`}/>}
              { getCart(this.props.Cart.items).map( (props,i) => <CartItem key={i} {...props}  OnUpdate={this.onUpdate}/>) }
              </View>
              { this.props.Cart.items.length > 1 &&
                <View>
                <Text style={styles.total}>{`LKR ${Total(this.props.Cart.items)}.00`}</Text>
                <View style={styles.hr}></View>
                      <View style={{paddingVertical : 10 }}>
                      <Text style={styles.charges}>Packing Chargers LKR 50.00</Text>
                      <Text style={styles.charges}>Delivery Chargers LKR 80.00</Text>
                      </View>
                <View style={styles.hr}></View>
                <Text style={styles.total2}>{`Sub Total    LKR ${Total(this.props.Cart.items) + 130}.00`}</Text>
                <View style={styles.hr}></View>

                <TouchableOpacity 
                  activeOpacity={0.85}>
                <View style={styles.login_btn}>
                  <Text style={styles.login_btn_text}>PLACED ORDER</Text>
                </View>
              </TouchableOpacity>
                </View>
              }
          
            </ScrollView>
        </View>
      );
  }
}

const mapStateToProps = state => ({
  Cart : state.Cart || {} ,
});

const mapDispatchToProps = {
  AddToCart : AddToCart
};


export default connect( mapStateToProps , mapDispatchToProps )(ShoppingCartPage);

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
 hr : {
  height : 1.5 ,
  width : width - 30,
  backgroundColor : '#C4C4C460',
  marginHorizontal : 15
  
},
total : {
  marginTop : 25 ,
  marginBottom : 5 ,
  textAlign : 'right' , 
  paddingHorizontal : 12 , 
  fontFamily : fonts.medium,
  fontSize : 16,
  color : colors.PrimaryDark
},
total2 : {
  marginVertical : 5 ,
  textAlign : 'right' , 
  paddingHorizontal : 12 , 
  fontFamily : fonts.medium,
  fontSize : 16,
  color : colors.PrimaryDark
},
charges : {
  
    textAlign : 'right' , 
    paddingHorizontal : 12 , 
    paddingVertical : 1 ,
    fontFamily : fonts.regular,
    fontSize : 14.5,
    color : '#818181'
},
food_card : {
  marginTop : 8 ,
  flexDirection : 'row' , 
  marginHorizontal : 12 , 
  borderRadius : 6,
  paddingHorizontal : 10,
  paddingVertical : 12,
  borderColor : '#f4f4f4',
  borderWidth : 2
},
login_btn_text : {
  fontFamily : fonts.medium,
  color : colors.White , 
  fontSize : 16 ,
  textAlign : 'center',
  letterSpacing : 1
},
login_btn : {
  marginTop : 12 ,
  marginBottom : 16 ,
  borderRadius : 6 ,
  marginHorizontal : 12 , 
  paddingHorizontal : 10 ,
  paddingVertical : 10,
  flexDirection : 'row',
  justifyContent : 'center',
  backgroundColor : colors.SecondaryDark
},

});



