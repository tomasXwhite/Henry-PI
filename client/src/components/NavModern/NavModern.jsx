import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./NavModern.module.css";
import "./NavModern2.scss";

function NavModern(props) {
  //   const [check, setCheck] = useState({
  //       checked: false
  //   })

  //   console.log(window.location.href)
  //   if(window.location.href.includes("createRecipe")) console.log("si incluye Createrecipes")

  // function handleChange(e) {
  //   setCheck({
  //       checked: e.target.checked
  //   })

  // }

  // if(check.checked) {
  //   console.log('checkeado')

  // } else{
  //   console.log('no checkeado')
  // }

  return (
    <nav class="navv2">
      <ul class="ull2">
        <Link to="/recipes">
          <li class="lii2">
            <a class="aa2">Home</a>
          </li>
        </Link>
        <Link to="/about">
          <li class="lii2">
            <a class="aa2">About</a>
          </li>
        </Link>
        <Link to="/recipes/createRecipe">
          <li class="lii2">
            <a class="aa2">Create Recipe</a>
          </li>
        </Link>
        <Link to="/">
          <li class="lii2">
            <a class="aa2">Landing page</a>
          </li>
        </Link>
      </ul>
    </nav>

    //NAV BAR VIEJA

    // <div className={s.container}>
    //   <nav className={s.menu}>
    //     <ul className={s.horizontal}>
    //       <li>
    //         <Link to='/about'>About</Link>
    //       </li> {console.log(window.location.href)}
    //       {  window.location.href !== "http://localhost:3000/recipes" ?
    //       <li>
    //         <Link to='/recipes'>Home</Link>

    //       </li>

    //         : null
    //   }
    //       <li>
    //         <Link to='/recipes/createRecipe'>Create Recipe</Link>

    //       </li>
    //     </ul>
    //   </nav>
    // </div>
  );
}

export default NavModern;

/**
 * 
 * 
 *  <form action="">
                        <div className={s.switch}>

                             <input type='checkbox' id="check" className={s.inputt} onChange={(e)=> handleChange(e)}/>
                            <label for='check' className={s.labell}/>
                        </div>
                    </form>
 */
