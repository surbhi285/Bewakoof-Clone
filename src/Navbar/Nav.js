import React, { useState, useEffect } from 'react'
import logo from '../Images/logo.webp';
import flag from '../Images/flag.png';
import {BiSearch} from 'react-icons/bi';
import {Flex, UnorderedList, ListItem, Text, Box} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import {BsHeart, BsBag} from 'react-icons/bs';
import {CiUser} from 'react-icons/ci';
import OptionWomen from './CategoriesWomen';
import OptionMen from './CategoriesOption';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../Action';
import ResNav from './ResNav';
// import {HiOutlineMenuAlt1} from 'react-icons/hi'
// import bewakoofLogo from '../Images/bewakoofLogo.png';

export default function Nav() {
    const[menuHover, setMenuHover] = useState(false);
    const[dropmenu, setDropmenu] = useState(false);
    const [smallerScreen,  setSmallerScreen] = useState(window.innerWidth < 1000);

    const dispatch = useDispatch();

    const isLoggedIn = useSelector((store) => store.user?.isLoggedIn);
    //console.log(isLoggedIn)
  

    const handleMouseEnter = (category)=>{
        setMenuHover(category);
    }
    const handleMouseLeave=()=>{
        setMenuHover(null);
    };

    const handleProfileClick = ()=>{
        setDropmenu(!dropmenu);    
    }

    const handleLogout =() =>{
        dispatch(LOGOUT()); 
        setDropmenu(false);
    }
     
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
      },[]);
    
  return (
    <>
    {smallerScreen ? (
      <>
      <ResNav />
      
      
      </>
    ):(
    <div style={{ position: "fixed", left:0, top: 0, right: 0, zIndex: "100", backgroundColor: "white"}}>
    <Flex className="topBar" style={{justifyContent:"space-between"}} >
    <Flex>
    <UnorderedList className="topBar-left">
        <ListItem>Offers</ListItem>
        <ListItem>FanBook</ListItem>
        <ListItem>TriBe MemberShip</ListItem>
    </UnorderedList>
    </Flex>
    <Flex >
    <UnorderedList className='topBar-right'>
        <ListItem>Contact Us</ListItem>
        <ListItem>Track Order</ListItem>
    </UnorderedList>
    </Flex>
    </Flex>

    <Flex className='navBar' style={{justifyContent:"space-between"}}>
    <Flex
              style={{
                overflow: "hidden",
                alignItems: "center",
                height: "60px",
                maxWidth:"40rem"
              }}>
              <NavLink to="/">
                <Flex>
                  <img src={logo} alt="logo" className="imageStyle" />
                </Flex>
              </NavLink>
              <div
                onMouseEnter={() => handleMouseEnter("Men")}
                onMouseLeave={handleMouseLeave}
                className="menu-container">
                <NavLink to={`/categories/men`} className="navLink">
                  <Text className="menuItem" style={{ margin: "0" }}>
                    MEN
                  </Text>
                </NavLink>
                {menuHover === "Men" && <OptionMen />}
              </div>

              <div
                onMouseEnter={() => handleMouseEnter("Women")}
                onMouseLeave={handleMouseLeave}
                className="menu-container">
                <NavLink to={`/categories/women`} className="navLink">
                  <Flex className="menuItem" style={{ marginRight: "0" }}>
                    WOMEN
                  </Flex>
                </NavLink>
                {menuHover === "Women" && <OptionWomen />}
              </div>

              <NavLink to="/MobileCover" className="navLink">
                <Flex className="menuItem">MOBILE COVERS</Flex>
              </NavLink>
            </Flex>
             <Flex>
        <UnorderedList className='navBar-right'>
           <Box style={{marginRight:"10px"}}><BiSearch className='icon'/><input type="search" placeholder='Search by product, category or collection' className='inputSearch'/></Box>
             <ListItem style={{fontSize:"20px"}}>|</ListItem>
              
              {isLoggedIn ?(
              <div><CiUser onClick={handleProfileClick} 
              style={{fontSize:"25px", marginRight:"15px"}}/>
              {dropmenu && (
                <ul className='profileOption'>
                    <li style={{backgroundColor:"#eee"}}>Hi,</li>
                    <NavLink to="/Account" style={{textDecoration:"none", cursor:"pointer", color:"black"}}>
                    <li>My Account</li>
                    </NavLink>
                    <NavLink to="/Wishlist" style={{textDecoration:"none", cursor:"pointer", color:"black"}}>
                    <li>My Wishlist</li>
                    </NavLink>
                    <NavLink to="/Orders" style={{textDecoration:"none", cursor:"pointer", color:"black"}}>
                    <li>My Orders</li>
                    </NavLink>
                    <NavLink to="/Wallet" style={{textDecoration:"none", cursor:"pointer", color:"black"}}>
                    <li>My Wallet</li>
                    </NavLink>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
              )}
              </div>
              ):(
              <>
            <NavLink to='/Login' style={{color:"black", textDecoration:"none"}}>
             <ListItem style={{marginTop:"5px"}}>Login</ListItem>
             </NavLink>
              </>)}
            
            {isLoggedIn ?(
            <>
            <NavLink to='/Wishlist' style={{color:"black"}}>
            <ListItem>
            <BsHeart style={{height:"20px", width:"20px", marginTop:"10px" }}/>
             </ListItem>
             </NavLink>
            </>
             ):(
              <NavLink to='/Login' style={{color:"black"}}>
            <ListItem>
            <BsHeart style={{height:"20px", width:"20px", marginTop:"10px" }}/>
            </ListItem>
             </NavLink>
             )}
             <NavLink to='/Cart' style={{color:"black"}}>
            <ListItem>
            <BsBag style={{marginTop:"10px", fontSize:"20px"}}/>
            </ListItem>
            </NavLink>

            <ListItem><img src={flag} alt="flagIcon" className='flag' style={{marginTop:"5px"}} /></ListItem>
        </UnorderedList>
        </Flex>
    </Flex>
    <hr style={{marginTop:"-5px"}}/>
    </div>
    )}
    </>
  )
}
