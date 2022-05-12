import React, {useState} from "react"
import {NavLink} from "react-router-dom"
import "./Navbar.css"
const NavBar=()=>{
   const [menubutton, setmenubutton]=useState(<i class="fa-solid fa-bars"></i>);
   const [menudisplay, setmenudisplay]=useState(false);
   const menuclick=()=>{
     menubutton==="X"? 
     (setmenubutton(<i class="fa-solid fa-bars"></i>),setmenudisplay(false)):
       (setmenubutton("X"),setmenudisplay(true)) }
  
  return(
    <>
      <div className="navbox">
       <div className="navlogo">
         <span
           style={{ borderLeft:" 3px solid black", 
                    borderRight:" 3px solid black",
                    paddingLeft:"12px",
                    borderRadius:"3px",
                    paddingRight:"12px"}}
            >MJCORP</span>
       </div>
        
       <div className="navbar">  
         
      <NavLink className="tabs" exact activeClassName="active" to="/"><i class="fa-solid fa-house-chimney"></i> Home</NavLink>
         
          <NavLink className="tabs" exact activeClassName="active" to="/utilities"><i class="fa-solid fa-screwdriver-wrench"></i> Tools</NavLink>
         
        <NavLink className="tabs" exact activeClassName="active" to="/products"> <i class="fa-solid fa-shop"></i> Products</NavLink>
         
      <NavLink className="tabs" exact activeClassName="active" to="/contact"><i class="fa-solid fa-address-card"></i> Contact</NavLink>
        </div>
        
         <div className="menubuttondiv">
        <button className="menubuttontab" onClick={menuclick}>{menubutton}</button>
      </div>
        
        </div>

      {  menudisplay ===true &&  <div className="navbarmobbox">
        <div className="navbarmob">  
          <div className="navtabsgroup">
            
        <div className="mobtabs">
      <NavLink onClick={menuclick} className="tabsm" exact activeClassName="active" to="/"><i class="fa-solid fa-house-chimney"></i> Home</NavLink>
          </div>
            
          <div className="mobtabs">
          <NavLink onClick={menuclick} className="tabsm" exact activeClassName="active" to="/utilities"><i class="fa-solid fa-screwdriver-wrench"></i> Tools</NavLink>
           </div>
            
          <div className="mobtabs">
          <NavLink onClick={menuclick} className="tabsm" exact activeClassName="active" to="/products"><i class="fa-solid fa-shop"></i> Products</NavLink>
           </div>
            
          <div className="mobtabs">
      <NavLink onClick={menuclick} className="tabsm" exact activeClassName="active" to="/contact"><i class="fa-solid fa-address-card"></i> Contact</NavLink>
          </div>
         </div>
        </div>
        </div>}

      
      <div className="navbarmobboxb">
        <div className="navbarmobb">  
          <div className="navtabsgroupb">
            
        <div id="firsttab" className="mobtabsb">
      <NavLink className="tabsm" exact activeClassName="active" to="/"><i class="fa-solid fa-house-chimney"></i></NavLink>
          </div>
            
          <div className="mobtabsb">
          <NavLink className="tabsm" exact activeClassName="active" to="/utilities"><i class="fa-solid fa-screwdriver-wrench"></i></NavLink>
           </div>
            
          <div className="mobtabsb">
          <NavLink className="tabsm" exact activeClassName="active" to="/products"><i class="fa-solid fa-shop"></i></NavLink>
           </div>
            
          <div className="mobtabsb">
      <NavLink  className="tabsm" exact activeClassName="active" to="/contact"><i class="fa-solid fa-address-card"></i></NavLink>
          </div>
         </div>
        </div>
        </div>
      
    </>
  );
}

export default NavBar;