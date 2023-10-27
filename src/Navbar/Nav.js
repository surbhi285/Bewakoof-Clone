import React, { useState } from 'react'
import logo from '../Images/logo.webp';
// import Heart from '../Images/Heart.jpg';
import flag from '../Images/flag.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from  '@fortawesome/free-solid-svg-icons';
import {Flex, UnorderedList, ListItem, Container} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import {BsHeart, BsBag} from 'react-icons/bs';
import {CiUser} from 'react-icons/ci';
import OptionWomen from './CategoriesWomen';
import OptionMen from './CategoriesOption';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../Action';




export default function Nav() {

    const[menuHover, setMenuHover] = useState(false);
    const[dropmenu, setDropmenu] = useState(false);
    


    const dispatch = useDispatch();

    const isLoggedIn = useSelector((store) => store.user?.isLoggedIn);
    //console.log(isLoggedIn)

    const wishlist = useSelector((state) => state.data.wishlist);

    const handleMouseEnter = (category)=>{
        setMenuHover(category);
    }
    const handleMouseLeave=()=>{
        setMenuHover(null);
    };

    const handleProfileClick = ()=>{
        //console.log('handleProfileClick is triggered');
        //console.log('isLoggedIn:', isLoggedIn);
        setDropmenu(!dropmenu);    
    }

    const handleLogout =() =>{
        dispatch(LOGOUT()); // Dispatch the logout action
        setDropmenu(false);
        //console.log('isLoggedIn:', isLoggedIn);
    }
     

   
    
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
            <NavLink to="/">
            <ListItem><img src={logo} alt="logo" className='imageStyle'></img></ListItem>
            </NavLink>

            <Container style={{display:"flex"}}>
            <div onMouseEnter={()=>handleMouseEnter('Men')} onMouseLeave={handleMouseLeave} className='menu-container'>
            <NavLink to={`/categories/men`} className="navLink">
            <ListItem className='menuItem' style={{marginRight:"0"}}>MEN</ListItem>
            </NavLink>
            {menuHover==='Men'&& <OptionMen />}
            </div>
       
            <div onMouseEnter={()=>handleMouseEnter('Women')} onMouseLeave={handleMouseLeave} className='menu-container'>
             <NavLink to={`/categories/women`}  className="navLink">
             <ListItem className='menuItem'  style={{marginRight:"0"}}>WOMEN</ListItem>
             </NavLink>
             {menuHover === 'Women' && <OptionWomen/>}
            </div>
       

             <NavLink to="/MobileCover" className="navLink">
             <ListItem className='menuItem' style={{width:"150px"}}>MOBILE COVERS</ListItem>
             </NavLink>
             </Container>
             </UnorderedList>

        <UnorderedList className='navBar-right'>
            <ListItem className='navLi'><FontAwesomeIcon icon ={faSearch} style={{color:"#b9b3b3", marginTop:"12px", paddingLeft:"10px"}}/><input type="search" placeholder='Search by product, category or collection' className='inputSearch'/></ListItem>
             <ListItem style={{fontSize:"25px", marginTop:"5px"}}>|</ListItem>
              
              {isLoggedIn ?(
              <><CiUser onClick={handleProfileClick} style={{fontSize:"25px", marginTop:"8px", marginRight:"10px"}}/>
              {dropmenu && (
                <ul className='profileOption'>
                    <li>Hi, </li>
                    <li>My Account</li>
                    <li>My Wishlist</li>
                    <li>My Orders</li>
                    <li>My Wallet</li>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
              )}
              </>
              ):(
              <>
            <NavLink to='/Login' style={{color:"black", textDecoration:"none"}}>
             <ListItem style={{marginTop:"15px"}}>Login</ListItem>
             </NavLink>
              </>)}
            
            <NavLink to='/wishlist' style={{color:"black"}}>
            <ListItem>
            <BsHeart style={{height:"20px", width:"20px", marginTop:"15px" }}/>
             </ListItem>
             </NavLink>
             <NavLink to='/Cart' style={{color:"black"}}>
            <ListItem>
            <BsBag style={{marginTop:"15px", fontSize:"20px"}}/>
            </ListItem>
            </NavLink>

            <ListItem><img src={flag} alt="flagIcon" className='flag'/></ListItem>
        </UnorderedList>
    </Flex>
   
    <hr/>
   
    </>
  )
}
