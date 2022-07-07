import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getAllRecipes,
  filterRecipesAZ,
  filterRecipesDiets1,
  filterRecipesDiets2,
  getDiets,
} from "../../redux/actions/actions";
import { Link, useHistory } from "react-router-dom";
import Card from "../Card/Cardd.jsx";
import ss from "./Home.module.css";
import "./button.scss";
import "./checkbox.sass";
import Spinner from "../Spinner/Spinner";
import Pagination from "../Pagination/Pagination";
import DropdownBtn from "../dropdownBtn/DropdownBtn";

//controlar formulario, ruta back /recipes/id,

function Home(props) {

  const [query, setQuery] = useState("");

  const history = useHistory();

  const [check, setCheck] = useState({
    checkedAZ: false,
    checkedZA: false,
    checkedHealth1: false,
    checkedHealth2: false,
  });

  const [diets, setDiets] = useState({
    vegan: false,
    vegetarian: false,
    "gluten free": false,
    "dairy free": false,
    ketogenic: false,
    "whole 30": false,
    primal: false,
    
  });





  React.useEffect(() => {
    props.getDiets();
  }, []);


  React.useEffect(() => {
    var time 
    clearTimeout(time);
  time = setTimeout(() => {
      props.getAllRecipes(query);
      console.log("fasdfasd")
      history.replace({
        search: "",
      });
    }, 1000);

  }, [query]);



  React.useEffect(() => {
    if (check.checkedAZ === true) {
      props.filterRecipesAZ(1);
    } else if (check.checkedZA === true) {
      props.filterRecipesAZ(2);
    } else if (check.checkedHealth1 === true) {
      props.filterRecipesAZ(3);
      console.log("FILTRADO1");
    } else if (check.checkedHealth2 === true) {
      props.filterRecipesAZ(4);
    } else {
      props.getAllRecipes();
    }
    history.replace({
      search: "",
    });
  }, [check]);


  React.useEffect(() => {
    const result = Object.entries(diets)
      .filter(([dietName, isChecked]) => isChecked === true)
      .map(([dietName]) => dietName);

    if (result.length > 0) props.filterRecipesDiets1(result);
    else props.getAllRecipes();
  }, [diets]);




  function handleChangeQuery(e) {
    setQuery(e);
  }

  function handleChangeCheck(e) {
    setCheck({
      checkedAZ: false,
      checkedZA: false,
      checkedHealth1: false,
      checkedHealth2: false,

      [e.target.name]: e.target.checked,
    });
  }

  function handleDiets(e) {
    setDiets({
      ...diets,
      [e.target.name]: e.target.checked,
    });
  }





  let pageN = props.location.search.split("=")[1];
  if (pageN === undefined) pageN = 0; //cuando entre a recipes si intento sacar el query me da undefined

  const since = parseInt(pageN) * 9;
  const till = parseInt(since) + 9;
  const grupoDeRecetas = props.recipes?.slice(since, till);

  //aca hago lo mismo pero adelantandome una pagina, es decir, el control va a ser false hasta que esté en la última pagina donde hay productos
  let controlP = false;
  let controlN = false;
  const controlArr = props.recipes?.slice(since + 9, parseInt(till) + 9);
  //si controlArr es undefined => props.recipes es undefined
  if (!controlArr.length) controlN = true;
  if (parseInt(pageN) <= 0) controlP = true;

  const options = props.diets.map((c) => c.name);


console.log(options)
  
  return (
    <div>
      <div>
        <DropdownBtn
          handleChangeQuery={handleChangeQuery}
          handleChangeCheck={handleChangeCheck}
          handleDiets={handleDiets}
          options={options}
          checkedAZ={check.checkedAZ}
          checkedZA={check.checkedZA}
          checkedHealth1={check.checkedHealth1}
          checkedHealth2={check.checkedHealth2}
          vegan={diets.vegan}
          vegetarian={diets.vegetarian}
          glutenFree={diets.glutenFree}
          dairyFree={diets.dairyFree}
          ketogenic={diets.ketogenic}
          whole30={diets.whole30}
          primal={diets.whole30}
        />
      </div>
      {grupoDeRecetas.length ? (
        <div>
          <div className={ss.containerCards}>
            {grupoDeRecetas.map((r) => {
              return (
                <Card
                  key={r.id}
                  title={r.title}
                  id={r.id}
                  diets={r.diets}
                  img={r.image ? r.image : null}
                />
              );
            })}
          </div>
          <Pagination controlP={controlP} controlN={controlN} pageN={pageN} />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    diets: state.diets,
  };
}

export default connect(mapStateToProps, {
  getAllRecipes,
  filterRecipesAZ,
  filterRecipesDiets1,
  filterRecipesDiets2,
  getDiets,
})(Home);
