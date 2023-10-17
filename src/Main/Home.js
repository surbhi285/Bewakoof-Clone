import React from 'react'
import ImageSlider from './ImageSlider';
import { ListItem, UnorderedList, Flex, Box, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
    <Box className='image2'></Box>
    <Button className='button1'style={{marginRight:"450px"}}>Lets Try</Button>
    <Button className='button1' >SHOP NOW</Button>
    </Box>
    </>
  )
}
