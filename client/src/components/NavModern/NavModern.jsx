import React, {useState} from "react";
import { Link } from "react-router-dom";
import s from "./NavModern.module.css";

function NavModern(props) {


    const [check, setCheck] = useState({
        checked: false
    })

    console.log(window.location.href)
    if(window.location.href.includes("createRecipe")) console.log("si incluye Createrecipes")
  
  function handleChange(e) {
    setCheck({
        checked: e.target.checked
    })


  }
  
  if(check.checked) {
    console.log('checkeado')

  } else{
    console.log('no checkeado')
  }
  
    return (


    //NAV BAR POR SI ESTOY EN HOME



    <div className={s.container}>
      <nav className={s.menu}>
        <ul className={s.horizontal}>
          <li>
            <Link to='/about'>About</Link>
          </li>
          { window.location.href.includes("createRecipe") ?
          <li>
            <Link to='/recipes'>Home</Link>
            
          </li>

            : <li>
                 <a>Filter</a>
            <ul className={s.vertical}>
              <li>
                <a>A-Z
                    <form action="">
                        <div className={s.switch}>

                             <input type='checkbox' id="check" className={s.inputt} onChange={(e)=> handleChange(e)}/>
                            <label for='check' className={s.labell}/>
                        </div>
                    </form>
                </a>
              </li>
              <li>
                <a>health score</a>
              </li>
              <li>
                <a>tipos de dieta</a>
              </li>
            </ul>
          </li>







          }
          <li>
            <Link to='/recipes/createRecipe'>Create Recipe</Link>
            
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavModern;
