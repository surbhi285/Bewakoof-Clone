import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import airoplane from '../Images/airoplane.webp'

export default function ContactUs() {
    const[search, setSearch] = useState('');
    const [showMessage, setShowMessage] = useState(false);

  const handleclick=(event)=>{
       if(event.key==='Enter'){
      setShowMessage(true);
      setSearch('');
       }
  }
  return (
    <div style={{marginTop:"6rem", marginLeft:"40px"}}>
        <Box style={{backgroundColor:"#fafafa", height:"350px", marginRight:"30px"}}>
        <h5 style={{fontSize:"25px", paddingLeft:"30px", paddingTop:"30px"}}>
        Contact Us</h5>
        <hr className='ruler' style={{marginTop:"-40px", marginRight:"88%", marginLeft:"30px"}}/>   
        <Text style={{fontSize:"30px", paddingLeft:"50px"}}>What's your query about ?</Text>
        <Flex style={{justifyContent:"space-between"}}>
        <Flex style={{flexDirection:"column"}}>
        <input placeholder='Search your Query here' type='text' className='Inputicon' value={search} 
        onChange={(e)=>setSearch(e.target.value)} onKeyDown={handleclick}/>
          {showMessage && (
          <Text style={{ fontWeight: '500', paddingTop: '50px', marginLeft: '50px', color:"#42A2A2" }}>
            We are trying to resolve your query!!! 
          </Text>
        )}
        </Flex>
        <img src={airoplane} style={{marginTop:"-50px", width:"350px", paddingRight:"80px"}}/>
        </Flex>
        </Box>  
        <Box style={{backgroundColor:"#fafafa", height:"350px", marginRight:"30px"}}>
        <Text style={{fontWeight:"500", paddingTop:"50px", marginLeft:"30px"}}>Corporate Address:</Text>
        <Text style={{marginLeft:"30px"}}>Bewakoof Brands Pvt. Ltd.</Text>
        <Text style={{marginTop:"-15px",marginLeft:"30px"}}>WeWorks Chromium,</Text>
        <Text style={{marginTop:"-15px",marginLeft:"30px"}}>3rd Floor, B114-116,</Text>
        <Text style={{marginTop:"-15px", marginLeft:"30px"}}>Next to L&T Flyover, Jogeshwari Vikhroli Link Road,</Text>
        <Text style={{marginTop:"-15px",marginLeft:"30px"}}>Andheri (East) Mumbai, Maharashtra, 400076</Text>
        <Text style={{marginLeft:"30px", marginTop:"50px"}}>You can reach us at care@bewakoof.com with all queries. We do not have a Bewakoof customer care number.</Text>
        </Box>
    </div>
  )
}
