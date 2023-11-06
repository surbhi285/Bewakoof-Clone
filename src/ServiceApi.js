import { json } from "react-router-dom";

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
       //console.log(data.data.subCategory)
       localStorage.setItem("productList", JSON.stringify({"productList": data}))
       return data;
       }catch(error){
     //console.log("error");
   }
};
}

export async function getProduct(id){
    const response = await(fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/${id}`,
    {
        method: 'GET',
            headers: {
                'projectId': "3ggih9l8ac0f",
            }
        }));
    const data = await response.json();
    return data;
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
                //console.log(responseData);
                localStorage.setItem(
                    "signup",
                    JSON.stringify({
                        signup: responseData,
                    })
                );
                return responseData;
            }else{
                //console.log("registration failed", response);
            }
        }
        catch (error) {
            //console.log('An error occurred:', error);
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
                localStorage.setItem("authToken", responseData.token);
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
            //console.log('An error occurred:', error);
    }
}

export async function addWishlistItem(productId){
        const user = localStorage.getItem("signup");
        console.log(productId);
        console.log("userData", user);
        if(user){
          const parsedData = JSON.parse(user);
        ////console.log(parsedData.signup.token);
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/`,  
            {
                method: "PATCH",
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${parsedData.signup.token}`,
                    projectId: "3ggih9l8ac0f",
                  },
                  body: JSON.stringify({'productId': productId}),
                });
                if(response.ok){
                    console.log("response", response)
                    console.log("successfully added");
                    return productId;
                }else{
                    console.error("Request failed with status: " + response.status);
                }
            }
        }


export async function getWishlistItem(){
        const userInfo = localStorage.getItem("signup")
        if (userInfo){
          const userDetail = JSON.parse(userInfo);
          //console.log(userDetail.signup.token);
          const response = await(fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist",
              {
                  method: 'GET',
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userDetail.signup.token}`,
                      projectId: "3ggih9l8ac0f",
                  }
              }))
        if(response.ok){ 
        // //console.log("response", response);
        const wishlistData = await response.json();
        console.log(wishlistData.data)
        // localStorage.setItem(
        //     "wishlistData",
        //     JSON.stringify({
        //         wishlistData: wishlistData,
        //     })
        // );
        return wishlistData;
        }else{
            //console.log("not added")
        }
        }
    }

 export async function removeWishlistItem(productId){
    //console.log(productId);
    const userInfo = localStorage.getItem("signup")
    if (userInfo){
    const userDetail = JSON.parse(userInfo);
    //console.log(userDetail.signup.token); 
    const response = await(fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${productId}`,
    {
        method: 'DELETE',
        headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
           Authorization: `Bearer ${userDetail.signup.token}`,
           projectId: "3ggih9l8ac0f",
        }
    }))
    if(response.ok){
        // const wishlistData = JSON.parse(localStorage.getItem("wishlistData"));
        // //console.log(wishlistData);
        // if(wishlistData){
        //     const updatedWishlist = wishlistData?.wishlistData.data?.filter(item=>item.id !==productId);
        //     wishlistData.wishlistData.data = updatedWishlist;
        //     }
        const wishlistData = await response.json();
        //console.log(wishlistData.data)
        return wishlistData;
        }
        else{
            //console.log('Error:', response.status, response.statusText)
        }

    }
}

export async function addCartList(productID, quantity){
    //console.log(productID);
    const userInfo = localStorage.getItem("signup")
    //console.log(productID);
    //console.log("userData", userInfo);
    if (userInfo){
    const parseData = JSON.parse(userInfo);
    //console.log(parseData.signup.token); 
    const response = await(fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productID}`,
     {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${parseData.signup.token}`,
            projectId: "3ggih9l8ac0f",
        },
        body: JSON.stringify({'quantity': quantity}),
     }))
     const data = await response.json();
      return data.status;
    }else{
        console.error("failed to add in cart")
    }
}


export async function getCartList(){
    const userInfo = localStorage.getItem("signup")
        if(userInfo){
          const userDetail = JSON.parse(userInfo);
          console.log(userDetail);
    const response = await (fetch('https://academics.newtonschool.co/api/v1/ecommerce/cart', 
    {
        method:'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${userDetail.signup.token}`,
            projectId: "3ggih9l8ac0f",
        },

    }))
    console.log(response);
    if(response.ok){
        const cartData = await response.json();
        console.log(cartData.data)
        return cartData;
        }else{
            console.log("not added")
    }
}
}

export async function removeCartItem(productId){
    console.log(productId);
    const userInfo = localStorage.getItem("signup")
    if(userInfo){
      const userDetail = JSON.parse(userInfo);
    //   console.log(userDetail);
      try{
        const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productId}`,{
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${userDetail.signup.token}`,
              projectid: "3ggih9l8ac0f",
            },
            // body: JSON.stringify({ quantity: quantity }),
          });
          console.log(response);
            const data = await response.json();
          console.log(data);
            return data;
      }catch(error){
        console.log("something went wrong")
      }
    }
}
  

export async function placeOrder (product, address, quantity){
    console.log(product, address, quantity);
    const {addressType, street, state, country, city, pinCode} = address;
    const user = localStorage.getItem("authToken");
    if(user){
        const parsedData = JSON.parse(user);
    try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/order`, 
            {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${parsedData.authToken}`,
            projectId: "3ggih9l8ac0f",
        },
        body: JSON.stringify({
            product: product,
            quantity: quantity,
            addressType: addressType,
            address: {
              street: street,
              city: city,
              state: state,
              country: country,
              zipCode: pinCode,
            },
        }),
      });
      const data = await response.json();
      console.log("data be placed", data.status);
      return data;
      }
     catch (error) {
      console.error("Error placing the order:", error);
      return "error";
    }
  } else {
    console.log("No user data available");
    return "error";
  }
}









