import React from "react";
import { Link } from "react-router-dom";
import home from '../../img/index.png'
import styles from "./Nav.module.css"


function Nav(props) {


return (
    <div className={styles.container}>
        <Link  to='/about'>
        <h4 className={styles.about}>About</h4>
        </Link>
       
        <Link to='/recipes'>
          <span className={styles.home} >
            <img id="logoHome" src={home} width="45" height="45" className="d-inline-block align-top"  alt="" />
          </span>
        </Link>
        <Link  to='/createRecipe' >
            <h4 className={styles.create}>Create recipe</h4>
        </Link>
          
      </div>
)

}

export default Nav;