import Action_Type from "./ActionType";

const initialState ={
    isLoggedIn:false,
    userInfo: {},
    message:"",
    
}

const userReducer = (state=initialState, action)=>{
    switch(action.type){
        case Action_Type.LOGIN_FAILURE:
            return{...state,  message: action.payload, isLoggedIn:false};

        case Action_Type.LOGIN_SUCCESS:
            return{...state, isLoggedIn: true, userInfo: action.payload, message:""};

        default:
            return state;
    }
}

export default userReducer;