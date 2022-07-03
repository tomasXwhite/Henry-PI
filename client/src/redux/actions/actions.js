import axios from "axios";


export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPE_fDETAIL = "GET_RECIPE_DETAIL";
export const FILTER_RECIPES_AZ = "FILTER_RECIPES_AZ";
export const FILTER_RECIPES_DIETS_1 = "FILTER_RECIPES_DIETS_1";
export const FILTER_RECIPES_DIETS_2 = "FILTER_RECIPES_DIETS_2";
// export const ACTION6 = "ACTION6";
// export const ACTION7 = "ACTION7";

export const getAllRecipes = (query) => {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/recipes${query ? `?title=${query}` : '' }`)  //en el axios no tengo q pasarlo a json,
      .then((response) => response.data)
      .then(r => dispatch({ type: "GET_ALL_RECIPES", payload: r }))
  };
};




export const getRecipeDetail = (id) => {
    return function(dispatch) {
      return axios.get(`http://localhost:3001/recipes/${id}`)
      .then((response) => response.data)
      .then((r) => dispatch({ type: "GET_RECIPE_DETAIL", payload: r }))
    }
}

export const getDiets = () => {
  return function(dispatch) {
    return axios.get('http://localhost:3001/diets')
    .then(r => r.data)
    .then(r => dispatch({type: "GET_DIETS", payload: r}))
  }
}
 
export const filterRecipesAZ = (option) => {           //si ejecuto la func con 1 me va a hacer de a-z y si lo hago con 2 me hace de z-a, y si lo hago con 3 me va a ordenar por health
  return function(dispatch) {
    dispatch({type: "FILTER_RECIPES", payload: option})
  }
}

export const filterRecipesDiets1 = (diets) => {
  return function(dispatch) {
    dispatch({type: "FILTER_RECIPES_DIETS_1", payload: diets})
  }      //esta es la opcion que devuelve las dietas que tengan por lo menos UNA de las dietas seleccionadas,
}

export const filterRecipesDiets2 = (diets) => {
  return function(dispatch) {
    dispatch({type: "FILTER_RECIPES_DIETS_2", payload: diets})
  }
}

export const newRecipe = async (recipe) => {
  // return axios({
  //       method: 'post',
  //       url: 'http://localhost:3001/recipes',
  //       data : recipe
  //   })
  await  axios.post('http://localhost:3001/recipes', { 
    
    ...recipe
    
    
 })
.then(v => console.log("si se pudoooooooo", v), err => console.log(err))
}