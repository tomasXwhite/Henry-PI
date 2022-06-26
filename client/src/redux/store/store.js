import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import myReducer from "../reducer/reducer.js"              //importar el reducer




const store = createStore(
    myReducer,              //reducer
    applyMiddleware(thunk)        

);

export default store