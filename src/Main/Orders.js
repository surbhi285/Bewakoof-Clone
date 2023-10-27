import { Box, Flex, Text, Button } from '@chakra-ui/react';
import {Link} from 'react-router-dom'
import {AiOutlineLeft} from'react-icons/ai';
import empty from '../Images/empty.webp';
import React from 'react';

export default function Orders(){
  return (
    <Box style={{marginLeft:"10%"}}>
    <Flex>
        <Link to ="/Account" style={{textDecoration:"none"}}>
        <AiOutlineLeft style={{marginTop:"25px", marginRight:"15px", color:"#51cccc"}}/>
        <Text style={{color:"#51cccc", marginTop:"-24px", marginLeft:"25px"}}> Back to My Account</Text>
        </Link>
    </Flex>
    <h1 className='heading 3'style={{letterSpacing:"0.5px"}}>My Orders</h1>
    <hr className='ruler' style={{marginLeft:"10px", marginTop:"-10px"}}/>
        <Box><img src={empty} alt="empty bag" style={{marginLeft:"35%", width:"20%"}}/></Box>
        
        
        <Text style={{ marginLeft:"32%", marginTop:"0",fontWeight:"bold"}}>Hey! You haven't order anything till yet.</Text>
            <Link to='/' style={{marginLeft:"35%"}}>
            <Button 
            style={{ width:"13rem", height:"2.5rem", fontWeight:"bold",fontSize:"18px",
            color:"white", backgroundColor:"rgb(66, 162, 162)", borderRadius:"5px", border:"1px solid rgb(66, 162, 162)", cursor:"pointer"}}>
            SHOP NOW</Button>
            </Link>
   
    </Box>
  )
}
