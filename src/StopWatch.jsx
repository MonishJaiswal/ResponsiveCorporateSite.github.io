import React,{useState,useEffect} from "react"
import "./StopWatch.css"

const StopWatch=()=>{
  const [min, setmin]=useState(0);
  const [sec, setsec]=useState(0);
  const [milisec, setmilisec]=useState(0);
  const [timeon, settimeon]=useState(false);
  const [btext, setbtext]=useState("start")
  const [bcolor, setbcolor]=useState("green")

  useEffect(()=>{
    let interval =null;
    
    if(timeon){
      setbtext("stop")
      interval=setInterval(()=>{
        setmilisec(ptime =>ptime+1)
      },10)
    } else{
      setbtext("start")
      clearInterval(interval)
    }
    return ()=>clearInterval(interval)
  },[timeon])

  
    if(milisec===100){
       setsec(sec+1);
       setmilisec(0);
    };
    if(sec===60){
      setmin(min+1);
      setsec(0);
    }
  const settime=()=>{
    setmilisec(0);
    setsec(0);
    setmin(0);
    settimeon(false);
    setbtext("start");
  }
  
  
  return(
    <>
      <div className="watchbox">
        <div className="watchbody">
         <div className="sball"></div>
          <div className="watchtitle">
          <h1>Stopwatch</h1>
          </div>
          <div className="sbar"></div>
        <div className="Watchdisplay">
      <h1>{min<10?"0"+min:min}:{sec<10?"0"+sec:sec}:{milisec<10?"0"+milisec:milisec}</h1>
          </div>
        <div className="buttonbox">
      <button className="button" onClick={()=>{timeon===false ?settimeon(true) :settimeon(false)}}>{btext}</button>
      <button className="button" onClick={settime}>Reset</button>
      </div>
      </div>
      </div>
    </>
  );
}
export default StopWatch;