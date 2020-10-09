
import React from "react";
import { View , Text  , ImageBackground , Dimensions ,Image , StyleSheet  , TouchableOpacity , ScrollView} from "react-native";
import CommonStyles from '../util/CommonStyle'
import DefaultHeader from '../components/DefaultHeader'
import { fonts} from '../util/fonts'
import CommonStyle from '../util/CommonStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from "../util/colors";
import { connect} from 'react-redux'
import { AddToCart} from '../actions/Other'
import { showMessage } from "react-native-flash-message";
import { categories , products } from "../util/data";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class SingleProductPage extends React.Component {
  constructor(props) {
    super(props);
    const item_id = props.route.params.id;
    const item = products.find( i => i.id == item_id);
    this.state = {
        id : item_id,
        item : item
    }
  }

    render(){
        const { item } = this.state;
        return (
          <View style={CommonStyles.normalPage_white}>
           <DefaultHeader  title={item.title} back={true}/>
               <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                    <Image source={item.image} 
                        style={styles.image}/>
                    <View style={styles.hr}></View>
                    <View style={{flexDirection : 'row' , paddingHorizontal : 15 }}>
                        <View style={{flex : 3}}>
                                <Text style={styles.price}>{`LKR ${item.price}.00`}</Text>
                                <Text style={styles.subtitle}>Inclusive Tax</Text>
                        </View>
                        <View style={{flex : 4}} >
                            <TouchableOpacity activeOpacity={0.5}
                                onPress={this.addtocart}
                            >
                                <Text style={styles.add_to_card}>Make Order Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.calories}>
                        <View style={{flex : 1, marginVertical : 8, }}>
                            <Text style={styles.number}>650</Text>
                            <Text style={styles.number_text}>calories</Text>
                        </View>
                        <View style={{flex : 1, marginVertical : 8, }}>
                            <Text style={styles.number}>5.7g</Text>
                            <Text style={styles.number_text}>Good Fat</Text>
                        </View>
                        <View style={{flex : 1, marginVertical : 8, }}>
                            <Text style={styles.number}>23.7g</Text>
                            <Text style={styles.number_text}>Protein</Text>
                        </View>
                        <View style={{flex : 1, marginVertical : 8, }}>
                            <Text style={styles.number}>0.41g</Text>
                            <Text style={styles.number_text}>Salt</Text>
                        </View>
                    </View>

                    <Text style={styles.addon}>Add Ons</Text>
                    <View style={{flexDirection : 'row' , paddingHorizontal : 15 }}>
                        <View>
                        <View  style={styles.c_card}>
                        <Image source={require('../../assets/images/products/food05.png')} style={{width : 60 , height : 60 }}/>
                        </View>
                        <Text style={styles.c_text}>{'Add Fries'}</Text>
                        </View>

                        <View>
                        <View  style={styles.c_card}>
                        <Image source={require('../../assets/images/products/food06.png')} style={{width : 60 , height : 60 }}/>
                        </View>
                        <Text style={styles.c_text}>{'Add Coke'}</Text>
                        </View>
                    </View>
                    <View >
                    </View>

                    </View>
               </ScrollView>
                
          </View>
        );
    }

    addtocart = () => {
        const { id} = this.state;
        let cart  = this.props.Cart.items;
        let item_id = id
        let qty = 1;
        
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
    mapDispatchToProps  )(SingleProductPage);




const styles = StyleSheet.create({
  image : {
    width : width-120,
    height : width-120,
    alignSelf : 'center'
  },
  hr : {
     height : 2.5 ,
     width : width - 30,
     backgroundColor : '#C4C4C460',
     marginBottom : 10 ,
     marginHorizontal : 15
     
  },
  subtitle : {
    fontFamily : fonts.regular,
    fontSize : 15,
    lineHeight : 18,
   
    color : '#818181',
 },
price : {
    fontFamily : fonts.medium,
    fontSize : 22,
    color : colors.PrimaryDark
},
add_to_card : {
    fontFamily : fonts.medium,
    fontSize : 16,
    color : colors.White ,
    backgroundColor : '#454545',
    textAlignVertical : 'center',
    marginTop : 5, 
    paddingHorizontal : 10 ,
    paddingVertical : 6,
    borderRadius : 6 ,
    textAlign : 'center',
    justifyContent: 'flex-end',
   },
calories : {
    marginVertical : 10,
    flexDirection : 'row' , 
    paddingVertical : 10,
    marginHorizontal : 15 ,
    borderRadius : 10 ,
    borderColor : '#c4c4c4',
    borderWidth : 1.5 ,
},
number : {
    fontFamily : fonts.medium,
    fontSize : 18,
    textAlign : 'center',
    color : colors.PrimaryDark
},
number_text : {
    fontFamily : fonts.regular,
    fontSize : 13,
    textAlign : 'center',
    lineHeight : 18,
    color : colors.SecondaryDark
},
addon : {
    fontFamily : fonts.medium,
    fontSize : 17,
    color : colors.SecondaryDark,
    paddingHorizontal : 15 ,
    marginBottom : 10 ,
},
c_card : {
    backgroundColor : colors.White, 
    borderRadius : 10,
    borderColor : '#97979760' ,
    borderWidth : 1.25 ,
    height : 80 ,
    width : 80 ,
    marginRight : 12 ,
    justifyContent : 'center',
    alignItems : 'center'
  },
  c_text : {
    fontSize : 13 ,
    paddingTop : 5 ,  
    fontFamily : fonts.medium,
    color : '#555555BF', 
    
  },
});
  