import Action_Type from "./ActionType";

export const LOGIN_SUCCESS =(payload)=>({
     type: Action_Type.LOGIN_SUCCESS,
     payload: payload,
});

export const LOGIN_FAILURE=(payload)=>({
    type: Action_Type.LOGIN_FAILURE,
    payload: payload,
})

export const USER_DATA = (name, email, password)=>{
    return async(dispatch)=>{
        try{
            const response = await fetch("https://academics.newtonschool.co/api/v1/user/signup",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                    projectId: "3ggih9l8ac0f",
                },
                body: JSON.stringify({
                    name:`${name}`,
                    email:`${email}`,
                    password:`${password}`,
                    appType:"ecommerce",
                }),
            });
            if(response.ok){
                const responseData = await response.json();
                console.log(responseData);
                localStorage.setItem(
                    "userInfo",
                    JSON.stringify({
                        signup: responseData,
                    })
                );
                dispatch(LOGIN_SUCCESS(responseData));
            }else{
                console.log("registration failed", response);
                // dispatch(LOGIN_FAILURE("User not found"));
            }
        }
        catch (error) {
            console.log('An error occurred:', error);
    }
};
};