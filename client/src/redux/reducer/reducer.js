

const initialState = {
    recipes: [],
    recipeDetail: {},

}

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_ALL_RECIPES":
            return {
                ...state,
                recipes: action.payload
            }
        case "GET_RECIPE_DETAIL":
            return {
               ...state,
               recipeDetail: action.payload 
            }
        default: 
            return state


    }

}
export default myReducer;