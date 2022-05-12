import React, {useState} from "react"
import "./Calc.css"


const Calc=()=>{
  const[probl,setprobl]=useState();
  const[solution,setsolu]=useState("Solution");
  const disp=()=>{
    setsolu(eval(probl));
  }

  return(
    <>
      <div className="calbox">
        <div className="calbody">
          <div className="caltitle"><h1>Calculator</h1></div>
          <div className="barbox">
          <div className="calbar"></div>
          </div>
         <div className="calsolbox">  
          <div className="calsol"> 
      {solution}
          </div>
           </div>
          <div className="calprob">
      <input className="probdisplay" type="text" placeholder="enter your math problem" onChange={(eve)=>{setprobl(eve.target.value)}}  />
            </div>
       <div className="calbuttonbox">
      <button className="calbutton" onClick={disp}>solve</button>
        </div>
          </div>
      </div>
    </>
  );
}
export default Calc;