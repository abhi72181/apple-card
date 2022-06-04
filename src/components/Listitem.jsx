import React from "react";
import "./Listitem.css"
const Listitem = ({ children, bg }) => {
 
  return (
      <div className='main-container' style={{backgroundColor:`${bg}`}}>
          {children}
          
          
      </div>
  )
};

export default Listitem;
