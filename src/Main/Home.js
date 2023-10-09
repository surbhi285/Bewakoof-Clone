import React from 'react'
import ImageSlider from './ImageSlider';
import { ListItem, UnorderedList, Flex, Box, Button } from '@chakra-ui/react';

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
    <Button className='button'style={{marginRight:"450px"}}>SHOP MEN</Button>
    <Button className='button' >SHOP WOMEN</Button>
    </Box>

     <Box>
    <Box className='image2'></Box>
    <Button className='button1'style={{marginRight:"450px"}}>Lets Try</Button>
    <Button className='button1' >SHOP NOW</Button>
    </Box>
    </>
  )
}
