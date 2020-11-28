import React from "react";
import  "./Footer.scss";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';

const Footer = () =>{

  return (
    <React.Fragment>
    <ul className="footer">
      <div className="footer-logo">
       <h1>Task<span>Runner</span>.</h1>
      </div>
      <li>
        <span>Address</span>
        <p>Noukova Street, 7D Lviv, Ukrain</p>
      </li>
      <li>
        <span>PortFolio</span>
        <p>olega.chuchman@taskrunner.com</p>
      </li>
      <li>
        <span style={{paddingLeft: "60%", cursor: "pointer"}}><GitHub fontSize="large"/></span>
      </li>
      <li>
        <span style={{paddingLeft: "30%", cursor: "pointer"}}><LinkedInIcon fontSize="large"/></span>
      </li>

    </ul>

    <div className="footer-copyright">
    <span>2020 TaskRunner &copy; All right reserved.</span>
    </div>
    </React.Fragment>
  )
}

export default Footer;