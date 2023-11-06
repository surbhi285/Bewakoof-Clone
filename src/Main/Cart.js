  import React, { useState } from 'react'
  import { useEffect, useRef } from 'react';
  import {Link, useNavigate} from 'react-router-dom';
  import { Container, Flex, Box, Button, Text, propNames} from '@chakra-ui/react';
  import {FaTruck} from 'react-icons/fa';
  import { ChevronDownIcon } from "@chakra-ui/icons";
  import info from '../Images/info.png';
  import emptybag from '../Images/emptybag.png';
  import { placeOrder } from '../ServiceApi';
  import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, FormControl, FormLabel, 
  Input, ModalBody, useDisclosure, MenuButton, Menu, MenuList, MenuItem } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_FROM_CART, addWishlist, getCart, removeWishlist } from '../Action';

  export default function Cart() {
    const { isOpen, onOpen, onClose } = useDisclosure(); 
    const [inWishList, setInWishlist] = useState({});
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("S");
    
  
    // const navigate = useNavigate();
    const wishlist = useSelector((store)=> store.data.wishlist);
    const isLoggedIn = useSelector((store)=> store.user.isLoggedIn);

    const handleAddToWishList =(productId)=>{
      // console.log("handlewishlist being called", productId)
     if(isLoggedIn){
      if(inWishList[productId]){
        dispatch(removeWishlist(productId));
        dispatch(REMOVE_FROM_CART(productId));
        setInWishlist((prevState)=>({
          ...prevState,
          [productId]: false,
        }));
      }else{
        dispatch(addWishlist(productId));
        dispatch(REMOVE_FROM_CART(productId));
        setInWishlist((prevState)=>({
          ...prevState,
          [productId]: true,
        }));
           }
        }
    }

    const [formData, setFormData] = useState({
      name:"",
      mobile:"",
      pin:"",
      city:"",
      state:"",
      address:"",
      locality:"",
      landmark:"",
      addressType:"",
    });

    const[userInfo, setUserInfo] = useState(()=>{
      const savedAddress = localStorage.getItem("user");
      return savedAddress ? JSON.parse(savedAddress):[];
    });

    const handleChange = (e)=>{
      const {name, value} = e.target;
      setFormData({...formData, [name]: value})
    };

    const handleSubmit=async(e)=>{
      e.preventDefault();
      console.log(formData);
      setUserInfo([...userInfo, formData])
      setFormData({
      name:"",
      mobile:"",
      pin:"",
      city:"",
      state:"",
      address:"",
      locality:"",
      landmark:"",
      addressType:"",
      })
    }
    
    // const handlePlaceOrder = async()=>{
    //       // const orderStatus = await placeOrder(product, address);
    //       // console.log(orderStatus);
    //       if (orderStatus === 'success') {
    //         console.log('Order placed successfully');
    //       } else {
    //         console.log('Failed to place the order', orderStatus);
    //       } 
    //   } 
    
  
    const dispatch = useDispatch();
    const cart = useSelector((state)=> state.data.cart);
  
   
    useEffect(()=>{
    dispatch(getCart());
    },[dispatch])

    const handleRemoveItem =(itemId)=>{
      console.log(itemId);
      dispatch(REMOVE_FROM_CART(itemId));
      dispatch(getCart());
      // console.log(cart);
  }

 

      const totalPrice = cart?.data?.totalPrice;

      return (
        <div>
          <Flex flexDirection="row">
            <h5 style={{ marginLeft: '50px', marginTop: '50px', fontSize: '20px' }}>My Bag</h5> 
         <div style={{ marginLeft: '10px', marginTop: '50px', fontSize: '20px' }}>{cart?.data?.items?.length} item(s)</div>
          </Flex>
          {Array.isArray(cart?.data?.items) && cart?.data?.items.length > 0 ? (
            <div>
              <Flex>
                <div className="cartInfo">
                  <FaTruck style={{ color: 'red', marginRight: '20px' }} />
                  Yay! You get FREE delivery on this order
                </div>
                <Box className="cartDiscount">Save extra <span style={{ fontWeight: 'bold' }}>₹ 70</span> with <span style={{ fontWeight: 'bold' }}>TriBe</span></Box>
              </Flex>
              <Flex>
                <Container style={{ width: '50%', height: 'fit-content', marginLeft: '30px', marginTop: '20px' }}>
                  {cart?.data?.items?.map((item) => (
                    <div key={item._id} style={{ marginBottom: '5%', border: '1px solid rgb(203, 201, 201)', height: '250px' }}>
                      <Flex>
                        <div className='cartName'>{item.product.name}</div>
                        <img className="cartImage" src={item.product.displayImage} alt="image" />
                      </Flex>
                      <div className='cartPrice'>₹ {item.product.price}</div>
                      <div >
                      
                      <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton className="chooseButton"
                    isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />} >
                    Size:{size}
                    </MenuButton>
                    <MenuList >
                      {["S", "M", "L", "XL", "XXL"].map((size, index) => (
                        <MenuItem key={index} onClick={() => setSize(size)} className="setButton">
                          {size}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </>
                )}
              </Menu>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton className="chooseButton" isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon/>}>
                    Qty:{qty}
                    </MenuButton>
                    <MenuList>
                      {[1, 2, 3, 4].map((qty) => (
                    <MenuItem key={qty} onClick={() => setQty(qty)} className="setButton">
                      {qty}
                    </MenuItem>
                    ))}
                    </MenuList>
                  </>
                )}
              </Menu>
              </div>
                      <hr className='divider' style={{ marginTop: '65px' }} />
                      <Flex>
                      <Button className='removeCart' onClick={() => handleRemoveItem(item.product._id)}>Remove</Button>
                      <Button className='wishcart' onClick={()=>handleAddToWishList(item.product._id)}>Move To Wishlist</Button>
                      </Flex>
                      </div>
               ))}
                </Container>
                <Container className='order' style={{ width: '35%', height: 'fit-content', marginLeft: '80px', marginTop: '20px' }}>
                  <Box className='cartTotal'>PRICE SUMMARY</Box>
                  <Flex>
                  <Box className='priceTag'>Total MRP (Incl. of taxes)</Box>
                  <Box className='priceTag' style={{marginLeft:"10rem"}}>₹ {totalPrice}</Box>
                  </Flex>
                  <Flex>
                  <div className='priceTag'>Shipping Charges</div>
                  <div style={{ color:"#42a2a2", marginLeft:"14.5rem", marginTop:"20px"}}>FREE</div>
                </Flex>
                <Flex>
                <Box className='priceTag' style={{fontWeight:"bold"}}>SubTotal</Box>
                <Box style={{fontWeight:"bold", marginLeft:"17rem", marginTop:"20px"}}>₹ {totalPrice}</Box>   
                </Flex>
                <Box>
                <Flex style={{borderTop:"1px solid #eee", marginTop:"20px"}}>
                <div className='total'>Total</div>
                <Button className='totalButton' onClick={onOpen}>ADD ADDRESS</Button>
                </Flex>
              <div style={{marginTop:"-30px", marginLeft:"20px"}}>₹<span style={{fontWeight:"bold"}}>{totalPrice}</span></div>
              </Box>
              <Box className='cartpic'>
              <img src={info} alt="infoPage" style={{width:"400px"}}/>
              </Box> 
                </Container>
               
              </Flex>
            </div>
          ) : (
            <>
              <img src={emptybag} alt="cartbag" style={{ width: '200px', paddingLeft: '45%' }} />
              <Text style={{ paddingLeft: '50%', marginTop: '0', fontSize: '25px' }}>Nothing in the bag.</Text>
              <Link to='/'>
                <Button
                  style={{
                    width: '20%',
                    height: '2.5rem',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginLeft: '48%',
                    color: 'rgb(66, 162, 162)',
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    border: '1px solid rgb(66, 162, 162)',
                    cursor: 'pointer',
                  }}
                >
                  Continue Shopping
                </Button>
              </Link>
            </>
          )}
          <Modal
          isOpen={isOpen}
          onClose={onClose}>
          <form  onSubmit={handleSubmit}>
          <ModalOverlay />
          <ModalContent className="modal" maxH="100vh">
          {/* <form onSubmit={handleSubmit}> */}
            <ModalHeader style={{display:"flex", marginBottom:"12%", marginLeft:"10px", fontWeight:"bold"}}>Add New Address
            <ModalCloseButton style={{width:"10px", marginLeft:"75%", backgroundColor:"white", border:"none"}} />
            </ModalHeader>
            <ModalBody pb={6} ml={20} overflowY="auto" >
              <FormControl style={{position:"relative"}}>
                <FormLabel className='label'>Country</FormLabel>
                <Input placeholder='India' className='input' value="India" readOnly />
              </FormControl>
              <hr style ={{marginRight:"10%", color:"grey"}} />
              <FormControl mt={20} style={{position:"relative"}}>
                <FormLabel className='label'>Full name</FormLabel>
                <Input placeholder='Full name' className='input' name="name" required onChange={handleChange} value={formData.fullName}/>
              </FormControl>

            <FormControl mt={20} style={{position:"relative"}}>
                <FormLabel className='label'>Mobile Number</FormLabel>
                <Input placeholder='+91' className='input' required onChange={handleChange} name="mobile" value={formData.mobile}/>
              </FormControl>

            <hr style ={{marginRight:"10%", color:"grey"}} />
            
            <FormControl mt={20} style={{position:"relative"}}>
            <Input placeholder='Pincode/Postal/Zipcode' className='input' name="pin" 
            required onChange={handleChange} value={formData.pin} type='number'/>
            </FormControl>
            
            <Flex>
            <FormControl mt={20} ml={10} style={{position:"relative"}}>
            <Input placeholder='City' required value={formData.city} onChange={handleChange} type='text' name="city"
            style={{lineHeight:"6ex", width:"240px", left:"2em", borderRadius:"6px",border:"1px solid gray", paddingLeft: "20px"}}/>
            </FormControl>

            <FormControl mt={20} ml={10} style={{position:"relative"}}>
            <Input placeholder='State'  required value={formData.state} onChange={handleChange} type='text' name="state"
            style={{lineHeight:"6ex", width:"240px", left:"2em", borderRadius:"6px", border:"1px solid gray", paddingLeft: "20px"}}/>
            </FormControl>
            </Flex>

            <FormControl mt={20} ml={10} style={{position:"relative"}}>
            <Input placeholder='Flat no/Building, Street name' required value={formData.address} onChange={handleChange} type='text' name="address"
            style={{lineHeight:"8ex", width:"520px", left:"2em", borderRadius:"6px", border:"1px solid gray", paddingLeft: "20px"}} />
            </FormControl>

            <FormControl mt={20} ml={10} style={{position:"relative"}}>
            <Input placeholder='Area/Locality' required value={formData.locality} onChange={handleChange} type='text' name="locality"
            style={{lineHeight:"8ex", width:"520px", left:"2em", borderRadius:"6px", border:"1px solid gray", paddingLeft: "20px"}}/>
            </FormControl>

            <FormControl mt={20} ml={10} style={{position:"relative"}}>
            <Input placeholder='Landmark' required value={formData.landmark} onChange={handleChange} type='text' name="landmark"
            style={{lineHeight:"8ex", width:"520px", left:"2em", borderRadius:"6px", border:"1px solid gray", paddingLeft: "20px"}}/>
            </FormControl>
             
            <FormControl mt={20} ml={10} style={{position:"relative"}}>
            <Input placeholder='Address Type (Home, Office or Others)' required value={formData.addressType} onChange={handleChange} type='text' name="addressType"
            style={{lineHeight:"8ex", width:"520px", left:"2em", borderRadius:"6px", border:"1px solid gray", paddingLeft: "20px"}}/>
            </FormControl>
         

            <Flex mt={40} ml={50} mb={30}>
              <Button className='save' type="submit" mr={30} >
                SAVE ADDRESS
              </Button>
              <Button onClick={onClose} className='cancel'>CANCEL</Button>
              </Flex>
            
              </ModalBody>
              {/* </form> */}
          </ModalContent>
          </form>
        </Modal>
        
        </div>
      );
    }
