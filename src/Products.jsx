import React, {useState} from "react"
import {ProductList} from "./ProductList"
import "./Products.css"
import BuyPage from "./BuyPage"
import {NavLink} from "react-router-dom"



const Products=()=>{
  //const [data, setdata]=useState(ProductList);
  return(
    <>
      <div className="productstitle">
        <h1>These are Our Products</h1>
      </div>
      <div  className="pbodybox">
      <div className="pbody">
      {
        ProductList.map((ele)=>{
          return(
            <>
              
              <div  className="pbody1">
              <div className="pcard">
              <div className="pname">
              <h2>{ele.name}</h2>
                </div>
              <div className="pdetails">
              <p>{ele.details}</p>
                </div>
              <div className="price">
              <h3>Price- {ele.price} ₹ only</h3>
                </div>
              <div className="purchase">
                <NavLink to="/buypage">
              <button className="pbutton"
                >Order</button>
                  </NavLink>
                </div>
              </div>
              </div>
            </>
        );
        })
      }
        </div>
        </div>
    </>
  );
}
export default Products;