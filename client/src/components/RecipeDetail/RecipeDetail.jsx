import React from "react";
import { getRecipeDetail } from "../../redux/actions/actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import s from "./recipeDetail.module.css";
import ReactHtmlParser from "react-html-parser";
import img from '../../img/plato.jpg'

function RecipeDetail(props) {
  const { id } = useParams();
console.log("golasdfmasdj")
  React.useEffect(() => {
    props.getRecipeDetail(id);
    console.log(props.details)
  }, [ ]);
  return (
    <div className={s.container}>
        <h1 className={s.title}>{props.details.title}</h1>
        {
          props.details.image ?
          <img src={props.details.image} alt="*recipe img*" className={s.img} />
          : <img src={img} alt="img" className={s.img}/>
        }

      <div className={s.info}>
        <div className={s.groups}>
          <div className={s.group}>
            <h3 className={s.hh}>Summary of the recipe:</h3>
            <p className={s.text}>{ReactHtmlParser(props.details.summary)}</p>
          </div>
        </div>
        <div className={s.groups}>
        { props.details.dishTypes ?
          <div className={s.group}>
            <h3 className={s.hh}>Dish type: </h3>
            <p>{props.details.dishTypes}</p>
          </div>
          : null }
{ props.details.diets?.length ?
          <div className={s.group}>
            <h3 className={s.hh}>Diets of recipe: </h3>
            {props.details.diets?.map((d) => {
              return <li>{d}</li>;
            })}
          </div>
: null}
          {props.details.curisines ? 
          <div className={s.group}>
            <h3 className={s.hh}>Origins of recipe: </h3>
            {props.details.cuisines?.map((c) => {
              return <li>{c}</li>;
            })}
          </div>
          : null }
          {props.details.healthScore ?
          <div className={s.group}>
            <h3 className={s.hh}>Health Score:</h3>
            <p>{props.details.healthScore} %</p>
          </div>
          : null}
        </div>
        {/* <div> */}
          {props.details.instructions ? (
            <div className={s.groups}>
              <div className={s.group}>
              <h3 className={s.hh}>Instructions: </h3>
              <p>{ReactHtmlParser(props.details.instructions)}</p>
            </div>
            </div>
          ) : null}
        {/* </div> */}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    details: state.recipeDetail,
  };
}

export default connect(mapStateToProps, { getRecipeDetail })(RecipeDetail);
