import React from 'react';
import  { useEffect, useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillHeart } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';
import { Container, Box, Flex} from '@chakra-ui/react';
import { FETCH_DATA, addWishlist, removeWishlist } from '../Action';
import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem} from '@chakra-ui/react';

export default function BrandCategories(){
    const{gender, special} = useParams();
    console.log(gender, special);

    const[brand, setBrand] = useState([]);
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

    const getData = useSelector((store)=>{
        console.log(store, "store debug");
        return store.data;
    })

    useEffect(()=>{ 
    if( gender && special && getData){
        console.log("Filtering data for special:", special);
        setBrand(getData?.data?.data?.filter((item) => item.brand.toLowerCase() === special && item.gender.toLowerCase()===gender))
    }
     }, [gender, special, getData])
    console.log("brand", brand)

    const filteredData = brand.filter((item)=>{
        if(
          (!selectedColor || item.color === selectedColor) &&
          (!selectedPopularity || item.sellerTag === selectedPopularity)
        ){
          return true;
        }
        return false;
      }) 

      const handleColorFilter = (brand) => {
        if (selectedColor === brand) {
          setSelectedColor(null);
        } else {
          setSelectedColor(brand);
        }
      }
      const handlePopularityFilter = (brand) => {
        if (selectedPopularity === brand) {
          setSelectedPopularity(null);
        } else {
          setSelectedPopularity(brand);
        }
      }

      const handleAddToWishList =(productId)=>{
        console.log("handlewishlist being called", productId)
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
        if (brand) {
          const updatedData = brand.map((item) => {
            const inWishList = wishlist && wishlist[item._id]
            return { ...item, inWishlist: inWishList };
          });
          setBrand(updatedData);
        }
      }, [wishlist]);
    
  

  return (
    <Box>
    <Flex className='heading1'>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <Container className='heading2'>Home</Container>
      </Link>
      <Container className='heading2'>/</Container>
      <Container className='heading2'>Special Clothing</Container>
    </Flex>

    <Box>
        <Flex>
          <h2 className='heading3'>Special Clothing</h2>
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
          <Accordion allowToggle style={{marginLeft:"30px", width:"250px"}}>
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
     {Array.from(new Set(brand.map(item => item.color)).values()).map((color, index) => (
          <button key={index} onClick={() => handleColorFilter(color)}  className={selectedColor === color ? 'activebrand' : ''}
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
     {Array.from(new Set(brand.map(item => item.sellerTag)).values()).map((sellerTag, index) => (
          <li key={index} onClick={() => handlePopularityFilter(sellerTag)}  className={selectedPopularity === sellerTag ? 'activebrand' : ''}>
            {sellerTag.charAt(0).toUpperCase() + sellerTag.slice(1)}</li>
        ))}
     </ul>
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>

  </Accordion>
        </Container>

    <Container className='dataInfo' style={{
         display: "grid",
         gridColumn: "repeat(3, 1fr)",
         gap: "25px",
         marginTop: "100px",
         height: "100%",
         marginLeft: "12%",
         marginRight: "40px",
    }}>
          {filteredData.map((item, index) => (
            <Box className='dataStyle' key={index}>
              <Link to={`/product/${item._id}`}>
                <img className='dataImage' src={item.displayImage}></img>
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
                  </Box>
                 
          ))}
        </Container>
        </Flex>
       
        </Box>
  )
}

