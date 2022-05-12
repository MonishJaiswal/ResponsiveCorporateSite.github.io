import React from "react";
import {NavLink} from "react-router-dom"
import Weather from "./Weather";
import StopWatch from "./StopWatch"

import "./Utilities.css"


const Utilities=()=>{
  return(
    <>
      <div className="utilcards">
        <ul className="buttonlist">
          {/* <div className="utilbar1"></div> */}
          <li className="buttonitem">
        <NavLink className="utilbuttons" to="/weather">Weather</NavLink>
         </li>
           <li className="buttonitem">
         <NavLink className="utilbuttons" to="/stopwatch">Stopwatch</NavLink>
        </li>
         <li className="buttonitem">
        <NavLink className="utilbuttons" to="/calculator">Calculator</NavLink>
          </li>
           <li className="buttonitem">
        <NavLink className="utilbuttons" to="/tictac">TicTac</NavLink>
          </li>
        </ul>
        
      </div>
    </>
  );
}

export default Utilities;