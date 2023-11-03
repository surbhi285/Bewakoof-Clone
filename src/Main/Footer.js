import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import { Container, Box, Flex, Text } from '@chakra-ui/react';
import {FaFacebookSquare} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import bewakoofLogo from '../Images/bewakoofLogo.png';
import {BiLogoTwitter, BiLogoSnapchat, BiLogoApple, BiCategory, BiUser} from 'react-icons/bi';
import {IoRocketOutline} from 'react-icons/io5'

import React from 'react'

export default function Footer() {
  const[smallerScreen, setSmallerScreen] = useState(window.innerWidth<1000)
  
  useEffect(()=>{
    const handleResize = () => {
      setSmallerScreen(window.innerWidth < 1000);
      if(window.innerWidth<1000){
      }
      
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[])
  
  return (
    <>
    {smallerScreen ?(
    <div style={{paddingLeft:"10px", backgroundColor:"white", position:"relative", width:"auto", height:"70px", paddingRight:"10px"}}>
     <Container>
     <Flex style={{justifyContent:"space-between"}}>
      <Flex style={{marginTop:"16px", flexDirection:"column"}}>
      <Link to='/' style={{color:"black", textDecoration:"none"}}>
      <img src={bewakoofLogo} alt="logo" style={{width:"30px", marginLeft:"5px", height:"20px", paddingTop:"5px"}}/>
      <Text style={{marginTop:"5px", fontSize:"15px", marginLeft:"2px"}}>Home</Text>
      </Link>
      </Flex>
      <Flex style={{marginTop:"20px", flexDirection:"column"}}>
      <Link to="/ResCategory/men" style={{color:"black", textDecoration:"none"}}>
      <BiCategory style={{fontSize:"20px"}}/>
      <Text style={{marginTop:"5px", fontSize:"15px", marginLeft:"-15px"}}>Categories</Text>
      </Link>
      </Flex>
      <Flex style={{marginTop:"20px", flexDirection:"column"}}>
      <IoRocketOutline style={{fontSize:"20px"}}/>
      <Text style={{marginTop:"5px", fontSize:"15px", marginLeft:"-15px"}}>Explore</Text>
      </Flex>
      <Flex style={{marginTop:"20px", flexDirection:"column"}}>
      <BiUser style={{fontSize:"20px"}}/>
      <Text style={{marginTop:"5px", fontSize:"15px", marginLeft:"-15px"}}>Profile</Text>
      </Flex>
     </Flex>
     </Container>
    </div>
    ):(
    <>
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
    </>)}
    </>
  )
}
