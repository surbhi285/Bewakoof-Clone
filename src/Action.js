import ACTION_TYPE from "./ActionType"

export const SET_DATA = (payload)=>{
    return{
        type: ACTION_TYPE.SET_DATA,
        payload: payload,
    };
};

export const ERROR = (payload)=>{
    return{
        type: ACTION_TYPE.ERROR,
        payload: payload,
    };
};

export const FETCH_DATA = ()=>async(dispatch)=>{  
     try{
        const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=1500",
        {
            method: 'GET',
                headers: {
                    'projectId': "8jf3b15onzua",
                }
            });
        const data = await response.json();
        console.log(data, "data");
        dispatch(SET_DATA(data));
      
    }catch(error){
    console.log(ERROR(error));
    }
};




    




