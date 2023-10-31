import { Container, Box, Flex, Text} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams, Link } from 'react-router-dom';
import {BsHeart} from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_WISHLIST, FETCH_DATA,  REMOVE_FROM_WISHLIST, addWishlist, removeWishlist} from '../Action';
import noAvailable from '../Images/noAvailable.jpg';
import bewa from'../Images/bewa.png';

export default function Men() {
  const {id} = useParams();
  //console.log(id);

  const getData = useSelector((store)=>{
  console.log(store, "store debug");
  return store.data;
  })



  const [genderData, setGenderData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPopularity, setSelectedPopularity] = useState(null);
  const [inWishList, setInWishlist] = useState({});
  
  const dispatch = useDispatch();
  const wishlist = useSelector((store)=> store.data.wishlist);
  const isLoggedIn = useSelector((store)=>store.user.isLoggedIn)
  console.log(wishlist);
 

   useEffect(()=>{
    dispatch(FETCH_DATA());
   },[])
   
  useEffect(()=>{
  if(id && getData){
  setGenderData(getData?.data?.data?.filter((item) => item.gender.toLowerCase() === id))
  }
   }, [id, getData])
  //  //console.log(genderData, "gender");

  const filteredData = genderData?.filter((item)=>{
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

  const handleCategoryFilter = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  }
  const handleColorFilter = (category) => {
    if (selectedColor === category) {
      setSelectedColor(null);
    } else {
      setSelectedColor(category);
    }
  }
  const handleBrandFilter = (category) => {
    if (selectedBrand=== category) {
      setSelectedBrand(null);
    } else {
      setSelectedBrand(category);
    }
  }
  const handlePopularityFilter = (category) => {
    if (selectedPopularity === category) {
      setSelectedPopularity(null);
    } else {
      setSelectedPopularity(category);
    }
  }

const handleAddToWishList =(productId)=>{
  // console.log("handlewishlist being called", productId)
 if(isLoggedIn){
  if(inWishList[productId]){
    dispatch(removeWishlist(productId));
    setInWishlist((prevState)=>({
      ...prevState,
      [productId]: false,
    }));
  }else{
    dispatch(addWishlist(productId));
    setInWishlist((prevState)=>({
      ...prevState,
      [productId]: true,
    }));
       }
    }
}

useEffect(()=>{
  if (genderData) {
    const updatedData = genderData.map((item) => {
      const inWishList = wishlist && wishlist[item._id]
      return { ...item, inWishlist: inWishList };
    });
    setGenderData(updatedData);
  }
}, [wishlist]);


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
          <div style={{ marginLeft: "20px", fontSize: "30px", color: "gray", marginTop: "40px" }}>({filteredData.length})</div>
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
          <li key={index} onClick={() =>handleCategoryFilter(subCategory)}  className={selectedCategory === subCategory ? 'activeCategory' : ''}>
            {subCategory?.charAt(0).toUpperCase() + subCategory?.slice(1)}</li>
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
          <li key={index} onClick={() => handleBrandFilter(brand)}  className={selectedBrand === brand ? 'activeCategory' : ''}>
            {brand?.charAt(0).toUpperCase() + brand?.slice(1)}</li>
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
          <button key={index} onClick={() => handleColorFilter(color)}  className={selectedColor === color ? 'activeCategory' : ''}
         style={{ backgroundColor: color, border:"1px solid grey", width: "30px", height: "30px", borderRadius: "10px", marginRight: "10px",marginBottom: "8px"}}>
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
          <li key={index} onClick={() => handlePopularityFilter(sellerTag)}  className={selectedPopularity === sellerTag ? 'activeCategory' : ''}>
            {sellerTag?.charAt(0).toUpperCase() + sellerTag?.slice(1)}</li>
        ))}
     </ul>
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>

  </Accordion>
        </Container>
        {filteredData.length>0 ? (
        <Container className='dataInfo'>
          {filteredData.map((item, index) => (
            <Box className='dataStyle' key={index}>
              <Link to={`/product/${item._id}`}>
               <img className='dataImage' src={item.displayImage ? item.displayImage : noAvailable} alt="image"/>
              </Link>
              <Flex>
                <h3 className='dataBrand'>{item.brand}</h3>
                {isLoggedIn ? (
                  <>
                {inWishList[item._id] ? (
                 <AiFillHeart style={{ height: "20px", width: "20px", color:"red", marginLeft: "15px" }} 
                 onClick={()=> handleAddToWishList(item._id)}/>
                ):(
                <BsHeart style={{ height: "20px", width: "20px", color:"grey", marginLeft: "15px" }} 
                onClick={()=> handleAddToWishList(item._id)}/>
                )}
                </>
                ):(
                  <>
                  <Link to ='/Login'>
                  <BsHeart style={{ height: "20px", width: "20px", color:"grey", marginLeft: "15px" }}/>
                  </Link>
                  </>
                )}
              </Flex>
              <div className='dataTitle' style={{ color: "rgb(115, 115, 115)" }}>{item.name}</div>
              <div className='dataPrice' style={{ fontSize: "20px" }}>₹{item.price}</div>
            </Box>
          )
          )}
        </Container>
        ):(
          <Box style={{marginLeft:"40%", marginTop:"8%"}}>
          <img src={bewa} alt="bewa" 
          style={{ borderRadius:"10px"}}/>
          <h5 style={{marginTop:"20px", paddingLeft:"30px", color:"gray"}}>Not Available Right Now.</h5>
          <Link to="/" style={{textDecoration:"none", color:"#fdd835", cursor:"pointer"}}>
          <h3 style={{marginLeft:"-1%", color:"#fdd835"}}>Stay Tuned! 
           Back To Shopping</h3>
           </Link>
          </Box>
        )}
      </Flex>
    </Box>
  )
}

