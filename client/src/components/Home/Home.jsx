import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getAllRecipes,
  filterRecipesAZ,
  filterRecipesDiets1,
  filterRecipesDiets2,
  getDiets
} from "../../redux/actions/actions";
import { Link, Redirect } from "react-router-dom";
// import { useEffect} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
import Card from "../Card/Cardd.jsx";
import ss from "./Home.module.css";
// import logo from "../../img/comida.png";
import "./button.scss";
import "./checkbox.sass";

function Home(props) {
  const [query, setQuery] = useState("");

  const [check, setCheck] = useState({
    checkedAZ: false,
    checkedZA: false,
    checkedDiets: false,
    checkedHealth1: false,
    checkedHealth2: false,
    diets: [],
  });
  const [checkDiets, setCheckDiets] = useState({
    vegan: false,
    vegetarian: false,
    glutenFree: false,
    dairyFree: false
  });

  React.useEffect(() => {
    props.getDiets()
    console.log('dietass')
    console.log(props.diets)
  }, [ ])

  React.useEffect(() => {
    async function l() {
      await props.getAllRecipes(query);
    }
    l();

    //cada vz q cambie el query o el estado del checkbox va a venir aca, y hago asincrona la funcion asi primero, toma las recetas, y luego si es q entró
    //pq cambió el estado del check va a hacer el pedido de rectas igual y va a entrar en los ifs, que preguntan si la propiedad está checkeada entonces llama a la accion q filtra las recetas

    console.log("entré a useEffect del query");
  }, [query]);

  React.useEffect(() => {
    if (check.checkedAZ === true) {
      props.filterRecipesAZ(1);
    }
    if (check.checkedZA === true) {
      props.filterRecipesAZ(2);
    }
    if (check.checkedHealth1 === true) {
      props.filterRecipesAZ(3);
    }
    if (check.checkedHealth2 === true) {
      props.filterRecipesAZ(4);
    }
    if(checkDiets.vegan === true) props.filterRecipesDiets1(["vegan"])
    if(checkDiets.vegetarian === true) props.filterRecipesDiets1(["vegetarian"])
    if(checkDiets.glutenFree === true) props.filterRecipesDiets1(["gluten free"])
    if(checkDiets.dairyFree === true) props.filterRecipesDiets1(["dairy free"])
     
    console.log("useEffect del check");
  }, [check, checkDiets]);

  function handleChangeQuery(e) {
    setQuery(e);
  }

  function handleChangeCheck(e) {
    setCheck({
      [e.target.name]: e.target.checked,
    });
    if (e.target.checked === false) setQuery(" ");
  }


  function handleDiets(e) {
    // if(e.target.checed===true) check.diets.push(e.target.value)
    // else check.diets.filter(d => d === e.target.value)

    // if (e.target.checed === true) {
    //   setCheck({ ...check, diets: e.target.value });
    // } else setCheck({...check, diets:check.diets.filter((d) => d === e.target.value)})
    // console.log('handle diets', check)


    setCheckDiets({
      // ...checkDiets,
      [e.target.name]: e.target.checked
    })

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




  return (
    <div>
      <selection>
        <form className={ss.center} onSubmit={(e) => e.preventDefault()}>
          <div class="maxbuttoncontainer">
            <div class="containerr">
              <div class="navv">
                <menu class="menuu">
                  <div id="demo1" class="menuitemm">
                    <a class="aa">Filter</a>
                    <menu class="menuu">
                      <div class="menuitemm">
                        <a class="aa">
                          A-Z
                          <input
                            type="checkbox"
                            class="toggle"
                            name="checkedAZ"
                            onChange={(e) => handleChangeCheck(e)}
                          />
                        </a>{" "}
                      </div>
                      <div class="menuitemm">
                        <a class="aa">
                          Z-A{" "}
                          <input
                            type="checkbox"
                            class="toggle"
                            name="checkedZA"
                            onChange={(e) => handleChangeCheck(e)}
                          />
                        </a>
                      </div>
                      <div class="menuitemm">
                        <a class="aa">Diets </a>
                        <menu class="menuu">
                          <div class="menuitemm">
                            <a class="aa">
                              Vegan
                              <input
                                type="checkbox"
                                class="toggle"
                                name="vegan"
                                onChange={(e) => handleDiets(e)}
                              />
                            </a>
                          </div>
                          <div class="menuitemm">
                            <a class="aa">
                              Vegetarian
                              <input type="checkbox" class="toggle" name="vegetarian"  onChange={(e) => handleDiets(e)}/>
                            </a>
                          </div>
                          <div class="menuitemm">
                            <a class="aa">
                              Gluten free
                              <input type="checkbox" class="toggle" name="glutenFree"  onChange={(e) => handleDiets(e)}/>
                            </a>
                          </div>
                          <div class="menuitemm">
                            <a class="aa">
                              Dairy free
                              <input type="checkbox" class="toggle" name="dairyFree"  onChange={(e) => handleDiets(e)}/>
                            </a>
                          </div>
                        </menu>
                      </div>
                      <div id="demo2" class="menuitemm">
                        <a class="aa">Health Score</a>
                        <menu class="menuu">
                          <div class="menuitemm">
                            <a class="aa">
                              ASC
                              <input
                                type="checkbox"
                                class="toggle"
                                name="checkedHealth1"
                                onChange={(e) => handleChangeCheck(e)}
                              />
                            </a>
                          </div>
                          <div class="menuitemm">
                            <a class="aa">
                              DESC
                              <input
                                type="checkbox"
                                class="toggle"
                                name="checkedHealth2"
                                onChange={(e) => handleChangeCheck(e)}
                              />
                            </a>
                          </div>
                        </menu>
                      </div>
                    </menu>
                  </div>
                </menu>
              </div>
            </div>
          </div>

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

      <div className={ss.containerCards}>
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
        ) : (
          <div>Loading</div>
        )}
      </div>
      <div className={ss.pagination}>
        {controlP === false ? (
          <Link to={`/recipes?page=${parseInt(pageN) - 1}`} className={ss.aa}>
            <button>Previous page</button>
          </Link>
        ) : (
          <button className={ss.danger}>Previous page</button>
        )}
        <Link to="/recipes?page=0" className={ss.aa}>
          <button>1</button>
        </Link>
        <Link to="/recipes?page=1" className={ss.aa}>
          <button>2</button>
        </Link>
        <Link to="/recipes?page=2" className={ss.aa}>
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
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    diets: state.diets
  };
}

export default connect(mapStateToProps, {
  getAllRecipes,
  filterRecipesAZ,
  filterRecipesDiets1,
  filterRecipesDiets2,
  getDiets
})(Home);
