
export async function fetchData(){  
    const storedData = localStorage.getItem("productList");
    if(storedData){
       const getProduct = JSON.parse(storedData);
       const parseData = getProduct.productList;
       return parseData;
    }else{
        try{
       const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=1600",
       {
           method: 'GET',
               headers: {
                   'projectId': "3ggih9l8ac0f",
               }
           });
       const data = await response.json();
       console.log(data, "data");
       console.log(data.data.subCategory)
       localStorage.setItem("productList", JSON.stringify({"productList": data}))
       return data;
       }catch(error){
     console.log("error");
   }
};
}

export async function signupCall(name, email, password){
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
                    "signup",
                    JSON.stringify({
                        signup: responseData,
                    })
                );
                return responseData;
            }else{
                console.log("registration failed", response);
            }
        }
        catch (error) {
            console.log('An error occurred:', error);
    }
};

export async function loginCall(email, password){
        try{
            const response = await fetch("https://academics.newtonschool.co/api/v1/user/login",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                    projectId: "3ggih9l8ac0f",
                },
                body: JSON.stringify({
                    email:`${email}`,
                    password:`${password}`,
                    appType:"ecommerce",
                }),
            });
            if(response.ok){
                const responseData = await response.json();
                console.log(responseData);
                localStorage.setItem(
                    "signup",
                    JSON.stringify({
                        signup: responseData,
                    })
                );
                return responseData;
            }else{
                console.log("registration failed", response);
                // dispatch(LOGIN_FAILURE("User Not Found"));
            }
        }
        catch (error) {
            console.log('An error occurred:', error);
    }
}

export async function addWishlistItem(productId){
        const user = localStorage.getItem("signup");
        console.log("userData", user);
        if(user){
          const parsedData = JSON.parse(user);
        //   console.log(parsedData.signup.token);
            const response = await fetch(`/api/v1/ecommerce/wishlist/${productId._id}`,  
            {
                method: "PATCH",
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${parsedData.signup.token}`,
                    projectId: "3ggih9l8ac0f",
                  },
                  body: JSON.stringify({ productID: productId}),
                });
                if (response.ok){
                    console.log("successfully added")
                    return productId;
                }else{
                    console.error("failed to add")
                }
            }
        }


export async function getWatchlistItem(){
        const userInfo = localStorage.getItem("signup")
        if (userInfo){
          const userDetail = JSON.parse(userInfo);
          const response = await(fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist",
              {
                  method: 'GET',
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userDetail.sign.token}`,
                      projectId: "3ggih9l8ac0f",
                  }
              }))
        if(response.ok){ 
        console.log("response", response);
        const data = await response.json();
        console.log(data.data)
        return(data);
        }else{
            console.log("not added")
        }
        }
    }


