import logo from './logo.svg';
import './App.css';
import Nav from './Navbar/Nav';
import Home from './Main/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Men from './Main/Men';

function App() {
  return (
    <>
    <Router>
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Men" element={<Men />}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
