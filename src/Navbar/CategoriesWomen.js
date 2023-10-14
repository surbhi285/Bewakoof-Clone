import { Container } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const OptionWomen =()=>{
    return(
    <Container style=
    {{backgroundColor:"white", 
    zIndex:"100", 
    // marginTop:"25px", 
    position:"absolute",
    width:"500px",
    border:"1px solid rgba(0, 0, 0, 0.2)",
    borderTop:"none",
    height:"300px",
    transition: "transform 0.3s ease",
    transformOrigin: "top",
    transform: "translateY(0)",
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
    Top
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Shirts
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Kurti
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    T-Shirt
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Graphic T-Shirt
    </li>
    </NavLink>
    <br/>
    <NavLink to='' style={{ color: "black", textDecoration: "none" }}>
    <li className="listItem">
    Dresses
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    JumpSuit
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
    Cargo Pants
    </li>
    </NavLink>
    <NavLink to='' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Parachute Pants
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
    </Container>
    );
}
export default OptionWomen;