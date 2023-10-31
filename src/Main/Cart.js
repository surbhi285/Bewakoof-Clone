import React, { useState } from 'react'
// import { getCart } from '../Action';
// import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { getCartList, removeCartItem } from '../ServiceApi';
import { Container, Flex, Box, Button, Text } from '@chakra-ui/react';
import {FaTruck} from 'react-icons/fa';
import info from '../Images/info.png';
import emptybag from '../Images/emptybag.png';

export default function Cart() {

  const [cartData, setCartData] = useState([]);

    useEffect(()=>{
      const cartDataItem = async ()=>{
        try{
          const response = await getCartList();
          if (response && response.data && response.data.items) {
            console.log(response.data.items)
            // console.log(response.data.items[0].product.totalPrice)
            setCartData(response.data.items);
          }
         
        }catch{
          console.error("Not geting data")
        }
      };
     cartDataItem();
    },[]);

  const removeItem = async(itemId)=>{
    console.log(itemId)
    try{
      await removeCartItem(itemId);
      setCartData((prevCartData) => prevCartData.filter((item) => item._id !== itemId));
      console.log("item is removed");
    } catch (error) {
      console.error("Error in removing: ", error);
    }
  }

    const TotalPrice = ()=>{
      let Price = 0;
      for(const item of cartData){
        // console.log(item.product.price);
        // console.log(item.quantity);
        Price +=item.product.price * item.quantity;
        // console.log(Price);
      }
      return Price;
    };
    

   
   
  return (
    <div>
      <Flex>
      <h5 style={{marginLeft:"50px", marginTop:"50px",fontSize:"20px"}}>My Bag</h5>
      <div style={{marginLeft:"10px", marginTop:"50px", fontSize:"20px"}}>{cartData.length} item (s)</div>
      </Flex>
      {cartData.length>0 ?(
      <div>
       <div className='cartInfo'><FaTruck style={{color: "red", marginRight: "20px"}}/>
      Yay! You get FREE delivery on this order</div>

      <Container style={{width:"40rem", height:"fit-content", marginLeft:"30px", marginTop:"20px"}}>
        {cartData?.map((item)=>(
          <div key={item._id} style={{marginBottom:"5%", border:"1px solid rgb(203, 201, 201)", 
          height:"200px"}}>
            <Flex>
            <div className='cartName'>{item.product.name}</div>
            <img className="cartImage" src= {item.product.displayImage} alt="image" />
            </Flex>
            <div className='cartPrice'>₹ {item.product.price}</div>
              <select style={{marginLeft:"20px", height:"25px", fontSize: "12px", border: "1px solid #ced4da", borderRadius: "5px" }}>
              <option value="1">Size: XS</option>
              <option value="1">S</option>
              <option value="2">M</option>
              <option value="1">L</option>
              <option value="1">XL</option>
              </select>
           
              <select style={{marginLeft:"20px", height:"25px", fontSize: "12px", border: "1px solid #ced4da", borderRadius: "5px"}}>
              <option value="1">quantity: {item.quantity}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="1">3</option>
              <option value="1">5</option>
              </select>
             <hr className='divider'style={{marginTop:"20px"}}/>
              <Button className='removeCart' onClick={()=>removeItem(item._id)}>Remove</Button>
              </div>   
        ))}
      </Container>
       </div> 
      ):(
        <>
         <img src={emptybag} alt="cartbag" style={{width:"200px", paddingLeft:"45%"}}/>
         <Text style={{paddingLeft:"50%", marginTop:"0", fontSize:"25px"}}>Nothing in the bag.</Text>
            <Link to='/' style={{marginLeft:"30%"}}>
            <Button 
            style={{width:"20%", height:"2.5rem", fontWeight:"bold",fontSize:"18px", marginLeft:"18%",
            color:"rgb(66, 162, 162)", backgroundColor:"white", borderRadius:"5px", border:"1px solid rgb(66, 162, 162)", cursor:"pointer"}}>
            Continue Shopping</Button>
            </Link>
        </>
      )}
      </div>
  )
}
