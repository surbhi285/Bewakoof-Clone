import React from 'react'
import { Container, Spacer } from '@chakra-ui/react'
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import loginPage from '../Images/loginPage.png'


export default function Login(){

  

  return (
    <div>
    <img src={loginPage} alt="Welcome" style={{width:"50%"}} />
    <Container>
    <h1 className='login'>Log in / Sign up</h1>
    <h5 className='tag'>for latest trends, exciting offers and everything Bewakoof® !</h5>
    
    <input placeholder='Enter Email ID' type='text' className='enterEmail'/>
    <input placeholder='Enter Password' type='password' className='enterEmail'/>
    <Spacer/>
    <button className='LogButton'>CONTINUE</button>
     
    
    <div className="registerButton">Not Register?
    <NavLink to ="/SignUp" style={{textDecoration:"none"}}>
    <span style={{color:'#42a2a2', fontWeight:"Bold"}}> SIGN UP</span>
    </NavLink>
    </div>
    </Container>
    
    </div>
    
   )
}
