import React from "react";
import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem, Box } from '@chakra-ui/react';



const Filter=()=>{
const handleCategorySelect = (category)=>{
 
};


    return(
        <>
  <Accordion allowToggle className='accordian'>
  <AccordionItem>
    <h2>
      <AccordionButton className='accordianButton'>
        <Box as="span" flex='1' textAlign='left'>
          Category
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <ul className='accordianList'>
      <li  onClick={() => handleCategorySelect("tshirt")}>T-Shirt</li>
      <li  onClick={() => handleCategorySelect("shirt")}>Shirt</li>
      <li  onClick={() => handleCategorySelect("jeans")}>Jeans</li>
      <li  onClick={() => handleCategorySelect("shorts")}>Shorts</li>
      <li  onClick={() => handleCategorySelect("joggers")}>Joggers</li>
      <li  onClick={() => handleCategorySelect("trackPants")}>Track Pants</li>
      <li  onClick={() => handleCategorySelect("pyjama")}>Pyjama</li>
      <li>Trousers</li>
      <li>Hoodies</li>
      <li>Sweatshirt</li>
      <li>Casual Pants</li>
      <li>Jacket</li>
     </ul>
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>
  <AccordionItem>
    <h2>
      <AccordionButton className='accordianButton'>
        <Box as="span" flex='1' textAlign='left'>
          Sizes
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <ul className='accordianList'>
        <li>XS</li>
        <li>S</li>
        <li>M</li>
        <li>L</li>
        <li>XL</li>
        <li>2XL</li>
        <li>3XL</li>
        <li>4XL</li>
      </ul>
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>
  <AccordionItem>
    <h2>
      <AccordionButton className='accordianButton'>
        <Box as="span" flex='1' textAlign='left'>
          Brands
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <ul  className='accordianList'>
        <li>Bewakoof®</li>
        <li>Official Rick And Morty Merchandise</li>
        <li>Official Disney Merchandise</li>
        <li>Bewakoof X Streetwear</li>
        <li>Official Naruto Merchandise</li>
        <li>Official Minions Merchandise</li>
        <li>Official Harry Potter Merchandise</li>
        <li>Official DC Comics Merchandise</li>
        <li>Official Marvel Merchandise</li>
        <li>Official Tom & Jerry Merchandise</li>
        <li>Redwolf</li>
        <li>Rigo</li>
      </ul>
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>
  <AccordionItem>
    <h2>
      <AccordionButton className='accordianButton'>
        <Box as="span" flex='1' textAlign='left'>
         Color
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <button className='listButton' style={{backgroundColor:"black"}}></button>
      <button className='listButton' style={{backgroundColor:"blue"}}></button>
      <button className='listButton' style={{backgroundColor:"white", border:"1px solid rgb(203, 201, 201)"}}></button>
      <button className='listButton' style={{backgroundColor:"green"}}></button>
      <button className='listButton' style={{backgroundColor:"grey"}}></button>
      <button className='listButton' style={{backgroundColor:"brown"}}></button>
      <button className='listButton' style={{backgroundColor:"red"}}></button>
      <button className='listButton' style={{backgroundColor:"pink"}}></button>
      <button className='listButton' style={{backgroundColor:"purple"}}></button>
      <button className='listButton' style={{backgroundColor:"yellow"}}></button>
      <button className='listButton' style={{backgroundColor:"orange"}}></button>
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>
  <AccordionItem>
    <h2>
      <AccordionButton className='accordianButton'>
        <Box as="span" flex='1' textAlign='left' >
          Ratings
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <ul className='accordianList'>
      <li>4.5 and above</li>
      <li>4 and above</li>
      <li>3.5 and above</li>
      <li>3 and above</li>
      <li>2.5 and above</li>
      <li>2 and above</li>
      <li>1.5 and above</li>
      <li>1 and above</li>
    </ul>
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>
  <AccordionItem>
    <h2>
      <AccordionButton className='accordianButton' >
        <Box as="span" flex='1' textAlign='left'>
          Sort By
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <ul className='accordianList'>
      <li>Popular</li>
      <li>New</li>
      <li>Price: High to Low</li>
      <li>Price: Low to High</li>
    </ul>
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>
</Accordion>
        </>
    )
}
export default Filter;