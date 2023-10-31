import { Container, Flex } from '@chakra-ui/react';
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {AiOutlineSearch, AiOutlineHeart} from 'react-icons/ai'
import {PiShoppingBagLight} from 'react-icons/pi'
import { NavLink } from 'react-router-dom';
import React from 'react';
import bewakoofLogo from '../Images/bewakoofLogo.png';

export default function ResNav() {
  return (
   <Container style={{backgroundColor:"#fdd835", height:"30px",width:"100%"}}>
    <Flex style={{justifyContent:"space-between"}}>
    <Flex>
    <HiOutlineMenuAlt1  style={{fontSize:"20px", marginLeft:"10px",paddingTop:"5px"}}/>
    <img src={bewakoofLogo} alt="logo" style={{width:"30px", height:"20px", marginLeft:"10px", paddingTop:"5px"}}/>
    </Flex>
    <Flex>
    <AiOutlineSearch style={{paddingTop:"7px" , marginRight:"10px"}} />
    <NavLink to ="/Wishlist" style={{color:"black"}}>
    <AiOutlineHeart style={{paddingTop:"7px", marginRight:"10px"}} />
    </NavLink>
    <NavLink to ="/Cart"  style={{color:"black"}}>
    <PiShoppingBagLight style={{paddingTop:"7px", marginRight:"10px"}}/>
    </NavLink>
    </Flex>
    </Flex>
   </Container>
  )
}
