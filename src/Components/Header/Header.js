import React from 'react'
import {Link} from "react-scroll";
import "./Header.scss";

const Header = (props) =>{

  return (
    <div className="header">
      <div className="header-logo">
        Task<span>Runner</span>
      </div>
      <ul className="header-items">
        <li><Link to="address" smooth="true"> Phone Book</Link></li>
        <li><Link to="task" smooth="true"> Task Maneger</Link></li>
        <li><Link to="contact" smooth="true"> Contact Us</Link></li>
      </ul>
    </div>
  )
}

export default Header;