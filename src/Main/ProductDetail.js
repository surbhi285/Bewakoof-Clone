import { useEffect, useState } from "react";
import { Container, Box, Flex} from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from "@chakra-ui/react";
import { NavLink, useParams } from 'react-router-dom';
import {AiFillStar, AiOutlineHeart} from 'react-icons/ai';
import {PiShoppingBagLight} from 'react-icons/pi';
import {BiStar, BiMinus} from 'react-icons/bi';
import {MdAdd} from 'react-icons/md';
import {RiFileListLine, RiExchangeLine} from 'react-icons/ri';
import flag from '../Images/flag.png';
import info from '../Images/info.png';


function ProductDetail(props){

    const {id} = useParams();
    console.log(id);
   
    const[productImages, setProductImages] = useState([]);
    const[productInfo, setProductInfo] = useState([]);
    const[number, setNumber] = useState(0);

    const getProduct = async()=>{

        const response = await(fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/${id}`,
        {
            method: 'GET',
                headers: {
                    'projectId': "8jf3b15onzua",
                }
            }));

        if(!response.ok){
            console.error('Failed to Fetch');
            return;
        }

        const data = await response.json();
        console.log(data, "data");
        console.log(data.data?.images)
        setProductImages(data.data?.images);
        setProductInfo(data.data);
    }
     useEffect(()=>{
        getProduct();
     },[id])


    return(
     <Box>
      <Flex className='heading1'>
      <NavLink to="/" style={{textDecoration:"none", color:"black"}}>
      <Container className='heading2'>Home</Container>
      </NavLink>
      <Container className='heading2'>/</Container>
      <Container className='heading2'>{productInfo.gender}Clothing</Container>
      <Container className='heading2'>/</Container>
      <Container className='heading2'>{productInfo.name}</Container>
      </Flex>
      <Flex>
      <Container style={{marginTop:"10px"}}>
<div style={{ display: "flex", flex:"1"}}>
  <div style={{ flex: "1", marginTop: "30px" }}>
    {productImages && productImages.length > 0 ? (
      <div>
        {productImages.map((item, index) => (
          <Flex key={index}>
            <img src={item} alt="" onClick={() => setNumber(index)} className="ProductImage" />
          </Flex>
        ))}
      </div>
      
    ) : null}
    </div>
  
  <div style={{ flex: "1", marginLeft: "20px" }}>
    {productImages[number] && (
      <img src={productImages[number]} alt="numberImage" className="imageNumber" />
    )}
  </div>

    <div className="detail" style={{flex:"1", marginLeft:"70px"}}>
    <div className="brand">{productInfo.brand}</div>
    <div style={{fontSize:"16px", paddingTop:"5px", color:"#737373", fontFamily:"sans-serif"}}>
    {productInfo.name}
    </div> 
    <div style={{height:"25px", display:"flex", width:"55px", marginTop:"8px", fontSize:"18px", border:".3px solid #949494", backgroundColor:"#f7f7f7"}}>
    <AiFillStar style={{color:"#ffc700", marginRight:"8px", paddingTop:"3px", paddingLeft:"7px"}}/><div>4</div></div>
    <div style={{marginTop:"8px"}}>₹<span style={{fontSize:"24px", fontWeight:"bold", paddingTop:"10px"}}>{productInfo.price}</span></div>
    <div style={{color:"#737373"}}>inclusive of all taxes</div>
    <br/>

    <div className="productOffer">TriBe members get an extra discount of 
    <span style={{fontWeight:"bold"}}> ₹30</span> and FREE shipping.<br/>
    <span style={{color:"#42a2a2"}}>Learn more</span>
    </div>
    <Flex>
    <h2 style={{fontSize:"15px", marginTop:"20px", marginRight:"250px"}}>Select Size</h2>
    <h2 style={{fontSize:"15px", marginTop:"20px", color:"#42a2a2"}}>Size Guide</h2>
    </Flex>
    <button className="size">S</button>
    <button className="size">M</button>
    <button className="size">L</button>
    <button className="size">XL</button>
    <button className="size">XXL</button>
    <br/>
     <Flex style={{marginTop:"40px", borderBottom:"2px solid #eee"}}>
    <button className="CART">
    <PiShoppingBagLight style={{marginRight:"10px", marginTop:"-5px", fontSize:"25px"}}/>
    ADD TO BAG</button>
    <button className="WISH">
    <AiOutlineHeart style={{marginRight:"10px", marginTop:"-5px", fontSize:"25px"}}/>
    WISHLIST</button>
    </Flex>

    {/* <Flex style={{marginTop:"20px"}}>
     <GrLocation style={{width:"20px", height:"20px", marginRight:"10px"}}/>
     <div style={{fontSize:"12px", fontWeight:"bold"}}>CHECK FOR DELIVERY DETAILS</div> 
    </Flex> */}

    <Flex style={{borderBottom:"2px solid #eee"}}>
    <div style={{marginTop:"10px", marginRight:"10px", fontWeight:"bold",fontSize:"15px", color:"#363636"}}>
    Delivering in 
    <span style={{color:"#207bb4"}}> India</span>
    </div>
    <img src={flag} alt="flagIcon" className="flag"/>
    </Flex>
    <div style={{borderBottom:"2px solid #eee", marginTop:"15px"}}>
    <BiStar style={{fontSize:"35px", marginRight:"20px"}}/>
    <Flex>
    <div style={{fontSize:"15px", fontWeight:"bold", marginLeft:"45px", marginTop:"-35px"}}>Offers</div>
    <div style={{marginBottom:"20px",marginLeft:"-40px", fontSize:"12px", marginTop:"-15px", color:"#878787"}}>
    NO OFFER AVAILABLE</div>
    </Flex>
    </div>
    <div style={{borderBottom:"2px solid #eee", marginTop:"15px"}}>
    <Accordion allowMultiple>
    <AccordionItem style={{marginRight:"30px"}}>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton style={{backgroundColor:"white", border:"none"}}>
            <Box as="span" flex='1' textAlign='left'>
            <div>
        <RiFileListLine style={{fontSize:"38px", marginRight:"20px"}}/>
        <Flex>
        <div style={{fontSize:"15px", fontWeight:"bold", marginLeft:"45px", marginTop:"-40px"}}>Product Description</div>
        <div style={{marginLeft:"-142px", fontSize:"13px", marginTop:"-17px", color:"#878787"}}>
        Manufacture, Care and Fit</div>
        </Flex>
            </div>
            </Box>
            {isExpanded ? (
              <BiMinus fontSize='12px' marginRight={50}/>
            ) : (
              <MdAdd fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} style={{ width: "400px" }}>
          {productInfo.description}
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
    </div>
    <div style={{borderBottom:"2px solid #eee", marginTop:"15px"}}>
    <Accordion allowMultiple>
    <AccordionItem style={{marginRight:"30px"}}>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton style={{backgroundColor:"white", border:"none"}}>
            <Box as="span" flex='1' textAlign='left'>
            <div>
        <RiExchangeLine style={{fontSize:"38px", marginRight:"20px"}}/>
        <Flex>
        <div style={{fontSize:"15px", fontWeight:"bold", marginLeft:"45px", marginTop:"-40px"}}>15 Days Returns & Exchange</div>
        <div style={{marginLeft:"-205px", fontSize:"13px", marginTop:"-17px", color:"#878787"}}>
        Know about return & exchange policy</div>
        </Flex>
            </div>
            </Box>
            {isExpanded ? (
              <BiMinus fontSize='12px' marginRight={50}/>
            ) : (
              <MdAdd fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} style={{ width: "400px" }}>
        Easy returns upto 15 days of delivery. Exchange available on select pincodes
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
    </div>
 
 <div style={{marginTop:"20px"}}>
    <img src={info} alt="infoPage" width={500}/>
 </div>
     
    </div> 
    
    </div>
      </Container>
      </Flex>
    </Box>
    )
}
export default ProductDetail;