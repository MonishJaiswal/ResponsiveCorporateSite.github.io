import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import Contact from "./Contact"
import Products from "./Products"
import BuyPage from "./BuyPage"
import Utilities from "./Utilities"
import Weather from "./Weather"
import StopWatch from "./StopWatch"
import Calc from "./Calc"
import Tictac from "./Tictac"






const App=()=>{
  return(
    <>
      <div className="siteBackground"> 
      <div className="bg_set">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/buypage" element={<BuyPage />} />
        <Route path="/utilities" element={<Utilities />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/calculator" element={<Calc />} />
        <Route path="/tictac" element={<Tictac />} />
      </Routes>
      <div className="footer">
        <h3>Created by - Monish</h3>
      </div>
      </div>
     </div>
    </>
  );
}

export default App;