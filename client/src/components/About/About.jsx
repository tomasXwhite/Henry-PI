import React from "react";
import { Redirect } from "react-router-dom";
import ss from "./About.module.css";

function About() {


 function handleClick(e)  {
  <Redirect to='/'/>
  }
  return (
    <div>
      <div className={ss.dropdown}>
        <button className={ss.dropbtn} onClick={()=> handleClick}>
          Dropdown
        </button>
        <div clasName={ss.dropdownContent}>
          <button className={ss.btnLink}>Link 1</button>
          <button className={ss.btnLink}>Link 2</button>
          <button className={ss.btnLink}>Link 3</button>
        </div>
      </div>
    </div>
  );
}

export default About;
