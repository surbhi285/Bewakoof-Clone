import ACTION_TYPE from "./ActionType";

const initialState ={
    data:[],
    filter:[],
    Id_detail:[],
}

function dataReducer(state=initialState, action){

    switch (action.type){
        case ACTION_TYPE.SET_DATA:
            return {...state, data:action.payload};

            

            default:
                return state;

        
    }
}

export default dataReducer;