import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWatchlist, removeWishlist } from '../Action';
import {Box, Button, Container, Flex, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {RxCrossCircled} from 'react-icons/rx';
import {PiShoppingBagLight} from 'react-icons/pi';
import wishImage from '../Images/wishImage.png';

export default function Wishlist() {

    const dispatch = useDispatch();
    const wishlist = useSelector((state)=> state.data.wishlist);
    //console.log(wishlist);

    useEffect(()=>{
        dispatch(getWatchlist());
    },[dispatch])

    const handleRemoveItem =(itemId)=>{
        //console.log(itemId)
        dispatch(removeWishlist(itemId));
        dispatch(getWatchlist());
    }

   
    return(
        <>
        <h1 style={{marginLeft: "50px"}}>Wishlist</h1>
       <Container style={{display: "flex"}}>    
       {wishlist?.data?.items && wishlist.data.items.length>0 ?(
       wishlist?.data?.items?.map((item, index) => (
       <Box className='wishlistData' key={index}>
        <Container>
       <Link to={`/product/${item.products._id}`}>   
        <img className ="wishlistImage" src={item.products.displayImage}></img>
        </Link>
        <RxCrossCircled  onClick={()=>handleRemoveItem(item.products._id)}
        style={{position: "absolute", marginLeft:"-20px", marginTop:"5px", borderRadius:"50%", 
        backgroundColor: "white", color: "black", cursor:"pointer"}}/>
        </Container>
        <Flex>
        {/* <h3>{item.products.brand}</h3>   */}
        </Flex>
        <div className='wishTitle'  style={{ color: "rgb(115, 115, 115)"}}>{item.products.name}</div>
        <div className='wishdata' style={{ fontSize: "20px", marginLeft:"20px" }}>₹{item.products.price}</div>
        <Button className='addbag'><PiShoppingBagLight style={{ color: "#207bb4", marginRight:"10px"}}/>ADD TO BAG</Button>
        </Box>
        ))
       ):(
        <Flex style={{justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <img src={wishImage} alt="wishlist" style={{marginLeft:"34rem", width:"25%"}} />
            <Text style={{marginLeft:"70%", marginTop:"0",fontWeight:"bold"}}>Hey! Your wishlist is empty.</Text>
            <Text style={{marginLeft:"80%", marginTop:"0", width:"19rem", color:"#8f98a9"}}>
            Save Your favourites here and make them your soon!</Text>
            <Link to='/' style={{marginLeft:"30%"}}>
            <Button 
            style={{marginLeft:"75%", width:"13rem", height:"2.5rem", fontWeight:"bold",fontSize:"18px",
            color:"white", backgroundColor:"rgb(66, 162, 162)", borderRadius:"5px", border:"1px solid rgb(66, 162, 162)", cursor:"pointer"}}>
            SHOP NOW</Button>
            </Link>
        </Flex>
       )
    }
        </Container>
        
        </>
    )
}
