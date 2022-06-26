import React from 'react';
import { Link } from 'react-router-dom';



export default function Card(props) {
    return(
        <div>
        <Link to={`/recipes/${props.id}`}>
            <h3>{props.title}</h3>
        </Link>
            <p>{props.diets}</p>

            <img src={props.img} alt="img"/>

        <br></br>
        <br></br>
        

        </div>


    )



}