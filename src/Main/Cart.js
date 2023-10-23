import React, { useState } from 'react'
// import { getCart } from '../Action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartList } from '../ServiceApi';
import { Container, Flex, Box, Button } from '@chakra-ui/react';

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
    },[])

   
   
  return (
    <div>
      <Flex>
      <h5 style={{marginLeft:"50px", marginTop:"50px",fontSize:"20px"}}>My Bag</h5>
      <div style={{marginLeft:"10px", marginTop:"50px", fontSize:"20px"}}>{cartData.length} item (s)</div>
      </Flex>
      <Container style={{marginTop:"50px"}}>
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
              <option value="1">quantity: {item.product.quantity}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="1">3</option>
              <option value="1">5</option>
              </select>
              <hr className='divider'style={{marginTop:"20px"}}/>
              <Button className='removeCart'>Remove</Button>
              </div>
             
             
          ))}
        </Box>
      </Container>
    </div>

  )
}
