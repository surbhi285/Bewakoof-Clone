import React from 'react';
import  { useEffect, useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillHeart, AiOutlineDown } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';
import { Container, Box, Flex, Text, UnorderedList, ListItem} from '@chakra-ui/react';
import { FETCH_DATA, addWishlist, removeWishlist } from '../Action';
import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem} from '@chakra-ui/react';
import Footer from './Footer';

export default function Categories(){
    const{gender, id} = useParams();
    console.log(id);

    const[category, setCategory] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedPopularity, setSelectedPopularity] = useState(null);
    const [inWishList, setInWishlist] = useState({});
    const[option, setOption] = useState(false)
    const [selectedSort, setSelectedSort] = useState(null);
    const [smallerScreen,  setSmallerScreen] = useState(window.innerWidth < 1000);

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

    const getData = useSelector((store)=>{
        console.log(store, "store debug");
        return store.data;
    })

    useEffect(()=>{ 
    if(gender && id && getData){
        console.log("Filtering data for id:", id);
        setCategory(getData?.data?.data?.filter((item) => item?.subCategory?.toLowerCase() === id && item?.gender?.toLowerCase()===gender))
    }
     }, [id, gender, getData])
    console.log("category", category)

    const filteredData = category.filter((item)=>{
        if(
          (!selectedBrand || item.brand===selectedBrand) &&
          (!selectedColor || item.color === selectedColor) &&
          (!selectedPopularity || item.sellerTag === selectedPopularity)
        ){
          return true;
        }
        return false;
      }) 

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
          setCategory(sortedByPopularity);
         } else if (selectedSortOption === "2") {
          const sortedData = [...filteredData].sort((a, b) => a.price - b.price);
          setCategory(sortedData);
        } else if (selectedSortOption === "3") {
          const sortedData = [...filteredData].sort((a, b) => b.price - a.price);
          setCategory(sortedData);
        }
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
        if (category) {
          const updatedData = category.map((item) => {
            const inWishList = wishlist && wishlist[item._id]
            return { ...item, inWishlist: inWishList };
          });
          setCategory(updatedData);
        }
      }, [wishlist]);

      useEffect(()=>{
        const handleResize = () => {
          setSmallerScreen(window.innerWidth < 1000);
          if(window.innerWidth<1000){
          }
          
        };
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      },[]);

  return (
    <>
    {smallerScreen ? (
     <Container className='ResdataInfo' style={{marginLeft:"10px", marginTop:"35px"}}>
          {filteredData.map((item, index) => (
            <Flex key={index} style={{flexDirection:"column"}}>
              <Link to={`/product/${item._id}`}>
                <img src={item.displayImage} style={{width:"100%"}}></img>
              </Link>
              <Flex>
                <h5 style={{paddingLeft:"10px", marginTop:"5px", width:"50%"}}>{item.brand}</h5>
                {isLoggedIn ? (
                  <>
                {inWishList[item._id] ? (
                 <AiFillHeart style={{ height: "20px", width: "20px", color:"red", marginLeft: "45px" }} 
                 onClick={()=> handleAddToWishList(item._id)}/>
                ):(
                <BsHeart style={{ height: "20px", width: "20px", color:"grey", marginLeft: "45px" }} 
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
                <Text style={{marginTop:"-10px", paddingLeft:"10px", overflow: "hidden"}}>{item.name}</Text>
                <h3 style={{marginTop:"-10px", paddingLeft:"10px"}}>₹ {item.price}</h3>
                </Flex>
               
          ))}        
        </Container>
    ):(
    <Box style={{marginTop:"6rem"}}>
    <Flex className='heading1'>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <Container className='heading2'>Home</Container>
      </Link>
      <Container className='heading2'>/</Container>
      <Container className='heading2'>{gender?.charAt(0)?.toUpperCase()+gender?.slice(1)} Clothing</Container>
    </Flex>

    <Box>
        <Flex>
          <h2 className='heading3'>{id?.charAt(0)?.toUpperCase()+ id?.slice(1)} for {category[0]?.gender}</h2>
          <div style={{ marginLeft: "20px", fontSize: "30px", color: "gray", marginTop: "40px" }}>({filteredData.length})</div>
        </Flex>
        <hr className='ruler' style={{marginLeft:"30px", marginTop:"-10px"}}/>
      </Box>
      <Flex>
        <Container style={{ width: "150px", height: "50px" }}>
          <Flex>
            <h3 className='heading4' style={{ marginRight: "950px"}}>FILTERS</h3>
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
          <Accordion allowToggle style={{marginLeft:"30px", width:"250px"}}>
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
     {Array.from(new Set(category.map(item => item.brand)).values()).map((brand, index) => (
          <li key={index} onClick={() => handleBrandFilter(brand)}  className={selectedBrand === brand ? 'activeCategory' : ''}>
            {brand?.charAt(0)?.toUpperCase() + brand?.slice(1)}</li>
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
     {Array.from(new Set(category.map(item => item.color)).values()).map((color, index) => (
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
     {Array.from(new Set(category.map(item => item.sellerTag)).values()).map((sellerTag, index) => (
          <li key={index} onClick={() => handlePopularityFilter(sellerTag)}  className={selectedPopularity === sellerTag ? 'activeCategory' : ''}>
            {sellerTag?.charAt(0)?.toUpperCase() + sellerTag?.slice(1)}</li>
        ))}
     </ul>
    </AccordionPanel>
  </AccordionItem>
  <hr className='divider'/>

  </Accordion>
        </Container>

    <Container className='dataInfo' style={{marginLeft:"150px"}}>
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
                 <AiFillHeart style={{ height: "20px", width: "20px", color:"red", marginLeft: "20%" }} 
                 onClick={()=> handleAddToWishList(item._id)}/>
                ):(
                <BsHeart style={{ height: "20px", width: "20px", color:"grey", marginLeft: "20%" }} 
                onClick={()=> handleAddToWishList(item._id)}/>
                )}
                </>
                ):(
                  <>
                  <Link to ='/Login'>
                  <BsHeart style={{ height: "20px", width: "20px", color:"grey", marginLeft: "40px" }}/>
                  </Link>
                  </>
                )}
                </Flex>
                <Text className='dataTitle'>{item.name}</Text>
                <div className='dataPrice' style={{ fontSize: "20px" }}>₹{item.price}</div>
                </Box>
          ))}        
        </Container>
        </Flex>
        </Box>
        )}
        <Footer/>
        </>
  )
}
