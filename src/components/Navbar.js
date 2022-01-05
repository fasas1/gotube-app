import React from 'react'

const Navbar = () => {
   return (
      <div className="ui secondary stackable menu">
      <a className="active item">
        GoTube
        <i className=" red play icon large"></i>
      </a>
     
      
      <div className="right menu">
       
        <a className="ui item">
         Downloads
         <i  className=' red download icon large'></i>
        </a>
        <a className="item">
           Videos
       <i  className=' red video icon large'></i>
      </a>
      </div>
    </div>
   )
}

export default Navbar
