import React, { useState } from 'react'
import logo from '../Images/logo.webp';
// import Heart from '../Images/Heart.jpg';
import flag from '../Images/flag.png';
import shoppingBag from '../Images/shoppingBag.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from  '@fortawesome/free-solid-svg-icons';
import {Flex, UnorderedList, ListItem, Box, Button, Text} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import {BsHeart} from 'react-icons/bs'
import OptionWomen from './CategoriesWomen';
import OptionMen from './CategoriesOption';




export default function Nav() {

    const[menuHover, setMenuHover] = useState(false);
    
    const handleMouseEnter = (category)=>{
        setMenuHover(category);
    }
    const handleMouseLeave=()=>{
        setMenuHover(null);
    };
    
  return (
    <>
    <Flex className="topBar" >
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

    <Flex className='navBar' >
        <UnorderedList className='navBar-left'>
            <ListItem><img src={logo} alt="logo" className='imageStyle'></img></ListItem>
            
            <div onMouseEnter={()=>handleMouseEnter('Men')} onMouseLeave={handleMouseLeave} className='menu-container'>
            <NavLink to="/Men" className="navLink">
            <ListItem className='menuItem' style={{marginTop:"-10px"}}>MEN</ListItem>
            </NavLink>
            {menuHover==='Men'&& <OptionMen />}
            </div>
       
            <div onMouseEnter={()=>handleMouseEnter('Women')} onMouseLeave={handleMouseLeave} className='menu-container'>
             <NavLink to="/Women" className="navLink">
             <ListItem className='menuItem' style={{marginTop:"-10px"}}>WOMEN</ListItem>
             </NavLink>
             {menuHover === 'Women' && <OptionWomen />}
            </div>
       

             <NavLink to="/MobileCover" className="navLink">
             <ListItem className='menuItem' style={{width:"140px"}}>MOBILE COVERS</ListItem>
             </NavLink>
        </UnorderedList>

        <UnorderedList className='navBar-right'>
            <ListItem className='navLi'><FontAwesomeIcon icon ={faSearch} style={{color:"#b9b3b3", marginTop:"12px", paddingLeft:"10px"}}/><input type="search" placeholder='Search by product, category or collection' className='inputSearch'/></ListItem>
             <ListItem style={{fontSize:"25px"}}>|</ListItem>

             <NavLink to='/Login' style={{color:"black", textDecoration:"none"}}>
             <ListItem style={{marginTop:"8px"}}>Login</ListItem>
             </NavLink>

             <ListItem>
            <BsHeart style={{height:"20px", width:"20px", marginLeft:"5px", marginTop:"10px" }}/>
             </ListItem>
            <ListItem><img src={shoppingBag} alt="shopping" className='bag'/> </ListItem>
            <ListItem><img src={flag} alt="flagIcon" className='flag'/></ListItem>
        </UnorderedList>
    </Flex>
   
    <hr/>
   
    </>
  )
}
