import React, {useState} from "react";
import {TextField,Button,withStyles} from '@material-ui/core';
import "./Contact.scss";
import Snackbar from "../snackbar/snackbar";
const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #1E293B 30%, #565E72 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    fontSize: "1.2rem",
    padding: '0 30px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);
const Contact = () => {
  const [openModel, setOpenModel] = useState(false);
  const openModelToggle = ()=>{
    setOpenModel(true);
    setTimeout(()=>{
      setOpenModel(false);
    }, 6000)
  }
  return (
    <div className="Contact" id="contact">
      <div  className="Contact-side--left">
      </div>
      <div className="Contact-side--right">
        <span className="Contact-side--right--texthead" >Contact Us</span>
        <div className="Contact-side--right-inputTop" > 
        <TextField
          id="outlined-textarea"
          label="Name"
          placeholder="Enter Your Name"
          multiline
          variant="outlined"
        />
        <TextField
          id="outlined-textarea"
          label="Phone"
          placeholder="Enter Phone Number"
          multiline
          variant="outlined"
        /></div>
         <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={9}
          fullWidth
          variant="outlined"
        />

        <StyledButton size="large" onClick={openModelToggle}>
            Contact Us
        </StyledButton>
     {openModel && <Snackbar/>}
      </div>
    </div>
  );
};

export default Contact;
