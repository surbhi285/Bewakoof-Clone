import logo from './logo.svg';
import './App.css';
import Nav from './Navbar/Nav';
import Home from './Main/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Men from './Main/Men';
import Women from './Main/Women';
import ProductDetail from './Main/ProductDetail';


function App() {
  return (
    <>
    <Router>
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Men" element={<Men />}/>
    <Route path="/Women" element={<Women />}/>
    <Route path = "/product/:id" element={<ProductDetail />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
