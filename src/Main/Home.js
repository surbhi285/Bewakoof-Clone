import React from 'react'
import ImageSlider from './ImageSlider';
import {useState, useEffect} from 'react';
import { ListItem, UnorderedList, Flex, Box, Button, Text } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import Footer from './Footer';
import tshirt from '../Images/tshirt.png';
import shorts from '../Images/shorts.png';
import joggers from '../Images/joggers.png';
import pyjama from '../Images/pyjama.png';
import shirts from '../Images/shirts.png';
import oversized from '../Images/oversized.png';
import women1 from '../Images/women1.png';
import women2 from '../Images/women2.png';
import women3 from '../Images/women3.png';
import women4 from '../Images/women4.png';
import women5 from '../Images/women5.png';
import women6 from '../Images/women6.png';
import bewakoof7 from '../Images/bewakoof7.png';
import bewakoof9 from '../Images/bewakoof9.png';
import bewakoof8 from '../Images/bewakoof8.png';
import men from '../Images/men.jpg';
import women from '../Images/women.jpg';
import accessories from '../Images/accessories.jpg';
import winter from '../Images/winter.jpg';
import merch from '../Images/merch.jpg';
import shop1 from '../Images/shop1.webp';
import shop2 from '../Images/shop2.webp';
import shop3 from '../Images/shop3.jpg';
import shop4 from '../Images/shop4.webp';
import shop5 from '../Images/shop5.webp';
import shop6 from '../Images/shop6.jpg';
import shop7 from '../Images/shop7.webp';
import shop8 from '../Images/shop8.webp';
import shop9 from '../Images/shop9.webp';
import shop10 from '../Images/shop10.webp';

