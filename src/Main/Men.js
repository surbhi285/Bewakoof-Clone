import { Container, Box, Flex, filter} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams, Link } from 'react-router-dom';
import {BsHeart} from 'react-icons/bs';
import Filter from './Filter';
import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_DATA, addWishlist } from '../Action';

export default function Men() {
  const {id} = useParams();
  console.log(id);

  const getData = useSelector((store)=>{
    console.log(store, "store debug");
    return store.data;
  })


  const [genderData, setGenderData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const dispatch = useDispatch();


   useEffect(()=>{
    dispatch(FETCH_DATA());
   },[])
   
  useEffect(()=>{
  if(id && getData){
  setGenderData(getData?.data?.data?.filter((item) => item.gender.toLowerCase() === id))
  }
   }, [id, getData])
   console.log(genderData, "gender");

   const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredData = selectedFilter
    ? genderData.filter((item) => item[selectedFilter] === selectedFilter)
    : genderData;

    console.log(filteredData);
   
  const handleAddToWishList = (product)=>{
    dispatch(addWishlist(product));
  }

  return (
    <Box>
      <Flex className='heading1'>
        <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
          <Container className='heading2'>Home</Container>
        </NavLink>
        <Container className='heading2'>/</Container>
        <Container className='heading2'>{id === 'men' ? "Men Clothing" : "Women Clothing"}</Container>
      </Flex>


      <Box>
        <Flex>
          <h2 className='heading3'>{id === 'men' ? "Men Clothing" : "Women Clothing"}</h2>
          <div style={{ marginLeft: "20px", fontSize: "30px", color: "gray", marginTop: "40px" }}>({genderData.length})</div>
        </Flex>
        <hr className='ruler' />
      </Box>

      <Flex>
        <Container style={{ width: "150px", height: "50px" }}>
          <Flex>
            <h3 className='heading4' style={{ marginRight: "950px" }}>FILTERS</h3>
            <Flex>
              <div className='sort' >SORT BY</div>
              <div style={{ marginLeft: "70px", marginTop: "50px" }}>
                <select style={{ border: "none" }}>
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
      <AccordionButton className='accordianButton'  >
        <Box as="span" flex='1' textAlign='left'>
          Category
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <ul className='accordianList'   onClick={() => handleFilterChange('subCategory')}>
     {Array.from(new Set(genderData.map(item => item.subCategory)).values()).map((subCategory, index) => (
          <li key={index}>{subCategory.charAt(0).toUpperCase() + subCategory.slice(1)}</li>
        ))}
     </ul>
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>
  <AccordionItem>
    <h2>
      <AccordionButton className='accordianButton'  onClick={() => handleFilterChange('brand')}>
        <Box as="span" flex='1' textAlign='left'>
          Brands
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <ul className='accordianList'>
     {Array.from(new Set(genderData.map(item => item.brand)).values()).map((brand, index) => (
          <li key={index}>{brand.charAt(0).toUpperCase() + brand.slice(1)}</li>
        ))}
     </ul>
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>
  <AccordionItem>
    <h2>
      <AccordionButton className='accordianButton'  >
        <Box as="span" flex='1' textAlign='left'>
         Color
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <ul className='accordianList' onClick={() => handleFilterChange('Color')}>
     {Array.from(new Set(genderData.map(item => item.color)).values()).map((color, index) => (
          <button key={index} className='listButton'style={{ backgroundColor: color, border:"0.5px solid grey"}}></button>
        ))}
     </ul>
     
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>
  <AccordionItem>
    <h2>
      <AccordionButton className='accordianButton' onClick={() => handleFilterChange('Popularity')}>
        <Box as="span" flex='1' textAlign='left'>
         Popularity
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <ul className='accordianList'>
     {Array.from(new Set(genderData.map(item => item.sellerTag)).values()).map((sellerTag, index) => (
          <li key={index}>{sellerTag.charAt(0).toUpperCase() + sellerTag.slice(1)}</li>
        ))}
     </ul>
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>

  </Accordion>
        </Container>

        <Container className='dataInfo'>
          {genderData.map((item, index) => (
            <Box className='dataStyle' key={index}>
              <Link to={`/product/${item._id}`}>
                <img className='dataImage' src={item.displayImage}></img>
              </Link>
              <Flex>
                <h3 className='dataBrand'>{item.brand}</h3>
                <BsHeart style={{ height: "20px", width: "20px", color: "grey", marginLeft: "15px" }} 
                onClick={()=> handleAddToWishList(item)}/>
              </Flex>
              <div className='dataTitle' style={{ color: "rgb(115, 115, 115)" }}>{item.name}</div>
              <div className='dataPrice' style={{ fontSize: "20px" }}>₹{item.price}</div>
            </Box>
          )
          )}

        </Container>
      </Flex>
    </Box>
  )
}

