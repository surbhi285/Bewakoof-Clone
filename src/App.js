import logo from './logo.svg';
import './App.css';
import Nav from './Navbar/Nav';
import Home from './Main/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Men from './Main/Men';
import ProductDetail from './Main/ProductDetail';
import Login from './Main/Login';
import SignUp from './Main/SignUp';
import Wishlist from './Main/Wishlist';
import Cart from './Main/Cart';
import Categories from './Main/Categories';
import BrandCategories from './Main/BrandCategories';
import Account  from './Main/Account';
import Orders from './Main/Orders';
import Wallet from './Main/Wallet';
import Address from './Main/Address';
import Profile from './Main/Profile';
import ResCategories from './Main/ResCategories';
import NotAvailable from './Main/NotAvailable';
import Tribe from './Main/Tribe';
import Payment from './Main/Payment';
import OrderInfo from './Main/OrderInfo';
import SearchResult from './Main/SearchResult';
import ContactUs from './Main/ContactUs';




function App() {
  return (
    <>
    <Router>
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories/:id" element={<Men />}/>
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route path="/Wishlist" element={<Wishlist/>}/>
    <Route path="/Cart" element={<Cart />}/>
    <Route path="/Login" element={<Login />} />
    <Route path="/SignUp" element={<SignUp />}/>
    <Route path="/subcategories/:gender/:id" element={<Categories/>}/>
    <Route path="/brand/:gender/:special" element={<BrandCategories />}/>
    <Route path="/Account" element={<Account />}/>
    <Route path="/Orders" element={<Orders />}/>
    <Route path="/Wallet" element={<Wallet />}/>
    <Route path="/Address" element={<Address/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/ResCategory/:id" element={<ResCategories/>}/>
    <Route path="/NotAvailable" element={<NotAvailable/>}/>
    <Route path='/Tribe' element={<Tribe/>}/> 
    <Route path="/Payment" element={<Payment/>}/>
    <Route path="/OrderInfo/:id" element={<OrderInfo/>}/>
    <Route path= '/SearchResult/:id' element={<SearchResult />}/>
    <Route path='/ContactUs' element={<ContactUs/>}/>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
