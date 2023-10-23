import { addCartList, addWishlistItem, fetchData, getCartList, getWatchlistItem, removeWatchlistItem } from "./ServiceApi";
import { signupCall } from "./ServiceApi";
import { loginCall } from "./ServiceApi";
import ACTION_TYPE from "./ActionType"

export const SET_DATA = (payload)=>{
    return{
        type: ACTION_TYPE.SET_DATA,
        payload: payload,
    };
};

export const SET_FILTERS = (category)=>{
    return{
        type: ACTION_TYPE.SET_FILTERS,
        payload: category,
    };
};

export const ERROR = (payload)=>{
    return{
        type: ACTION_TYPE.ERROR,
        payload: payload,
    };
};

export const FETCH_DATA = ()=>async(dispatch)=>{  
   const data = await fetchData() ;
   dispatch(SET_DATA(data));
};

export const SIGNUP_SUCCESS =(payload)=>({
    type: ACTION_TYPE.SIGNUP_SUCCESS,
    payload: payload,
});

export const LOGIN_SUCCESS =(payload)=>({
   type:  ACTION_TYPE.LOGIN_SUCCESS,
   payload: payload,
});

export const LOGIN_FAILURE=(payload)=>({
   type:  ACTION_TYPE.LOGIN_FAILURE,
   payload: payload,
});

export const LOGOUT = (payload)=>({
   type:  ACTION_TYPE.LOGOUT,
   payload: payload,
})


export const signup = (name, email, password)=>{
   return async(dispatch)=>{
       const signupDetail= await signupCall(name, email, password);
       if(signupDetail){
           dispatch(LOGIN_SUCCESS(signupDetail));
       }else{
           dispatch(LOGIN_FAILURE("Something went wrong "));
       }
       
   }
};

export const login = (email, password)=>{
   return async(dispatch)=>{
    const loginDetail= await loginCall(email, password);
    if(loginDetail){
        dispatch(LOGIN_SUCCESS(loginDetail));
    }else{
        dispatch(LOGIN_FAILURE("Invalid User"));
        }   
    }
}

export const ADD_TO_WISHLIST = (payload) => ({
    type: ACTION_TYPE.ADD_TO_WISHLIST,
    payload: payload,
  });


export const GET_WISHLIST = (payload)=>({
    type: ACTION_TYPE.GET_WISHLIST,
    payload: payload,
})
  
  export const REMOVE_FROM_WISHLIST = (payload) => ({
    type: ACTION_TYPE.REMOVE_FROM_WISHLIST,
    payload: payload,
  });
  

  export const addWishlist = (productId)=>{
    return async (dispatch)=>{
        const wishlistItem= await addWishlistItem(productId);
        if(wishlistItem){
            dispatch(ADD_TO_WISHLIST(wishlistItem));
        }
    }
}

export const getWatchlist = ()=>{
    return async (dispatch)=>{
       const getItem = await getWatchlistItem();
       if(getItem){
        dispatch(GET_WISHLIST(getItem));
       }
    }
}
  
export const removeWatchlist=(productId)=>{
    return async(dispatch)=>{
        const removeItem = await removeWatchlistItem(productId);
        //console.log(removeItem)
        if(removeItem){
            dispatch(REMOVE_FROM_WISHLIST(removeItem));
        }  
    }
} 
export const ADD_CART = (payload) => ({
    type: ACTION_TYPE.ADD_CART,
    payload: payload,
  });


export const GET_CART = (payload)=>({
    type: ACTION_TYPE.GET_CART,
    payload: payload,
});

export const addCart =(productID)=>{
    return async (dispatch)=>{
        const cartItem= await addCartList(productID);
        if(cartItem){
            dispatch(ADD_CART(cartItem));
        }
    }
}

export const getCart = ()=>{
    return async(dispatch)=>{
       const getCartItem = await getCartList();
       if(getCartItem){
        dispatch(GET_CART(getCartItem));
       }
    }
}