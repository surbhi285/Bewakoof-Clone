import ACTION_TYPE from "./ActionType";

const initialState ={
    data:[],
    category: "", 
    wishlist:[],   
}

function dataReducer(state=initialState, action){

    switch (action.type){
        case ACTION_TYPE.SET_DATA:
            return {...state, data:action.payload};

            case ACTION_TYPE.SET_FILTERS:
                return {...state, category: action.payload};  

            case ACTION_TYPE.ADD_TO_WISHLIST:
                return{
                ...state,
                wishlist: [...state.wishlist, action.product],
                }
                
            case ACTION_TYPE.GET_WISHLIST:
                return{...state, wishlist: action.product};

            default:
                return state;

        
    }
}

export default dataReducer;