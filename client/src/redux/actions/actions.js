import axios from "axios";


export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
// export const ACTION3 = "ACTION3";
// export const ACTION4 = "ACTION4";
// export const ACTION5 = "ACTION5";
// export const ACTION6 = "ACTION6";
// export const ACTION7 = "ACTION7";

export const getAllRecipes = (query) => {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/recipes${query ? `?name=${query}` : '' }`)  //en el axios no tengo q pasarlo a json,
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
