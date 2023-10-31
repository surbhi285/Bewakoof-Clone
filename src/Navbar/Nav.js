import React, { useState, useEffect } from 'react'
import logo from '../Images/logo.webp';
import flag from '../Images/flag.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from  '@fortawesome/free-solid-svg-icons';
import {Flex, UnorderedList, ListItem, Text} from '@chakra-ui/react'
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
        //console.log('handleProfileClick is triggered');
        //console.log('isLoggedIn:', isLoggedIn);
        setDropmenu(!dropmenu);    
    }

    const handleLogout =() =>{
        dispatch(LOGOUT()); // Dispatch the logout action
        setDropmenu(false);
        //console.log('isLoggedIn:', isLoggedIn);
    }
     
    useEffect(()=>{
        const handleResize = () => {
          setSmallerScreen(window.innerWidth < 1000);
          if(window.innerWidth<1000){
            // console.log("helloo");
            // console.log("innerwidth",window.innerWidth);
            // console.log("width",window.width);
          }
          
        };
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      },[])
   
    
  return (
    <>
    {smallerScreen ? (
      <>
      <ResNav />
      {/* {console.log(window.innerWidth)}
      {console.log(smallerScreen)} */}
      </>
    ):(
    <div>
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
                border:"1px solid red",
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
             <Flex style={{border:"1px solid green"}}>
        <UnorderedList className='navBar-right'>
            <ListItem className='navLi'><FontAwesomeIcon icon ={faSearch} style={{color:"#b9b3b3", marginTop:"12px", paddingLeft:"10px"}}/><input type="search" placeholder='Search by product, category or collection' className='inputSearch'/></ListItem>
             <ListItem style={{fontSize:"25px", marginTop:"5px"}}>|</ListItem>
              
              {isLoggedIn ?(
              <div><CiUser onClick={handleProfileClick} 
              style={{fontSize:"25px", marginTop:"12px", marginRight:"15px"}}/>
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
             <ListItem style={{marginTop:"15px"}}>Login</ListItem>
             </NavLink>
              </>)}
            
            <NavLink to='/Wishlist' style={{color:"black"}}>
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
    </Flex>
    <hr/>
    </div>
    )}
    </>
  )
}
