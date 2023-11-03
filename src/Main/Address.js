import React, { useEffect, useState} from 'react'
import {Container, Box, Text, Button} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { placeOrder } from '../ServiceApi';

export default function Address() {
    const[address, setAddress] = useState()
    // const dispatch = useDispatch();
    
   
  return (
    <div style={{marginLeft:"50px", marginTop:"30px"}}>
    {/* <h3>My Addresses</h3>
    <Container style={{border:"1px solid grey", width:"40%"}}>
     <Box style={{backgroundColor:"rgba(0, 0, 0, 0.04)", padding:"13px 20px", fontWeight:"bold"}}>
        ADDRESS
     </Box>
     <Text style={{paddingLeft:"20px"}}>Name</Text>
     <Text style={{paddingLeft:"20px"}}>Address</Text>
     <Text style={{paddingLeft:"20px"}}>Mobile: </Text>
     <Button style={{backgroundColor:"#42A2A2", color:"white", border:"1px solid #42A2A2", width:"30%", height:"40px",
    borderRadius:"2px", marginBottom:"20px", marginLeft:"30%", fontWeight:"bold"}}>
    CONFIRM</Button>
    </Container> */}
    </div>
  )
}
