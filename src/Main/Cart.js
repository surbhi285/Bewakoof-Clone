import React, { useState } from 'react'
// import { getCart } from '../Action';
// import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartList, removeCartItem } from '../ServiceApi';
import { Container, Flex, Box, Button, Spacer, Divider } from '@chakra-ui/react';
import {FaTruck} from 'react-icons/fa';
import info from '../Images/info.png';

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
    }catch{
      console.error("error in removing")
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
      <Flex>
      <div className='cartInfo'><FaTruck style={{color: "red", marginRight: "20px"}}/>
      Yay! You get FREE delivery on this order</div>
      <Container style={{marginTop:"40px"}}>
        <Box>
          {cartData?.map((item)=>(
            <div key={item._id} className='cartbox'>
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
        </Box>
        </Container>
        </Flex>
       
        <Flex>
        <Container >
        <Box className="cartDiscount">Save extra <span style={{fontWeight:"bold"}}>₹ 70</span> with <span style={{fontWeight:"bold"}}>TriBe</span></Box>
       </Container>
       <Container className='order'>
        <Box className='cartTotal'>PRICE SUMMARY</Box>
       </Container>
       <Flex>
       <Box className='priceTag'>Total MRP (Incl. of taxes)</Box>
       <Box className='priceTag' style={{marginLeft:"10rem"}}>₹ {TotalPrice()}</Box>
       </Flex>
       <Flex>
       <div>
       <div className='priceTag' style={{marginTop:"-32rem"}}>Shipping Charges</div>
       <div style={{marginLeft:"-7rem", marginTop:"-18px", color:"#42a2a2"}}>FREE</div>
       </div>
       </Flex>
       <Flex>
       <Box >
       <Box className='priceTag' style={{marginTop:"-29rem", fontWeight:"bold"}}>SubTotal</Box>
       <Box style={{marginTop:"-18px", marginLeft:"-7.5rem", fontWeight:"bold"}}>₹ {TotalPrice()}</Box>
       </Box>
       </Flex>
     
       <Box>
        <Flex style={{borderTop:"2px solid black"}}>
          <div className='total'>Total</div>
          <Button className='totalButton'>CONTINUE</Button>
        </Flex>
        <div style={{ marginTop:"-22.5rem", marginLeft:"-28.5rem"}}>₹ <span style={{fontWeight:"bold"}}>{TotalPrice()}</span></div>
       </Box>
       <Box className='cartpic'>
       <img src={info} alt="infoPage" style={{width:"450px"}}/>
       </Box> 
      </Flex>
   
      </div>
  )
}
