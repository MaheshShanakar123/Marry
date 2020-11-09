import React, { createContext, useReducer } from 'react';

// Intialization

var initiaalization = {
    transaction : [
        { id: 1, img:require("../assets/Vendors/WeddingPhotos/wedding.jpg"), vendor: 'Photography', name: "Shanshank",city :'Shimoga',companyName:'Shashank Photography',Package_Price : "80000",description:"We are Bangalore based wedding planners and we do cater particular services as well. we are specialized in our field and have experience of four years.",watsapp:'8951809045'  },
        { id: 5, img:require("../assets/Vendors/WeddingPhotos/wedding.jpg"), vendor: 'Photography', name: "Rajesh",city :'Shimoga',companyName:'Rajesh Photography',Package_Price : "80000",description:"We are Bangalore based wedding planners and we do cater particular services as well. we are specialized in our field and have experience of four.",watsapp:'1234567890'  },
        { id: 2, img:require("../assets/Vendors/Mehndi/Mehndi1.jpg"), vendor: 'Mehndi', name: "Manoj",city :'Shimoga',companyName:'Manoj Mehndi',Package_Price : "70000",description:"We are Bangalore based wedding planners and we do cater particular services as well. we are specialized in our field and have experience of four years.",watsapp:'13243454665'    },
        { id: 6, img:require("../assets/Vendors/Mehndi/Mehndi1.jpg"), vendor: 'Mehndi', name: "Manoj",city :'Shimoga',companyName:'Manoj Mehndi',Package_Price : "90000",description:"We are Bangalore based wedding planners and we do cater particular services as well. we are specialized in our field and have experience of four years.",watsapp:'23424354355'    },
        { id: 3, img:require("../assets/Vendors/Decorator/Decorator1.jpg"), vendor: 'Decorators', name: "Mahesh",city :'Shimoga',companyName:'Mahesh Decorators',Package_Price : "60000",description:"We are Bangalore based wedding planners and we do cater particular services as well. we are specialized in our field and have experience of four years.",watsapp:'8951809045'   },
        { id: 4, img:require("../assets/Vendors/Lighting/Lighting1.jpg"), vendor: 'Lightings', name: "Suraj",city :'Shimoga',companyName:'Suraj Lightings',Package_Price : "10000",description:"We are Bangalore based wedding planners and we do cater particular services as well. we are specialized in our field and have experience of four years.",watsapp:'8951809045'    },
        { id: 7, img:require("../assets/Vendors/WeddingPhotos/wedding.jpg"), vendor: 'Photography', name: "Krishna",city :'Shimoga',companyName:'Shashi Photography',Package_Price : "100000",description:"We are Bangalore based wedding planners and we do cater particular services as well. we are specialized in our field and have experience of four.",watsapp:'3432535345'  },
    ]
}
const reducer = (state,action) =>{
    switch(action){
        default :
           return state;
    }
}
//Created context
export const GlobalContext = createContext(initiaalization);


// Provider

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initiaalization);
// Action


    return (<GlobalContext.Provider value={{ transactions: state.transaction  }}>{children}</GlobalContext.Provider>)
}