import { Container, Box, Flex, Text, UnorderedList, ListItem} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams, Link } from 'react-router-dom';
import {BsHeart} from 'react-icons/bs';
import { AiFillHeart, AiOutlineDown } from 'react-icons/ai';
import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem, Spinner} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_WISHLIST, FETCH_DATA, addWishlist, removeWishlist} from '../Action';
import noAvailable from '../Images/noAvailable.jpg';
import bewa from'../Images/bewa.png';
import Footer from './Footer';

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
  const [selectedSize, setSelectedSize] = useState(null);
  const [inWishList, setInWishlist] = useState({});
  const[option, setOption] = useState(false)
  const [selectedSort, setSelectedSort] = useState(null);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  
  const dispatch = useDispatch();
  const wishlist = useSelector((store)=> store.data.wishlist);
  const isLoggedIn = useSelector((store)=>store.user.isLoggedIn)
  console.log(wishlist);
 
  const handleClick = ()=>{
  setOption(!option)
  }
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
      (!selectedPopularity || item.sellerTag === selectedPopularity) &&
      (!selectedSize || item.size.includes(selectedSize))
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
  const handleSizeFilter = (category) => {
    if (selectedSize === category) {
      setSelectedSize(null);
    } else {
      setSelectedSize(category);
    }
  }

  const handleSortChange = (e) => {
    const selectedSortOption = e.target.value;
    setSelectedSort(selectedSortOption);
    if(selectedSort===selectedSortOption){
      setSelectedSort(null);
    }else{
    if (selectedSortOption === "1") {
      const sortedByPopularity = [...filteredData].sort((a, b) => {
        if (a.sellerTag === "trending") {
          return -1;
        } else if (b.sellerTag === "trending") {
          return 1;
        }
        return 0;
      });
      setGenderData(sortedByPopularity);
     } else if (selectedSortOption === "2") {
      const sortedData = [...filteredData].sort((a, b) => a.price - b.price);
      setGenderData(sortedData);
    } else if (selectedSortOption === "3") {
      const sortedData = [...filteredData].sort((a, b) => b.price - a.price);
      setGenderData(sortedData);
    }
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



const allowedSizes = ["M", "S", "L", "XL", "XXL"];
const uniqueSizes = genderData.map(item => item.size).flat().filter(size => allowedSizes.includes(size));
const uniqueElements = [...new Set(uniqueSizes)];
// console.log(uniqueElements);


  return (
    <Box style={{marginTop:"6rem"}}>
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
        <hr className='ruler' style={{marginLeft:"30px", marginTop:"-10px"}}/>
      </Box>

      <Flex>
        <Container style={{ width: "150px", height: "50px" }}>
          <Flex>
            <h3 className='heading4' style={{ marginRight: "900px" }}>FILTERS</h3>
            <Flex>
              <div className='sort' >SORT BY</div>
              <div style={{display:"flex"}} onClick={handleClick}>
              <div style={{ marginLeft: "70px", marginTop: "50px", cursor:"pointer"}}> Popular </div>
              <div style={{ marginLeft: "40px", marginTop: "55px", cursor:"pointer"}}><AiOutlineDown /></div>
              {option && (
                <Box className='optionBox'>
                  <UnorderedList style={{paddingLeft:"0"}}>
                  <ListItem onClick={() => handleSortChange({ target: { value: "1" } })}  
                  style={{ color: selectedSort === "1" ? "#42A2A2" : "black" }}>Popular</ListItem>
                  <ListItem onClick={() => handleSortChange({ target: { value: "2" } })}
                   style={{ color: selectedSort === "2" ? "#42A2A2" : "black" }}>Price: Low to High</ListItem>
                  <ListItem onClick={() => handleSortChange({ target: { value: "3" } })}
                   style={{ color: selectedSort === "3" ? "#42A2A2" : "black" }}>Price: High to Low</ListItem>
                  </UnorderedList>
                </Box>
              )}
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
         style={{ backgroundColor: color, border:"1px solid grey", width: "30px", height: "30px", borderRadius: "10px", marginRight: "10px",marginBottom: "8px", cursor:"pointer"}}>
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

  <AccordionItem>
    <h2>
      <AccordionButton className='accordianButton'>
        <Box as="span" flex='1' textAlign='left'>
         Size
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <ul className='accordianList'>
     {uniqueElements.map((size, index)=>(
          <li key={index} onClick={() => handleSizeFilter(size)}  className={selectedSize === size ? 'activeCategory' : ''}>
            {size}</li>
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
                 <AiFillHeart style={{ height: "20px", width: "20px", color:"red", marginLeft: "5%", cursor:"pointer"  }} 
                 onClick={()=> handleAddToWishList(item._id)}/>
                ):(
                <BsHeart style={{ height: "20px", width: "20px", color:"grey", marginLeft: "5%", cursor:"pointer"  }} 
                onClick={()=> handleAddToWishList(item._id)}/>
                )}
                </>
                ):(
                  <>
                  <Link to ='/Login'>
                  <BsHeart style={{ height: "20px", width: "20px", color:"grey", marginLeft: "5%", cursor:"pointer" }}/>
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
      <div style={{marginTop:"70px"}}>
    <Footer/>
    </div>
  </Box>
  )
}

