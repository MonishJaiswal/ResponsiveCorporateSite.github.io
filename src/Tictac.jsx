import React, {useState} from "react"

import "./Tictac.css";

const Tictac=()=>{
  const [sign, setsign] = useState("O"); 
  
  const [value1, setvalue1]=useState(".")
  const onclick1=()=>{
    setvalue1(sign);
    sign==="O"?setsign(<i id="tictacX" class="fa-solid fa-x"></i>):setsign("O");
  }
  
   const [value2, setvalue2]=useState(".")
  const onclick2=()=>{
    setvalue2(sign);
    sign==="O"?setsign(<i id="tictacX" class="fa-solid fa-x"></i>):setsign("O");
  }

  const [value3, setvalue3]=useState(".")
  const onclick3=()=>{
    setvalue3(sign);
    sign==="O"?setsign(<i id="tictacX" class="fa-solid fa-x"></i>):setsign("O");
  }

  const [value4, setvalue4]=useState(".")
  const onclick4=()=>{
    setvalue4(sign);
    sign==="O"?setsign(<i id="tictacX" class="fa-solid fa-x"></i>):setsign("O");
  }

  const [value5, setvalue5]=useState(".")
  const onclick5=()=>{
    setvalue5(sign);
    sign==="O"?setsign(<i id="tictacX" class="fa-solid fa-x"></i>):setsign("O");
  }

  const [value6, setvalue6]=useState(".")
  const onclick6=()=>{
    setvalue6(sign);
    sign==="O"?setsign(<i id="tictacX" class="fa-solid fa-x"></i>):setsign("O");
  }

  const [value7, setvalue7]=useState(".")
  const onclick7=()=>{
    setvalue7(sign);
    sign==="O"?setsign(<i id="tictacX" class="fa-solid fa-x"></i>):setsign("O");
  }

  const [value8, setvalue8]=useState(".")
  const onclick8=()=>{
    setvalue8(sign);
    sign==="O"?setsign(<i id="tictacX" class="fa-solid fa-x"></i>):setsign("O");
  }

  const [value9, setvalue9]=useState(".")
  const onclick9=()=>{
    setvalue9(sign);
    sign==="O"?setsign(<i id="tictacX" class="fa-solid fa-x"></i>):setsign("O");
  }

  const restart=()=>{
    setvalue1(".");
    setvalue2(".");
    setvalue3(".");
    setvalue4(".");
    setvalue5(".");
    setvalue6(".");
    setvalue7(".");
    setvalue8(".");
    setvalue9(".");
  }
  
  return(
    <>
      <div className="title"><h1>TicTac</h1></div>
      <div className="body">
      <div className="bigbox">
      <div className="box1">
      <button className="gsquare" onClick={onclick1}>{value1}</button>
      <button className="gsquare" onClick={onclick2}>{value2}</button>
      <button className="gsquare" onClick={onclick3}>{value3}</button>
        </div>
        <div className="box2">
      <button className="gsquare" onClick={onclick4}>{value4}</button>
       <button className="gsquare" onClick={onclick5}>{value5}</button>
         <button className="gsquare" onClick={onclick6}>{value6}</button>
      </div>
       <div className="box3">
      <button className="gsquare" onClick={onclick7}>{value7}</button>
       <button className="gsquare" onClick={onclick8}>{value8}</button>
         <button className="gsquare" onClick={onclick9}>{value9}</button>
      </div>
      </div>
      </div>
      <div className="tictacrestart">
       <button className="ticrestart" onClick={restart}>Restart</button>
      </div>
    </>
  );
}
export default Tictac;