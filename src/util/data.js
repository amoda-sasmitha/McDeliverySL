

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
      category_id : 1
    },
    {
      id : 5 ,
      image : require('../../assets/images/products/food07.png'),
      title : 'Mc Happy Meal',
      subtitle : '+6 chicken nuggets',
      price : 750.00 , 
      category_id : 1
    },
    {
      id : 6 ,
      image : require('../../assets/images/products/food08.png'),
      title : 'Fries Large',
      subtitle : 'with extra 100g',
      price : 300.00 , 
      category_id : 2
    },
    {
      id : 7 ,
      image : require('../../assets/images/products/food13.png'),
      title : 'Coca Cola',
      subtitle : '300ML',
      price : 350.00 , 
      category_id : 3
    },
    {
      id : 8 ,
      image : require('../../assets/images/products/food12.png'),
      title : 'Pepsi Cola',
      subtitle : '300ML',
      price : 350.00 , 
      category_id : 3
    },
    {
      id : 9 ,
      image : require('../../assets/images/products/food11.png'),
      title : 'Chocalate Milkshake',
      subtitle : '300ML',
      price : 650.00 , 
      category_id : 3
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
      image : require('../../assets/images/icons/category04.png'),
      title : 'Beverages'
    },
    {
      id : 4 ,
      image : require('../../assets/images/icons/category03.png'),
      title : 'Desserts'
    },
    {
      id : 5 ,
      image : require('../../assets/images/icons/category06.png'),
      title : 'Pizza'
    },
    {
      id : 6 ,
      image : require('../../assets/images/icons/category07.png'),
      title : 'Snacks'
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



export const Total = cart => {
  return cart.reduce( (acc,current) => {

      const find = products.find( i => i.id == current.id)
      if(find != undefined && find != null){
      return acc + (current.qty * find.price)
    }else{
      return acc;
    }

  } , 0)
}

export const orders = 
  [
    { id : 1001,
      total : 3400.00,
      date : '2020-10-10',
      is_pending : true,
      is_completed : false
    },
    { id : 1034,
      total : 1500.00,
      date : '2020-10-06',
      is_pending : false,
      is_completed : true
    },
    { id : 1067,
      total : 850.00,
      date : '2020-10-07',
      is_pending : false,
      is_completed : true
    },
  ]

  export const mapStyle = [  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#d6e2e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#cfd4d5"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#7492a8"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "lightness": 25
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#dde2e3"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#cfd4d5"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#dde2e3"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#7492a8"
      }
    ]
  },
  {
    "featureType": "landscape.natural.terrain",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#dde2e3"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      {
        "saturation": -100
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#588ca4"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a9de83"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#bae6a1"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c6e8b3"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#bae6a1"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "saturation": -45
      },
      {
        "lightness": 10
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#41626b"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c1d1d6"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#a6b5bb"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#9fb6bd"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.icon",
    "stylers": [
      {
        "saturation": -70
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b4cbd4"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#588ca4"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#008cb5"
      }
    ]
  },
  {
    "featureType": "transit.station.airport",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "saturation": -100
      },
      {
        "lightness": -5
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a6cbe3"
      }
    ]
  }
]