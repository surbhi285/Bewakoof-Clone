import React from 'react'
import logo from '../Images/logo.webp';
import Heart from '../Images/Heart.jpg';
import flag from '../Images/flag.png';
import shoppingBag from '../Images/shoppingBag.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from  '@fortawesome/free-solid-svg-icons';
import {Flex, UnorderedList, ListItem, Box, Button, Text} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';



export default function Nav() {
    
  return (
    <>
    <Flex className="topBar">
    <UnorderedList className="topBar-left">
        <ListItem>Offers</ListItem>
        <ListItem>FanBook</ListItem>
        <ListItem>TriBe MemberShip</ListItem>
    </UnorderedList>
    <UnorderedList className='topBar-right'>
        <ListItem style={{marginLeft:"45rem"}}>Contact Us</ListItem>
        <ListItem>Track Order</ListItem>
    </UnorderedList>
    </Flex>

    <Flex className='navBar'>
        <UnorderedList className='navBar-left'>
            <ListItem><img src={logo} alt="logo" className='imageStyle'></img></ListItem>
            <NavLink to="/Men" className="navLink">
             <ListItem className='menuItem'>MEN</ListItem>
             </NavLink>
             <NavLink to="/Women" className="navLink">
             <ListItem className='menuItem'>WOMEN</ListItem>
             </NavLink>
             <NavLink to="/MobileCover" className="navLink">
             <ListItem className='menuItem' style={{width:"140px"}}>MOBILE COVERS</ListItem>
             </NavLink>
        </UnorderedList>

        <UnorderedList className='navBar-right'>
            <ListItem className='navLi'><FontAwesomeIcon icon ={faSearch} style={{color:"#b9b3b3", marginTop:"12px", paddingLeft:"10px"}}/><input type="search" placeholder='Search by product, category or collection' className='inputSearch'/></ListItem>
             <ListItem style={{fontSize:"25px"}}>|</ListItem>
             <ListItem style={{marginTop:"8px"}}>Login</ListItem>
             <ListItem><img src={Heart} alt="fav" className='favStyle'/></ListItem>
            <ListItem><img src={shoppingBag} alt="shopping" className='bag'/> </ListItem>
            <ListItem><img src={flag} alt="flagIcon" className='flag'/></ListItem>
        </UnorderedList>
    </Flex>
    <hr/>
   
    </>
  )
}
