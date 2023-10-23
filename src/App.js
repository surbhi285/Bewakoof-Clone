import logo from './logo.svg';
import './App.css';
import Nav from './Navbar/Nav';
import Home from './Main/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Men from './Main/Men';
// import Women from './Main/Women';
import ProductDetail from './Main/ProductDetail';
import Login from './Main/Login';
import SignUp from './Main/SignUp';
import Filter from './Main/Filter';
import Wishlist from './Main/Wishlist';
import Cart from './Main/Cart';



function App() {
  return (
    <>
    <Router>
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories/:id" element={<Men />}/>
    {/* <Route path="/Women" element={<Women />}/> */}
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route path="/wishlist" element={<Wishlist/>}/>
    <Route path="/Cart" element={<Cart />}/>
    <Route path="/Login" element={<Login />} />
    <Route path="/SignUp" element={<SignUp />}/>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