export default function Home() {
  const [smallerScreen,  setSmallerScreen] = useState(window.innerWidth < 1000);

  useEffect(()=>{
    const handleResize = () => {
      setSmallerScreen(window.innerWidth < 1000);
      
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
    <Box>
     <Flex style={{marginTop:"20px", gap:"20px", overflowX: 'auto', whiteSpace: 'nowrap', paddingLeft:"10px"}}>
    <Box>
    <img src={men} style={{width:"160px", height:"200px", borderRadius:"30px"}}/>
    <Text style={{paddingLeft:"50px", fontWeight:"bold", fontSize:"20px"}}>Men</Text>
    </Box>
    <Box>
    <img src={women} style={{width:"160px", height:"200px", borderRadius:"30px"}}/>
    <Text style={{paddingLeft:"50px", fontWeight:"bold", fontSize:"20px"}}>Women</Text>
    </Box>
    <Box>
    <img src={accessories} style={{width:"160px", height:"200px", borderRadius:"30px"}}/>
    <Text style={{paddingLeft:"30px", fontWeight:"bold", fontSize:"20px"}}>Accessories</Text>
    </Box>
    <Box>
    <img src={winter} style={{width:"160px", height:"200px", borderRadius:"30px"}}/>
    <Text style={{paddingLeft:"30px", fontWeight:"bold", fontSize:"20px"}}>WinterWear</Text>
    </Box>
    <Box>
    <img src={merch} style={{width:"160px", height:"200px", borderRadius:"30px"}}/>
    <Text style={{paddingLeft:"30px", fontWeight:"bold", fontSize:"20px"}}>OfficialMerch</Text>
    </Box>
    </Flex>
    <ImageSlider />
    <Box style={{marginTop:"30px"}}>
    <Text style={{fontWeight:"bolder", fontSize:"25px",textAlign:"center" }}>
    TRENDING CATEGORIES</Text>
    <Box>
    <Link to="/subcategories/men/tshirt">
    <img src={shop3} style={{minWidth:"95%", maxWidth:"50%", borderRadius:"10px", paddingLeft:"20px", paddingRight:"20px"}}/>
    </Link>
    {/* <Flex style={{ alignItems:"center", justifyContent:"space-evenly", marginTop:"20px", paddingLeft:"-50px", paddingRight:"40px"}}>
    <Link to="/subcategories/men/jeans">
    <img src={shop1} style={{minWidth:"120%", height:"200px", borderRadius:"30px", border:"1px solid red"}}/>
    </Link>
    <Link to="/subcategories/men/hoodies">
    <img src={shop2} style={{minWidth:"120%", height:"200px", borderRadius:"30px",}}/>
    </Link>
    </Flex>
    <Flex style={{gap:"60px", alignItems:"center", justifyContent:"center", marginTop:"20px", paddingLeft:"-50px", paddingRight:"40px"}}>
    <Link to="/subcategories/men/sweater">
    <img src={shop4} style={{width:"120%", height:"200px", borderRadius:"30px"}}/>
    </Link>
    <Link to="/subcategories/men/joggers">
    <img src={shop5} style={{width:"120%", height:"200px", borderRadius:"30px"}}/>
    </Link>
    </Flex>
    </Box>
    <Box style={{marginTop:"20px"}}>
    <Link to="/subcategories/women/tshirt">
    <img src={shop6} style={{width:"90%", height:"400px", borderRadius:"30px", marginLeft:"20px", marginRight:"40px"}}/>
    </Link>
    <Flex style={{gap:"60px", alignItems:"center", justifyContent:"center", marginTop:"20px", paddingLeft:"-50px", paddingRight:"40px"}}>
    <Link to="/subcategories/women/jeans">
    <img src={shop7} style={{width:"120%", height:"200px", borderRadius:"30px"}}/>
    </Link>
    <Link to="/subcategories/women/hoodies">
    <img src={shop8} style={{width:"120%", height:"200px", borderRadius:"30px",}}/>
    </Link>
    </Flex>
    <Flex style={{gap:"60px", alignItems:"center", justifyContent:"center", marginTop:"20px", paddingLeft:"-50px", paddingRight:"40px"}}>
    <Link to="/subcategories/women/sweater">
    <img src={shop9} style={{width:"120%", height:"200px", borderRadius:"30px"}}/>
    </Link>
    <Link to="/subcategories/women/joggers">
    <img src={shop10} style={{width:"120%", height:"200px", borderRadius:"30px",}}/>
    </Link>
    </Flex> */}
    </Box>
    </Box>
    </Box>
    </>
    ):(
    <div>
    <Flex>
      <UnorderedList className='lowerBar'>
        <ListItem>LIVE NOW</ListItem>
        <ListItem>MEN</ListItem>
        <ListItem>WOMEN</ListItem>
        <ListItem>ACCESSORIES</ListItem>
        <ListItem>BWKF X MINIONS</ListItem>
        <ListItem>BEWAKOOF AIR</ListItem>
        <ListItem>OFFICIAL MARCH</ListItem>
        <ListItem>PLUS SIZE</ListItem>
      </UnorderedList>
    </Flex>
    <Box>
        <ImageSlider />
    </Box>
    <Box>
    <Box className='image1'></Box>
    <NavLink to="/Men" style={{textDecoration:"none"}}>
    <Button className='button'style={{marginRight:"450px"}}>SHOP MEN</Button>
    </NavLink>
    <NavLink to="/Women" style={{textDecoration:"none"}}>
    <Button className='button'>SHOP WOMEN</Button>
    </NavLink>
    </Box>
    <Box>
    <Flex className='image2'>
    <Link to="/subcategories/men/tshirt">
    <img src={bewakoof7} alt="bewakoof" style={{width:"100%"}}/>
    </Link>
    <Link to="/subcategories/men/joggers">
    <img src={bewakoof9} alt="bewakoof" style={{width:"100%"}}/>
    </Link>
    </Flex>
    </Box>
    <Box style={{marginLeft:"50px", marginBottom:"280px"}}>
      <h3 style={{paddingLeft:"40%"}}>TRENDING CATEGORIES</h3>
      <Flex style={{marginBottom:"20px"}}>
        <Link to='/subcategories/men/tshirt'>
        <img src={tshirt} alt="tshirt" style={{width:"80%", marginRight:"10px"}}/>
        </Link>
        <Link to='/subcategories/men/shorts'>
        <img src={shorts} alt="shorts" style={{width:"80%", marginRight:"10px"}} />
        </Link>
        <Link to='/subcategories/men/jogger'>
        <img src={joggers} alt="joggers" style={{width:"80%", marginRight:"10px"}} />
        </Link>
        <Link to='/subcategories/men/shirt'>
        <img src={shirts} alt="shirts" style={{width:"80%", marginTop:"-4px", marginRight:"10px"}} />
        </Link>
        <Link to='/subcategories/men/pyjamas'>
        <img src={pyjama} alt="pyjama" style={{width:"80%", marginRight:"10px"}} />
        </Link>
        <Link to='/subcategories/men/tshirt'>
        <img src={oversized} alt="oversized" style={{width:"80%", marginRight:"10px", marginTop:"-4px"}} />
        </Link>
      </Flex>
      <Flex>
       <Link to='/subcategories/women/tshirt'>
        <img src={women1} alt="tshirt" style={{width:"80%", marginRight:"15px"}}/>
        </Link>
        <Link to='/subcategories/women/shirt'>
        <img src={women2} alt="shorts" style={{width:"80%", marginRight:"15px", marginTop:"3px"}}/>
        </Link>
        <Link to='/subcategories/women/jogger'>
        <img src={women3} alt="joggers" style={{width:"80%", marginRight:"15px"}}/>
        </Link>
        <Link to='/subcategories/women/jumpsuit'>
        <img src={women4} alt="dress" style={{width:"80%", marginRight:"15px"}}/>
        </Link>
        <Link to='/subcategories/women/jogger'>
        <img src={women5} alt="pyjama" style={{width:"80%", marginRight:"15px"}}/>
        </Link>
        <Link to='/subcategories/women/tshirt'>
        <img src={women6} alt="oversized" style={{width:"80%", marginRight:"15px"}}/>
        </Link>
      </Flex>
    </Box>
    <Box>
    <Box className='image2'></Box>
    <Link to='/subcategories/men/sweater'>
    <img src={bewakoof8} alt="bewakoof" style={{width:"100%"}}/>
    </Link>
    </Box>
    <Footer/>
    </div>
    )}
    </>
  )
}
