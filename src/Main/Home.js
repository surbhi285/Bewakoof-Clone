import React from 'react'
import ImageSlider from './ImageSlider';
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

export default function Home() {

  return (
    <>
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
    <Button className='button' >SHOP WOMEN</Button>
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
    </>
  )
}
