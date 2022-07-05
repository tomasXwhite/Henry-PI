import { mapStateToProps } from "../../components/Home/Home";

const initialState = {
  recipes: [],
  recipeDetail: {},
  diets: [],
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_RECIPES":
      return {
        ...state,
        recipes: action.payload,
        recipes_original: action.payload
      };
    case "GET_RECIPE_DETAIL":
      return {
        ...state,
        recipeDetail: action.payload,
      };
    case "GET_DIETS":
      return {
        ...state,
        diets: action.payload,
      };
    case "FILTER_RECIPES":
      if (action.payload === 1) {
        return {
          ...state,
          recipes: state.recipes
            .sort((a, b) => {
              let aa = a.title.toUpperCase();
              let bb = b.title.toUpperCase();
              if (aa < bb) return -1;
              if (aa > bb) return 1;
              return 0;
            })
            .concat(),
        };
      }
      if (action.payload === 2) {
        return {
          ...state,
          recipes: state.recipes
            .sort((a, b) => {
              let aa = a.title.toUpperCase();
              let bb = b.title.toUpperCase();
              if (aa < bb) return 1;
              if (aa > bb) return -1;
              return 0;
            })
            .concat(),
        };
      }
      if (action.payload === 3) {
        return {
          ...state,
          recipes: state.recipes
            .sort((a, b) => {
              let aa = a.healthScore;
              let bb = b.healthScore;
              if (aa < bb) return -1;
              if (aa > bb) return 1;
              return 0;
            })
            .concat(),
        };
      }
      if (action.payload === 4) {
        return {
          ...state,
          recipes: state.recipes
            .sort((a, b) => {
              let aa = a.healthScore;
              let bb = b.healthScore;
              if (aa < bb) return 1;
              if (aa > bb) return -1;
              return 0;
            })
            .concat(),
        };
      }
      break;
    case "FILTER_RECIPES_DIETS_1": {
      let filtredArr = [];
      action.payload.forEach((d) => {
        state.recipes_original.forEach((r) => {
          if (r.diets.includes(d)) {
            if (!filtredArr.includes(r)) filtredArr.push(r);
          }
        });
      });
      console.log("estoy en el reducer", action.payload, filtredArr);
      return {
        ...state,
        recipes: filtredArr,
      };
    }
    //declaro array aux, a mi arr de dietas le hago un forEach, por cada dieta, hago un forEach a las recetas, dentro pregunto si la receta incluye la dieta en posicion del forEach,
    //si la incluye, pregunto si mi arreglo aux no incluye la receta (obj), si el aux no la incluye, pusheo la receta al arreglo, esto es pq esta action es
    //para mostrar las recetas q tengan por lo menos una dieta de las q le llegaron por argumento, y si me encuentro con que una receta
    //tiene dos dietas que están en mi arreglo, ésta receta se va a pushear dos veces, en cambio si cada vez q voy a pushear pregunto antes si la receta ya existe dentro lo evito.

    //al principio cuando hago el get all recipes, meto todas las recetas en otra variable, ya que cada vez q disparo esta accion, me filtra todas las recetas q hay en state.recipes.
    //entonces, la primera funciona bien, pero a la segunda va a recorrer el arreglo ya filtrado con la dieta esa.
    case "FILTER_RECIPES_DIETS_2":
      action.payload.forEach((d) => {
        state.recipes = state.recipes.filter((r) => r.diets.includes(d));
      });
      return {
        ...state,
      };
    //aca hago un forEach a las dietas, por cada dieta a mi propiedad de las recetas le filtro las recetas cuyas dietas incluyan la dieta en posicion del forEach,
    //entonces finalmete, mi propiedad con las recetas va a tener las que tengan como dietas TODAS las enviadas por argumento

    default:
      return state;
  }
};
export default myReducer;
