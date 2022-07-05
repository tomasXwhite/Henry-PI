import React, { useEffect, useState,} from "react";
import { connect } from "react-redux";
import {
  getAllRecipes,
  filterRecipesAZ,
  filterRecipesDiets1,
  filterRecipesDiets2,
  getDiets
} from "../../redux/actions/actions";
import { Link,  useHistory  } from "react-router-dom";
import {Multiselect} from 'multiselect-react-dropdown'
import Card from "../Card/Cardd.jsx";
import ss from "./Home.module.css";
import "./button.scss";
import "./checkbox.sass";

function Home(props) {


  const [query, setQuery] = useState("");
  const history = useHistory()
  const [check, setCheck] = useState({
    checkedAZ: false,
    checkedZA: false,
    checkedHealth1: false,
    checkedHealth2: false,
    diets: [],
  });


  React.useEffect(() => {
    props.getDiets()
    console.log('dietass')
    console.log(props.diets)

  }, [ ])

  React.useEffect(() => {
    async function l() {
      await props.getAllRecipes(query);
      history.replace({
        search: ''
      });
    }
    l();

    //cada vz q cambie el query o el estado del checkbox va a venir aca, y hago asincrona la funcion asi primero, toma las recetas, y luego si es q entró
    //pq cambió el estado del check va a hacer el pedido de rectas igual y va a entrar en los ifs, que preguntan si la propiedad está checkeada entonces llama a la accion q filtra las recetas

    console.log("entré a useEffect del query");
  }, [query]);

  React.useEffect(() => {
    if (check.checkedAZ === true) {
      props.filterRecipesAZ(1);
    } else
    if (check.checkedZA === true) {
      props.filterRecipesAZ(2);
    } else
    if (check.checkedHealth1 === true) {
      props.filterRecipesAZ(3);
    } else
    if (check.checkedHealth2 === true) {
      props.filterRecipesAZ(4); 
    } else
    if(check.diets?.length > 0 ) {
      props.filterRecipesDiets1(check.diets) 
      console.log("dispatch")
    } else {
      props.getAllRecipes();

    }
    history.replace({
      search: ''
    });

    console.log("useEffect del check", check.diets);

    console.log(props.recipes)
  }, [check]);

  function handleChangeQuery(e) {
    setQuery(e);
  }

  function handleChangeCheck(e) {

    setCheck({
      checkedAZ: false,
    checkedZA: false,
    checkedHealth1: false,
    checkedHealth2: false,
    diets: [],
      [e.target.name]: e.target.checked,
    });
    
  }


  function handleDiets(e) {
 console.log("e: ", e)
    setCheck({
        ...check,
        diets: e.map(d => {      
          return d
        } )
    })
    if(e.length === 0 ) setQuery(" ")
    console.log('handle', check.diets)
    // console.log("")

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


  const options = props.diets.map((c)=>(c.name))

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
                            checked={check.checkedAZ}
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
                            checked={check.checkedZA}
                            onChange={(e) => handleChangeCheck(e)}
                          />
                        </a>
                      </div>
                      <div class="menuitemm">
                        <a class="aa">Diets </a>
                        <menu class="menuu">
                          <div class="menuitemm">
                        <Multiselect className="multiselect"
            isObject={false}
            options={options}
            onSelect={(e)=> handleDiets(e)}
            onRemove={(e) => handleDiets(e)}
            />
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
                                checked={check.checkedHealth1}
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
                                checked={check.checkedHealth2}
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
                img={ r.image ? r.image : null}

              />
            );
          })
        ) : (
          <div>Loading</div>
        )}
      </div>

          {/* <Pagination 
          controlP= {controlP}
          controlN= {controlN}
          /> */}

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
