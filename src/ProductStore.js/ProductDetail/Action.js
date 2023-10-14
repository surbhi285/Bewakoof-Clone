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
     try{const storedData = localStorage.getItem("pr0ductList");
     if(storedData){
        const getProduct = JSON.parse(storedData);
        const parseData = getProduct.productList;
        dispatch(SET_DATA(parseData));
     }else{
        const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=1600",
        {
            method: 'GET',
                headers: {
                    'projectId': "3ggih9l8ac0f",
                }
            });
        const data = await response.json();
        console.log(data, "data");
        dispatch(SET_DATA(data));
        localStorage.setItem("productList", JSON.stringify({"productList": data}))
        }
    }catch(error){
    console.log(ERROR(error));
    }
};




    




