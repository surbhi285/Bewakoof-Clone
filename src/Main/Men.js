import { Container, Box, Flex, filter} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams, Link } from 'react-router-dom';
import {BsHeart} from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_DATA, SET_FILTERS, addWishlist, removeWatchlist } from '../Action';

export default function Men() {
  const {id} = useParams();
  //console.log(id);

  const getData = useSelector((store)=>{
    //console.log(store, "store debug");
    return store.data;
  })



  const [genderData, setGenderData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPopularity, setSelectedPopularity] = useState(null);

  const dispatch = useDispatch();


   useEffect(()=>{
    dispatch(FETCH_DATA());
   },[])
   
  useEffect(()=>{
  if(id && getData){
  setGenderData(getData?.data?.data?.filter((item) => item.gender.toLowerCase() === id))
  }
   }, [id, getData])
  //  //console.log(genderData, "gender");

  const filteredData = genderData.filter((item)=>{
    if(
      (!selectedCategory || item.subCategory===selectedCategory) &&
      (!selectedBrand || item.brand===selectedBrand) &&
      (!selectedColor || item.color === selectedColor) &&
      (!selectedPopularity || item.sellerTag === selectedPopularity)
    ){
      return true;
    }
    return false;
  }) 
  //console.log(filteredData);
   
  const handleAddToWishList = (product)=>{
    dispatch(addWishlist(product));
    const updateData = genderData.map((item)=>{
      if(item._id===product){
        return{...item, inWishlist: true};
      }
      return item;
    })
    setGenderData(updateData);
  }

  const handleRemoveFromWishList = (product) => {
    dispatch(removeWatchlist(product));
    const updatedData = genderData.map((item) => {
        if (item._id === product) {
            return { ...item, inWishlist: false };
        }
        return item;
    });
    setGenderData(updatedData);
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
     <ul className='accordianList'>
     {Array.from(new Set(genderData.map(item => item.subCategory)).values()).map((subCategory, index) => (
          <li key={index} onClick={() => setSelectedCategory(subCategory)}  className={selectedCategory === subCategory ? 'activeCategory' : ''}>
            {subCategory.charAt(0).toUpperCase() + subCategory.slice(1)}</li>
        ))}
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
     <ul className='accordianList'>
     {Array.from(new Set(genderData.map(item => item.brand)).values()).map((brand, index) => (
          <li key={index} onClick={() => setSelectedBrand(brand)}  className={selectedBrand === brand ? 'activeCategory' : ''}>
            {brand.charAt(0).toUpperCase() + brand.slice(1)}</li>
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
    <ul className='accordianList'>
     {Array.from(new Set(genderData.map(item => item.color)).values()).map((color, index) => (
          <button key={index} onClick={() => setSelectedColor(color)}  className={selectedColor === color ? 'activeCategory' : ''}
         style={{ backgroundColor: color, border:"0.5px solid grey", width: "30px", height: "30px", borderRadius: "10px", marginRight: "10px",marginBottom: "8px", border: "none"}}>
          </button>
        ))}
     </ul>
     
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>
  <AccordionItem>
    <h2>
      <AccordionButton className='accordianButton'>
        <Box as="span" flex='1' textAlign='left'>
         Popularity
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <ul className='accordianList'>
     {Array.from(new Set(genderData.map(item => item.sellerTag)).values()).map((sellerTag, index) => (
          <li key={index} onClick={() => setSelectedPopularity(sellerTag)}  className={selectedPopularity === sellerTag ? 'activeCategory' : ''}>
            {sellerTag.charAt(0).toUpperCase() + sellerTag.slice(1)}</li>
        ))}
     </ul>
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>

  </Accordion>
        </Container>

        <Container className='dataInfo'>
          {filteredData.map((item, index) => (
            <Box className='dataStyle' key={index}>
              <Link to={`/product/${item._id}`}>
                <img className='dataImage' src={item.displayImage}></img>
              </Link>
              <Flex>
                <h3 className='dataBrand'>{item.brand}</h3>
                {item.inWishlist?(
                  <AiFillHeart style={{ height: "20px", width: "20px", color: "red", marginLeft: "15px" }} 
                  onClick={()=> handleRemoveFromWishList(item._id)}/>
                 
                ):(
                <BsHeart style={{ height: "20px", width: "20px", color: "grey", marginLeft: "15px" }} 
                onClick={()=> handleAddToWishList(item._id)}/>
                )}
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

