import { Container, Box, Flex, Text } from '@chakra-ui/react';
import {FaFacebookSquare} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BiLogoTwitter, BiLogoSnapchat, BiLogoApple} from 'react-icons/bi';

import React from 'react'

export default function Footer() {
  return (
    <Container style={{paddingLeft:"50px", backgroundColor:"#181818", color:"white", margin:"0"}}>
     <Box>
     <h1 style={{color: "#fdd835", paddingTop:"50px", marginTop:"0"}}>Bewakoof®</h1>
     <Flex style={{gap:"16%"}}>
    <Box>
    <Box style={{marginBottom:"20px", color:"#fdd835"}}>CUSTOMER SERVICE</Box>
    <div>Contact Us</div>
    <div>Track Order</div>
    <div>Return Order</div>
    <div>Cancel Order</div>
    </Box>
    <Box>
    <Box style={{marginBottom:"20px", color:"#fdd835"}}>COMPANY</Box>
    <div>About Us</div>
    <div>We're Hiring</div>
    <div>Terms & Conditions</div>
    <div>Privacy Policy</div>
    <div>Blog</div>
    </Box>

     <Box>
    <Box style={{marginBottom:"20px", color:"#fdd835"}}>CONNECT WITH US</Box>
   <div style={{marginBottom:"10px"}}><FaFacebookSquare /> 4.7M People Like </div>
   <div style={{marginBottom:"10px"}}><AiOutlineInstagram/>1M Followers</div>
   <div style={{fontSize:"25px", marginLeft:"10px"}}><BiLogoTwitter style={{marginRight:"5px"}} />
   <BiLogoSnapchat style={{marginRight:"5px"}}/><BiLogoApple/></div>
        </Box>
        <Box>
     <Box style={{marginBottom:"20px", color:"#fdd835"}}>KEEP UP TO DATE</Box>
     {/* <div><input type='text' placeholder='Enter Email Id' /></div> */}
     </Box>
     </Flex>
     </Box>
    </Container>
  )
}
