import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWatchlist } from '../Action';

export default function Wishlist() {

    const dispatch = useDispatch();
    const wishlist = useSelector((state)=> state.data.wishlist);
    console.log(wishlist);

    useEffect(()=>{
        dispatch(getWatchlist());
    },[dispatch])
  
    return(
        <>
        <h1>Wishlist</h1>
        {wishlist.map((item, index) => (
    <div key={index}>
      {/* Render wishlist item information here */}
      <p>{item.name}</p>
      <p>{item.price}</p>
      </div>
        ))}
        </>
    )
}
