import React,{useState,useEffect} from "react"
import "./Weather.css"


const Weather=()=>{
  const [city, setcity]=useState("delhi");
  const [wcdata, wscdata]=useState();
  
  
  useEffect(()=> {
  const fetchData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c65f8323741de333a33665c21c50b7a2&units=metric`
    );
    const data = await response.json();
    wscdata(data.main);
  };
    fetchData();
  },[city])

  
  return(
    <>
      <div className="woutbox">
      <div className="wbox">
      
        <div className="wball1"></div>
        <div className="wball2"></div>
        <div className="wball3"></div>
        <div className="wball4"></div>
        <div className="wball5"></div>

        <div style={{marginTop:"-40px"}}>
        <div className="title">
      <h2>Weather</h2>
          </div>
        <div className="wsearchbar">
      <i style={{fontSize:30, marginTop:10 }} className="fa-solid fa-magnifying-glass-location"></i>
      <input type='search'
        className="wsearch" onChange={(event)=>{setcity(event.target.value)}} value={city}></input>
          </div>
      <div className="wout">
      {!wcdata ? <h4>Data Not Available</h4> :
        <>
          <p style={{textTransform:"capitalize"}}><i style={{fontSize:20, marginRight:7,}} id="wicon" className="fa-solid fa-location-dot"></i>{city}</p>
          <p><i style={{fontSize:20, marginRight:7,}} id="wicon" className="fa-solid fa-temperature-full"></i> Temp: {wcdata.temp}°Cel</p>
          <p><span style={{fontSize:20, marginRight:7,fontWeight:"bold"}}
               id="wicon">C</span> Feels liks: {wcdata.feels_like}°Cel</p>
          <p><i style={{fontSize:20, marginRight:7,}} id="wicon" className="fa-solid fa-heading"></i> Humidity: {wcdata.humidity}%</p>
      </>
      }
        </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default Weather;
