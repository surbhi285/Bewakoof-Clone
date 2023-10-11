import { Container, Box, Flex} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {BsHeart} from 'react-icons/bs';
import {useDispatch, useSelector} from 'react-redux';
import { FETCH_DATA } from '../Action';
import Filter from './Filter';

export default function Women() {
  
  const getData = useSelector((store)=>{
    console.log(store.data, "store debug");
    return store.data;
  })

  

 const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(FETCH_DATA());
  }, []);

  const womenData = getData?.data?.filter((item)=>{
    return item.gender==="Women";
   
  });
  console.log(womenData);

  return (
    <Box>
      <Flex className='heading1'>
      <NavLink to="/" style={{textDecoration:"none", color:"black"}}>
      <Container className='heading2'>Home</Container>
      </NavLink>
      <Container className='heading2'>/</Container>
      <Container className='heading2'>Women Clothing</Container>
      </Flex>
   

    <Box>
      <Flex>
     <h2 className='heading3'>Women Clothing</h2>
     <div style={{marginLeft:"20px", fontSize:"30px", color:"gray", marginTop:"40px"}}>({womenData?.length})</div>  
     </Flex>
     <hr className='ruler'/>
    </Box>
    
    <Flex>
    <Container style={{width:"150px", height:"50px"}}>
    <Flex>
      <h3 className='heading4' style={{marginRight:"950px"}}>FILTERS</h3>
      <Flex>
      <div className='sort' >SORT BY</div>
      <div style={{marginLeft:"70px", marginTop:"50px"}}>
      <select style={{border: "none"}}>
        <option value="1">Popular</option>
        <option value="2">Low to High</option>
        <option value="3">High to Low</option>
      </select>
      </div>
      </Flex>
      </Flex>
     <Filter/>
    </Container>

    <Container className='dataInfo'>
       {womenData?.map((item, index)=>(
        <Box className='dataStyle' key={index}>
       <Link to={`/product/${item._id}`}>
        <img className='dataImage' src={item.displayImage}></img>
        </Link>
         <Flex>
         <h3 className='dataBrand'>{item.brand}</h3>
         <BsHeart style={{height:"20px", width:"20px", color:"grey", marginLeft:"15px"}}/>
         </Flex>
         <div className='dataTitle' style={{color:"rgb(115, 115, 115)"}}>{item.name}</div>
         <div className='dataPrice' style={{fontSize:"20px"}}>₹{item.price}</div>
         </Box>
       )
       )}
       
      </Container>
      </Flex>
    </Box>
  )
}

