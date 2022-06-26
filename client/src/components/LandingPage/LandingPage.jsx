import React from "react";
import useDispatch from "react-redux";
import {getAllRecipes} from "../../redux/actions/actions.js";
import s from './LandingPage.Module.css'
import { Link } from 'react-router-dom';


const LandingPage = () => {

    return (
        <div className={s.box}>
            <Link to={'/recipes'}>
            <button className={s.button} ><span>GO</span></button>
            </Link>
        </div>
    )
}
export default LandingPage;