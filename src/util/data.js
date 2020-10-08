

export const products = [
    {
      id : 1 ,
      image : require('../../assets/images/products/food01.png'),
      title : 'Big Mac Burger Meal',
      subtitle : 'with extra cheese',
      price : 850.00 , 
      category_id : 1
    },
    {
      id : 2 ,
      image : require('../../assets/images/products/food02.png'),
      title : 'Spicy Chicken Nuggets',
      subtitle : 'Sharebox',
      price : 650.00 , 
      category_id : 1
    },
    {
      id : 3,
      image : require('../../assets/images/products/food03.png'),
      title : 'Angus Burger Meal',
      subtitle : 'with extra cheese',
      price : 950.00 , 
      category_id : 1
    },
    {
      id : 4 ,
      image : require('../../assets/images/products/food04.png'),
      title : 'Mc Rice Meal',
      subtitle : '+ coca cola',
      price : 670.00 , 
      category_id : 2
    }
  ]

export const categories = 
  [
    {
      id : 1 ,
      image : require('../../assets/images/icons/category01.png'),
      title : 'Meals'
    },
    {
      id : 2 ,
      image : require('../../assets/images/icons/category02.png'),
      title : 'Sides'
    },
    {
      id : 3 ,
      image : require('../../assets/images/icons/category03.png'),
      title : 'Desserts'
    },
    {
      id : 4 ,
      image : require('../../assets/images/icons/category04.png'),
      title : 'Beverages'
    },
    {
      id : 5 ,
      image : require('../../assets/images/icons/category03.png'),
      title : 'Desserts'
    },
    {
      id : 6 ,
      image : require('../../assets/images/icons/category04.png'),
      title : 'Beverages'
    },
    
  ]


export const getCart = cart => {
    return cart.reduce( (acc,current) => {

        const find = products.find( i => i.id == current.id)
        if(find != undefined && find != null){
        return [...acc , 
        {
          qty : current.qty , 
          ...find
        }]
      }else{
        return acc;
      }

    } , [])
}

export const getFav = fav => {
  return fav.reduce( (acc,current) => {

      const find = products.find( i => i.id == current)
      if(find != undefined && find != null){
      return [...acc , 
      {
        ...find
      }]
    }else{
      return acc;
    }

  } , [])
}