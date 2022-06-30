import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

export default function Card(props) {
  return (
    // <div className={s.container}>
    // <Link to={`/recipes/${props.id}`}>
    //     <img src={props.img} className={s.img}alt="img"/>
    // </Link>
    //     <h3 className={s.info}>{props.title}</h3>
    //     <p className={s.info1}>{props.diets}</p>

    // <br></br>
    // <br></br>

    // </div>
    <div class="container">
	<div class="card">
		<figure class="card__thumb">
			<img src={props.img}  alt="Picture by Kyle Cottrell" class="card__image"/>
			<figcaption class="card__caption">
				<h2 class="card__title">{props.title}</h2>
				<p class="card__snippet">{props.diets.map(d => <p>{d}</p>)}</p>
                <Link to={`/recipes/${props.id}`}>
				<a class="card__button">Read more</a>
                </Link>
			</figcaption>
		</figure>
	</div>
    </div>
  );
}
