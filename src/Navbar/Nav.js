  import React, { useState, useEffect, useRef} from 'react'
  import logo from '../Images/logo.webp';
  import flag from '../Images/flag.png';
  import {BiSearch} from 'react-icons/bi';
  import {Flex, UnorderedList, ListItem, Text, Box, List, Button} from '@chakra-ui/react'
  import { NavLink, useNavigate } from 'react-router-dom';
  import {BsHeart, BsBag} from 'react-icons/bs';
  import {CiUser} from 'react-icons/ci';
  import OptionWomen from './CategoriesWomen';
  import OptionMen from './CategoriesOption';
  import { useDispatch, useSelector } from 'react-redux';
  import { LOGOUT } from '../Action';
  import ResNav from './ResNav';
  import { searchOrder } from '../ServiceApi';
  // import {HiOutlineMenuAlt1} from 'react-icons/hi'
  // import bewakoofLogo from '../Images/bewakoofLogo.png';

  export default function Nav() {
      const[menuHover, setMenuHover] = useState(false);
      const[dropmenu, setDropmenu] = useState(false);
      const [searchTerm, setSearchTerm] = useState('');
      const [showSuggestions, setShowSuggestions] = useState(false);
      const [searchResult, setSearchResult] = useState([]);
      const [userInfo, setUserInfo] = useState([]);
      const [smallerScreen,  setSmallerScreen] = useState(window.innerWidth < 1000);
  
      
      const navigate = useNavigate();
      const dispatch = useDispatch();

      const isLoggedIn = useSelector((store) => store.user?.isLoggedIn);
      const cartItem = useSelector((state)=>state.data.cart);
      console.log(cartItem.results);


      const searchInputRef = useRef(null); 
      const suggestionBoxRef = useRef(null);

      const handleMouseEnter = (category)=>{
          setMenuHover(category);
      }
      const handleMouseLeave=()=>{
          setMenuHover(null);
      };

      const handleProfileClick = ()=>{
          setDropmenu(!dropmenu);    
      }

      const handleLogout =() =>{
          dispatch(LOGOUT()); 
          setDropmenu(false);
      }

    
      const handleSearchInputChange = async (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        setShowSuggestions(term.trim().length > 0 );
        try {
          const result = await searchOrder(term);
          setSearchResult(result);
          setShowSuggestions(result.data && result.data.length > 0);
        } catch (error) {
          console.error('Error while searching:', error);
        }
      };

      const handleClickOutside = (event) => {
        if (
          searchInputRef.current &&
          !searchInputRef.current.contains(event.target) &&
          suggestionBoxRef.current &&
          !suggestionBoxRef.current.contains(event.target)
        ) {
          setShowSuggestions(false);
        }
  // console.log('Clicked outside');
  // console.log('Event target:', event.target);
  // console.log('searchInputRef:', searchInputRef.current);
  // console.log('suggestionBoxRef:', suggestionBoxRef.current);
      };
   
      // useEffect(() => {
      //   searchOrder(searchTerm)
      //     .then(result => setSearchResult(result))
      //     .catch(error => console.error("Error while searching:", error));
      // }, [searchTerm]);

      const handleSuggestionClick = (suggestion) => {
        const productId = suggestion?._id;
        console.log(productId);
        const productUrl = `/product/${productId}`;
        navigate(productUrl);
        setSearchTerm(suggestion);
        setShowSuggestions(false);
      };

      const handleSeeAllResultsClick=()=>{
        const encodesearchTerm = encodeURIComponent(searchTerm); 
        const searchResultsUrl = `/searchResult/${encodesearchTerm}`
        navigate(searchResultsUrl);
      }
      
      useEffect(() => {
        document.body.addEventListener('click', handleClickOutside);
        return () => {
          document.body.removeEventListener('click', handleClickOutside);
        };
      }, [searchTerm]);


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

        useEffect(()=>{
          const user = localStorage.getItem("signup");
          if(user){
            const parseData = JSON.parse(user);
            setUserInfo(parseData)
          }
        },[])

        // console.log(userInfo.signup.data.name);

        // console.log('showSuggestions:', showSuggestions);
        // console.log('searchResult:', searchResult);
        // console.log('searchResult length:', searchResult.data);
    return (
      <>
      {smallerScreen ? (
        <>
        <ResNav />
        
        
        </>
      ):(
      <div style={{ position: "fixed", left:0, top: 0, right: 0, zIndex: "100", backgroundColor: "white"}}>
      <Flex className="topBar" style={{justifyContent:"space-between"}} >
      <Flex>
      <UnorderedList className="topBar-left">
        <NavLink to="NotAvailable" style={{textDecoration:"none", color:"black"}}>
          <ListItem>Offers</ListItem>
        </NavLink>
        <NavLink to="NotAvailable" style={{textDecoration:"none", color:"black"}}>
          <ListItem>FanBook</ListItem>
        </NavLink>
        <NavLink to="Tribe" style={{textDecoration:"none", color:"black"}}>
        <ListItem>TriBe MemberShip</ListItem>
        </NavLink>
      </UnorderedList>
      </Flex>
      <Flex >
      <UnorderedList className='topBar-right' >
        <NavLink to ="ContactUs" style={{textDecoration:"none", color:"black"}}>
          <ListItem>Contact Us</ListItem>
        </NavLink>
        <NavLink to="Orders" style={{textDecoration:"none", color:"black"}}>
          <ListItem>Track Order</ListItem>
        </NavLink>
      </UnorderedList>
      </Flex>
      </Flex>

      <Flex className='navBar' style={{justifyContent:"space-between"}}>
      <Flex
                style={{
                  overflow: "hidden",
                  alignItems: "center",
                  height: "60px",
                  maxWidth:"40rem"
                }}>
                <NavLink to="/">
                  <Flex>
                    <img src={logo} alt="logo" className="imageStyle" />
                  </Flex>
                </NavLink>
                <div
                  onMouseEnter={() => handleMouseEnter("Men")}
                  onMouseLeave={handleMouseLeave}
                  className="menu-container">
                  <NavLink to={`/categories/men`} className="navLink">
                    <Text className="menuItem" style={{ margin: "0", cursor:"pointer", marginLeft:"40px" }}>
                      MEN
                    </Text>
                  </NavLink>
                  {menuHover === "Men" && <OptionMen />}
                </div>

                <div
                  onMouseEnter={() => handleMouseEnter("Women")}
                  onMouseLeave={handleMouseLeave}
                  className="menu-container">
                  <NavLink to={`/categories/women`} className="navLink">
                    <Flex className="menuItem" style={{ marginRight: "0" , cursor:"pointer" }}>
                      WOMEN
                    </Flex>
                  </NavLink>
                  {menuHover === "Women" && <OptionWomen />}
                </div>

                <NavLink to="/NotAvailable" className="navLink">
                  <Flex className="menuItem">MOBILE COVERS</Flex>
                </NavLink>
              </Flex>
              <Flex>
          <UnorderedList className='navBar-right'>
            <Box style={{marginRight:"10px"}}><BiSearch className='icon'/>
          <input type="search" placeholder='Search by product, category or collection' className='inputSearch' onChange={handleSearchInputChange}
          ref={searchInputRef}/>
          {showSuggestions && Array.isArray(searchResult.data) && searchResult.data.length > 0 && (
          <Box
          ref={suggestionBoxRef}
          position="absolute"
           top="80"
            left="780"
            right="0"
            zIndex="10"
            backgroundColor="white"
            boxShadow="md"
            borderRadius="md"
            border="1px solid grey"
            overflow="hidden"
            width="22%"
            height="fit-content"
            bottom="20"
          >
            <List>
              {searchResult.data.slice(0, 5).map((result, index) => (
                <ListItem
                  key={index}
                  p="2"
                  fontSize= "12"
                  paddingTop='20'
                  onClick={() => handleSuggestionClick(result)}
                  cursor="pointer"
                >
                  {result.name}
                </ListItem>
                ))}
                 {searchResult.data.length > 5 && (
                <ListItem
                  p="2"
                  fontSize="12"
                  marginBottom="15"
                  paddingTop="20"
                  onClick={() => handleSeeAllResultsClick()}
                  cursor="pointer"
                  color="#42A2A2">
                  See All Results
                 </ListItem>
                )}
                </List>
              </Box>
          )}
          </Box>
                {isLoggedIn ?(
                <div><CiUser onClick={handleProfileClick} 
                style={{fontSize:"25px", marginRight:"15px", borderLeft:"1px solid rgba(0, 0, 0, 0.2)", paddingLeft:"10px"}}/>
                {dropmenu && (
                  <ul className='profileOption'>
                      <li style={{backgroundColor:"#eee", color:"rgba(0, 0, 0, 0.5)"}}>Hi, {userInfo?.signup?.data?.name}</li>
                      <NavLink to="/Account" style={{textDecoration:"none", cursor:"pointer", color:"black"}}>
                      <li>My Account</li>
                      </NavLink>
                      <NavLink to="/Wishlist" style={{textDecoration:"none", cursor:"pointer", color:"black"}}>
                      <li>My Wishlist</li>
                      </NavLink>
                      <NavLink to="/Orders" style={{textDecoration:"none", cursor:"pointer", color:"black"}}>
                      <li>My Orders</li>
                      </NavLink>
                      <NavLink to="/Wallet" style={{textDecoration:"none", cursor:"pointer", color:"black"}}>
                      <li>My Wallet</li>
                      </NavLink>
                      <li onClick={handleLogout}>Logout</li>
                  </ul>
                )}
                </div>
                ):(
                <>
              <NavLink to='/Login' style={{color:"black", textDecoration:"none"}}>
              <ListItem style={{marginTop:"5px", cursor:"pointer", borderLeft:"1px solid rgba(0, 0, 0, 0.2)", paddingLeft:"10px"}}>Login</ListItem>
              </NavLink>
                </>)}
              
              {isLoggedIn ?(
              <>
              <NavLink to='/Wishlist' style={{color:"black"}}>
              <ListItem>
              <BsHeart style={{height:"20px", width:"20px", marginTop:"12px" }}/>
              </ListItem>
              </NavLink>
              <NavLink to='/Cart' style={{color:"black"}}>
              <ListItem>
              <BsBag style={{marginTop:"11px", fontSize:"20px"}}/>
              {cartItem.results > 0 && (
              <Button className='cartlength'>{cartItem.results}</Button>
              )}
              </ListItem>
              </NavLink>
              </>
              ):(
              <Flex>
              <NavLink to='/Login' style={{color:"black"}}>
              <ListItem>
              <BsHeart style={{height:"20px", width:"20px", marginTop:"12px" }}/>
              </ListItem>
              </NavLink>
               <NavLink to='/Login' style={{color:"black"}}>
               <ListItem>
               <BsBag style={{marginTop:"11px", fontSize:"20px"}}/>
               </ListItem>
               </NavLink>
               </Flex>
              )}
              

              <ListItem><img src={flag} alt="flagIcon" className='flag' style={{marginTop:"5px"}} /></ListItem>
          </UnorderedList>
          </Flex>
      </Flex>
      <hr style={{marginTop:"-5px"}}/>
      </div>
      )}
      </>
    )
  }
