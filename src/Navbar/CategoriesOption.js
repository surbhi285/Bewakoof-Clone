import { Container } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const OptionMen =()=>{
    return(
    <Container style=
    {{backgroundColor:"white", 
    zIndex:"100", 
    // marginTop:"25px", 
    position:"absolute",
    width:"500px",
    border:"1px solid rgba(0, 0, 0, 0.2)",
    borderTop:"none",
    height:"400px",
    
    }}>
    <div style={{ position: "absolute", backgroundColor: "white", width: "500px" }}>
    <ul className="ul" style={{flex:"1"}}>
    <NavLink to=''style={{ color: "black", textDecoration: "none" }}>
    <li className="listItem" style={{marginTop:"20px"}}>
    TopWear
    </li>
    </NavLink>
    <NavLink to='' style={{color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    T-Shirts
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Shirts
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Kurta
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Graphic T-Shirt
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Oversized T-Shirt
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Half Sleeve T-Shirt
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Sweaters
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
     Hoodies
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    TrackSuit
    </li>
    </NavLink>
    </ul>
    </div>
    <div style={{
          flex: 1, // Right column
          position: "relative",
          marginTop: "20px",
          backgroundColor: "white",
          marginLeft:"250px", }}>
      
    <ul className="ul" flex="1">     
    <NavLink to='' style={{ color: "black", textDecoration: "none" }}>
    <li className="listItem">
    Bottom Wear
    </li>
    </NavLink>
    <NavLink to='' style={{ color:"rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Jeans
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Joggers
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Pyjama
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Track Pants
 </li>
</NavLink>
<NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
<li className="listItem">
Shorts
</li>
</NavLink>
<NavLink to='' style={{ color:"rgba(45,45,45,.5)", textDecoration: "none" }}>
<li className="listItem">
Trousers
</li>
</NavLink>
<br />
</ul>
</div>
<div style={{ position: "absolute", marginTop: "20px", backgroundColor: "white",marginLeft:"250px"}}>
      
    <ul className="ul" flex="1">     
    <NavLink to='' style={{ color: "black", textDecoration: "none" }}>
    <li className="listItem">
   Winter Wear
    </li>
    </NavLink>
    <NavLink to='' style={{ color:"rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Hoddies
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Joggers
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Sweaters
    </li>
    </NavLink>
    </ul>
    </div>
    </Container>
    );
}
export default OptionMen;