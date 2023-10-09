import { Container, Box, Flex, UnorderedList, ListItem} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {BsHeart} from 'react-icons/bs';
import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem } from '@chakra-ui/react';


export default function Men() {
  const[data, setData] = useState([]);



  const getClothes=async()=>{
       try{
        const storedData = localStorage.getItem("getClothes")
        if(storedData){
          const getData = JSON.parse(storedData);
          const parseData = getData.getClothes;
          console.log("data", parseData) 
          setData(parseData)

        }else{
          const response = await(fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=100",
          {
            method: 'GET',
                headers: {
                    'projectId': "8jf3b15onzua",
                }
              }))
          const data = await response.json();
          console.log(data);
          const result = data.data;
          console.log("result", result);
          setData(result);
         

          localStorage.setItem("getClothes", JSON.stringify({"getClothes": result}))
        }} catch(error){console.error("error")}
  }

  useEffect(()=>{
    getClothes();
  }, []);

  return (
    <Box>
      <Flex className='heading1'>
      <NavLink to="/" style={{textDecoration:"none", color:"black"}}>
      <Container className='heading2'>Home</Container>
      </NavLink>
      <Container className='heading2'>/</Container>
      <Container className='heading2'>Men Clothing</Container>
      </Flex>
   

    <Box>
      <Flex>
     <h2 className='heading3' >Men Clothing</h2>
     <div style={{marginLeft:"20px", fontSize:"30px", color:"gray", marginTop:"40px"}}>(50)</div>  
     </Flex>
     <hr className='ruler'/>
    </Box>
    
    <Flex>
    <Container style={{width:"150px", height:"50px"}}>
    <Flex>
      <h3 className='heading4' style={{marginRight:"950px"}}>FILTERS</h3>
      <Flex>
      <div className='sort' >SORT BY</div>
      <div style={{marginLeft:"70px", marginTop:"50px"}}>
      <select style={{border: "none"}}>
        <option value="1">Popular</option>
        <option value="2">Low to High</option>
        <option value="3">High to Low</option>
      </select>
      </div>
      </Flex>
      </Flex>
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
      <li>T-Shirt</li>
      <li>Shirt</li>
      <li>Boxer</li>
      <li>Vest</li>
      <li>Jeans</li>
      <li>Shorts</li>
      <li>Joggers</li>
      <li>Track Pants</li>
      <li>Pyjama</li>
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
        <li>OFFICIAL RICK AND MORTY MERCHANDISE</li>
        <li>OFFICIAL DISNEY MERCHANDISE</li>
        <li>BEWAKOOF X STREETWEAR</li>
        <li>OFFICIAL NARUTO MERCHANDISE</li>
        <li>OFFICIAL MINIONS MERCHANDISE</li>
        <li>OFFICIAL HARRY POTTER MERCHANDISE</li>
        <li>OFFICIAL DC COMICS MERCHANDISE</li>
        <li>OFFICIAL MARVEL MERCHANDISE</li>
        <li>OFFICIAL TOM & JERRY MERCHANDISE</li>
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
         color
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
    </Container>

    <Container className='dataInfo'>
       {data.slice(0, 50).map((item, index)=>(
        <Box className='dataStyle' key={index}>
         <img className='dataImage' src={item.displayImage}></img>
         <Flex>
         <h3 className='dataBrand'>{item.brand}</h3>
         <BsHeart style={{height:"20px", width:"20px", color:"grey", marginLeft:"15px"}}/>
         </Flex>
         <div className='dataTitle' style={{color:"rgb(115, 115, 115)"}}>{item.name}</div>
         <div className='dataPrice' style={{fontSize:"20px"}}>₹{item.price}</div>
         {/* <div className='dataFabric' >{item.fabric}</div> */}
         </Box>
       )
       )}
       
      </Container>
      </Flex>
    </Box>
  )
}

