import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllRecipes, filterRecipesAZ, filterRecipesDiets1, filterRecipesDiets2 } from "../../redux/actions/actions";
import { Link, Redirect } from "react-router-dom";
// import { useEffect} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
import Card from "../Card/Cardd.jsx";
import ss from "./Home.module.css";
import logo from "../../img/comida.png";
import './button.scss'

function Home(props) {
  const [query, setQuery] = useState("");

  const [check, setCheck] = useState({
    checked: false,
  });

  React.useEffect(() => {
    async function l() {
      await props.getAllRecipes(query);

      if (check.checked === true) await props.filterRecipesDiets1([ "gluten free", "lacto ovo vegetarian"]);
      console.log("entré al useEffect", props.recipes);
    }
    l();
    console.log(query, check)
  }, [query, check]);

  function handleChangeQuery(e) {
    setQuery(e);
  }

  function handleChangeCheck(e) {
    setCheck({
      checked: e.target.checked,
    });
  }

  let pageN = props.location.search.split("=")[1]; //aca accedo al query, luego digo q lo divida por =, ya q el query va a ser ?page=1 y agarre el elemento [1], o sea el numero de pag
  if (pageN === undefined) pageN = 0; //cuando entre a recipes si intento sacar el query me da undefined
  // console.log("pagina: ",pageN)

  const since = parseInt(pageN) * 9; //agarro el numero de pagina multiplicado por 9, si estoy en la pagina 0 me va a traer desde 0, si estoy en la pag 1 me va a traer desde 9, y en la pag 2 me trae desde 18
  const till = parseInt(since) + 9; //el num hasta donde quiero traer, q como son 9pags, agarro el numero desde el q voy a extraer, y le sumo 9,
  const grupoDeRecetas = props.recipes?.slice(since, till);

  //aca hago lo mismo pero adelantandome una pagina, es decir, el control va a ser false hasta que esté en la última pagina donde hay productos
  let controlP = false;
  let controlN = false;
  const controlArr = props.recipes?.slice(since + 9, parseInt(till) + 9); //hago el mismo slice pero sumandole 9 tanto al since como al till
  //si controlArr es undefined => props.recipes es undefined
  if (!controlArr.length) controlN = true; //y si no tiene nada quire decir, q si aprieto de nuevo en next no va a aparecer nada pq no van a haber recipes para renderizar

  if (parseInt(pageN) <= 0) controlP = true; //si el numero d mi pag es 0 o menor, pongo el control de previous en true, asi si estoy en la primera pag, no puedo ir para atras y romper todo

  // console.log(controlN, controlP)

  // if(check.checked) {
  //   console.log('checkeado')

  // } else{
  //   console.log('no checkeado')
  // }
  return (
    <div>
      <selection>
        <form className={ss.center} onSubmit={(e) => e.preventDefault()}>
          <input
            className={ss.bar}
            type="text"
            placeholder="Search..."
            onChange={(e) => handleChangeQuery(e.target.value)} //ejecuto pasandole el valor de lo q dispara el evento, o sea lo q esta escrito
          /> 
          {/* <div className={ss.switch}>
            <input
              type="checkbox"
              id="check"
              className={ss.inputt}
              onChange={(e) => handleChangeCheck(e)}
            />
            <label for="check" className={ss.labell} />
          </div> */}
        </form>
      </selection> 




      
      <div class='container'>
<div class='navv'>
		<menu class='menuu'>
			<div id="demo1" class="menuitemm">
				<a class='aa'>drop</a>
				<menu class='menuu'>
					<div class="menuitemm"><a class='aa'>about</a></div>
               <div class="menuitemm">
                  <a class='aa'>settings</a>
                  <menu class='menuu'>
                     <div class="menuitemm"><a class='aa'>Test 1</a></div>
                     <div class="menuitemm"><a class='aa'>Test 2</a></div>
                     <div class="menuitemm"><a class='aa'>Test 3</a></div>
                     <div class="menuitemm"><a class='aa'>Test 4</a></div>
                  </menu>  
               </div>
					<div class="menuitemm"><a class='aa'>help</a></div>
					<div id="demo2" class="menuitemm">
						<a class='aa'>more</a>
						<menu class='menuu'>
							<div id="demo3" class="menuitemm">
								<a class='aa'>deeper</a>
								<menu class='menuu'>
									<div class="menuitemm"><a class='aa'>deep 1</a></div>
									<div class="menuitemm"><a class='aa'>deep 2</a></div>
									<div class="menuitemm"><a class='aa'>deep 3</a></div>
								</menu>
							</div>
							<div class="menuitemm"><a class='aa'>test</a></div>
						</menu>
					</div>
				</menu>
			</div>
		</menu>
	</div >
</div>



      <div className={ss.containerCards} >
      {grupoDeRecetas.length ? (
        grupoDeRecetas?.map((r) => {
          return (
            <Card
              key={r.id}
              title={r.title}
              id={r.id}
              diets={r.diets}
              img={r.image}
              // summary={r.summary}
              // healthScore={r.healthScore}
            />
          );
        })
      )
      : (
        <div>Loading</div>
        )}
        </div> 

        
























      {controlP === false ? (
        <Link to={`/recipes?page=${parseInt(pageN) - 1}`}>
          <button>Previous page</button>
        </Link>
      ) : (
        <button className={ss.danger}>Previous page</button>
      )}
      <Link to="/recipes?page=0">
        <button>1</button>
      </Link>
      <Link to="/recipes?page=1">
        <button>2</button>
      </Link>
      <Link to="/recipes?page=2">
        <button>3</button>
      </Link>
      <Link to="/recipes?page=3">
        <button>4</button>
      </Link>

      {controlN === false ? (
        <Link to={`/recipes?page=${parseInt(pageN) + 1}`}>
          {" "}
          {/* renderizo el boton q me redirecciona a la next page mientras control de next===false y si es true renderizo un boton rojo q no hace nada*/}
          <button>Next page</button>
        </Link>
      ) : (
        <button className={ss.danger}>Next page</button>
      )}
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    recipes: state.recipes,
  };
}

export default connect(mapStateToProps, { getAllRecipes, filterRecipesAZ, filterRecipesDiets1, filterRecipesDiets2 })(Home);
