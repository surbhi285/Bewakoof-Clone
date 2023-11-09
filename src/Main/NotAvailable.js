import React from 'react';
import notfound from '../Images/notfound.gif';
import {Button, Flex} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NotAvailable() {
  return (
    <div style={{marginTop:"5rem"}}>
      <Flex style={{justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <img src={notfound}  />
        <h3>OOOPSSS!!! WE ARE WORKING ON IT</h3>
        <h4 style={{marginTop:"-15px"}}>TILL THEN STAY TUNED</h4>
        <Link to='/'>
            <Button 
            style={{ width:"13rem", height:"2.5rem", fontWeight:"bold",fontSize:"18px",
            color:"white", backgroundColor:"rgb(66, 162, 162)", borderRadius:"5px", border:"1px solid rgb(66, 162, 162)", cursor:"pointer"}}>
            SHOP NOW</Button>
            </Link>
        </Flex>
    </div>
  )
}

