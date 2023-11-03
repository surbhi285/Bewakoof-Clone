  import React, { useState } from 'react'
  // import { getCart } from '../Action';
  // import { useDispatch, useSelector } from 'react-redux';
  import { useEffect, useRef } from 'react';
  import {Link, useNavigate} from 'react-router-dom';
  import { getCartList, removeCartItem } from '../ServiceApi';
  import { Container, Flex, Box, Button, Text} from '@chakra-ui/react';
  import {FaTruck} from 'react-icons/fa';
  import info from '../Images/info.png';
  import emptybag from '../Images/emptybag.png';
  import { placeOrder } from '../ServiceApi';
  import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, FormControl, FormLabel, Input, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_FROM_CART, getCart, removeCart } from '../Action';

  export default function Cart() {
    const { isOpen, onOpen, onClose } = useDisclosure(); 
    // const navigate = useNavigate();
    const [formData, setFormData] = useState({
      name:"",
      mobile:"",
      pin:"",
      city:"",
      state:"",
      address:"",
      locality:"",
      landmark:"",
    })

    const handleChange = (e)=>{
      const {name, value} = e.target;
      setFormData({...formData, [name]: value})
    };

    const handleSubmit=async(e)=>{
      e.preventDefault();
      console.log(formData);
      setFormData({
      name:"",
      mobile:"",
      pin:"",
      city:"",
      state:"",
      address:"",
      locality:"",
      landmark:"",
      })
    }
    
    // const handlePlaceOrder = async()=>{
    //   if(
    //     formData.name && 
    //     formData.mobile && 
    //     formData.pin && 
    //     formData.city &&
    //     formData.state &&
    //     formData.address &&
    //     formData.locality && 
    //     formData.landmark
    //   ){
    //     const product = cartData.map((item) => ({
    //       product: item.product._id,
    //       quantity: item.quantity,
    //     }));

    //     const address = {
    //       name: formData.name,
    //       mobile: formData.mobile,
    //       pin: formData.pin,
    //       city: formData.city,
    //       state: formData.state,
    //       address: formData.address,
    //       locality: formData.locality,
    //       landmark: formData.landmark,
    //     };
    //     try {
    //       // Call the placeOrder function
    //       const orderStatus = await placeOrder(product, address);

    //       // Handle the response, e.g., display a success message or navigate to a confirmation page
    //       if (orderStatus === 'success' && typeof orderStatus === 'object') {
    //         console.log('Order placed successfully');
    //         // You can navigate to a confirmation page or show a success message here
    //       } else {
    //         console.log('Failed to place the order', orderStatus);
    //         // Handle the case where the order placement was not successful
    //       }
    //     } catch (error) {
    //       console.error('Error placing the order:', error);
    //       // Handle API call errors
    //     }
    //   } else {
    //     // Handle the case where the user hasn't filled out all the required address information
    //     console.log('Please fill out all address information');
    //   }
    // }
      
    


      // useEffect(()=>{
      //   const cartDataItem = async()=>{
      //     try{
      //       const response = await getCartList();
      //       if (response && response.data && response.data.items) {
      //         console.log(response.data.items)
      //         // console.log(response.data.items[0].product.totalPrice)
      //         setCartData(response.data.items);
      //       }
          
      //     }catch{
      //       console.error("Not geting data")
      //     }
      //   };
      // cartDataItem();
      // },[]);

    const dispatch = useDispatch();
    const cart = useSelector((state)=> state.data.cart);
    console.log(cart);
   
    useEffect(()=>{
    dispatch(getCart());
    },[dispatch])

    const handleRemoveItem =(itemId)=>{
      console.log(itemId);
      dispatch(REMOVE_FROM_CART(itemId));
      console.log(cart);
      dispatch(getCart());
      console.log(cart);
  }

 

    // const removeItem = async(itemId)=>{
    //   console.log(itemId)
    //   try{
    //   await removeCartItem(itemId);
    //   const updatedCartData = cartData.filter((item) => item._id !== itemId);
    //   setCartData(updatedCartData);
    //   } catch (error) {
    //     console.error("Error in removing: ", error);
    //   }
    // }
    console.log(cart?.data?.items)
      // const TotalPrice = ()=>{
      //   let Price = 0;
      //   for(const items of cart?.data){
      //     // console.log(item.product.price);
      //     // console.log(item.quantity);
      //     Price +=items.product.price * items.quantity;
      //     // console.log(Price);
      //   }
      //   return Price;
      // };
      
      return (
        <div>
          <Flex flexDirection="row">
            <h5 style={{ marginLeft: '50px', marginTop: '50px', fontSize: '20px' }}>My Bag</h5> 
         <div style={{ marginLeft: '10px', marginTop: '50px', fontSize: '20px' }}>{cart?.data?.items?.length} item(s)</div>
          </Flex>
          {cart?.data?.items?.length > 0 ? (
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
                    <div key={item._id} style={{ marginBottom: '5%', border: '1px solid rgb(203, 201, 201)', height: '200px' }}>
                      <Flex>
                        <div className='cartName'>{item.product.name}</div>
                        <img className="cartImage" src={item.product.displayImage} alt="image" />
                      </Flex>
                      <div className='cartPrice'>₹ {item.product.price}</div>
                      <select style={{ marginLeft: '20px', height: '25px', fontSize: '12px', border: '1px solid #ced4da', borderRadius: '5px' }}>
                        <option value="1">Size: XS</option>
                        <option value="1">S</option>
                        <option value="2">M</option>
                        <option value="1">L</option>
                        <option value="1">XL</option>
                      </select>
                      <select style={{ marginLeft: '20px', height: '25px', fontSize: '12px', border: '1px solid #ced4da', borderRadius: '5px' }}>
                        <option value="1">quantity: {item.quantity}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="1">3</option>
                        <option value="1">5</option>
                      </select>
                      <hr className='divider' style={{ marginTop: '20px' }} />
                      <Button className='removeCart' onClick={() => handleRemoveItem(item._id)}>Remove</Button>
                    </div>
                  ))}
                </Container>
                <Container className='order' style={{ width: '35%', height: 'fit-content', marginLeft: '80px', marginTop: '20px' }}>
                  <Box className='cartTotal'>PRICE SUMMARY</Box>
                  <Flex>
                  <Box className='priceTag'>Total MRP (Incl. of taxes)</Box>
                  {/* <Box className='priceTag' style={{marginLeft:"10rem"}}>₹ {TotalPrice()}</Box> */}
                  </Flex>
                  <Flex>
                  <div className='priceTag'>Shipping Charges</div>
                  <div style={{ color:"#42a2a2", marginLeft:"14.5rem", marginTop:"20px"}}>FREE</div>
                </Flex>
                <Flex>
                <Box className='priceTag' style={{fontWeight:"bold"}}>SubTotal</Box>
                {/* <Box style={{fontWeight:"bold", marginLeft:"17rem", marginTop:"20px"}}>₹ {TotalPrice()}</Box>    */}
                </Flex>
                <Box>
                <Flex style={{borderTop:"1px solid #eee", marginTop:"20px"}}>
                <div className='total'>Total</div>
                <Button className='totalButton' onClick={onOpen}>ADD ADDRESS</Button>
                </Flex>
              {/* <div style={{marginTop:"-30px", marginLeft:"20px"}}>₹<span style={{fontWeight:"bold"}}>{TotalPrice()}</span></div> */}
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
            <ModalHeader style={{display:"flex", marginBottom:"20px", marginLeft:"10px", fontWeight:"bold"}}>Add New Address
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
            <Input placeholder='Landmark(Optional)' required value={formData.landmark} onChange={handleChange} type='text' name="landmark"
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
