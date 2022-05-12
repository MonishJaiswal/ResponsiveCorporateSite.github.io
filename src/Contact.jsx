import React from "react"
import "./Contact.css"

import {Conarr} from "./Social"

const Contact=()=>{
  //const [data, setdata]=useState(Conarr);
  return(
    <>
      <div className="contacttitle">
      <h1>Please select the plateform to contact us</h1>
      </div>

    <div className="topbody">
      <div className="topbody1">
      {
      Conarr.map((ele)=>{
        return(
          <div className="body1">
          <>
            <a href={ele.link} target="_blank">
            
            <div className="cards">
              <div className="card">
                 <img className="image" src={ele.img} alt={ele.name} />
                <div className="name1">
                  <p className="name2">{ele.name}</p>
                </div>
              </div>
            </div>
            
              </a>
          </>
          </div>
        );
      })
      }
      </div>
      </div>
    </>
  );
}
      

export default Contact;