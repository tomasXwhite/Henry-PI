import React from "react";
import {
  getRecipeDetail,
  clearRecipeDetail,
} from "../../redux/actions/actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import s from "./recipeDetail.module.css";
import ReactHtmlParser from "react-html-parser";
import img from "../../img/plato.jpg";
import Spinner from "../Spinner/Spinner";
import HTMLReactParser from "html-react-parser";

function RecipeDetail(props) {
  const { id } = useParams();

  React.useEffect(() => {
    props.getRecipeDetail(id);
    console.log(props.details);
    return props.clearRecipeDetail();
  }, []);

  return props.details.title ? (
    <div className={s.container}>
      <div>
        <h1 className={s.title}>{props.details.title}</h1>
        {props.details.image ? (
          <img src={props.details.image} alt="*recipe img*" className={s.img} />
        ) : (
          <img src={img} alt="img" className={s.img} />
        )}

        <div className={s.info}>
          <div className={s.groups}>
            <div className={s.group}>
              <h3 className={s.hh}>Summary of the recipe:</h3>
              <p className={s.text}>{HTMLReactParser(props.details.summary)}</p>
            </div>
          </div>
          <div className={s.groups}>
            {props.details.dishTypes ? (
              <div className={s.group}>
                <h3 className={s.hh}>Dish type: </h3>
                <p>{props.details.dishTypes}</p>
              </div>
            ) : null}
            {props.details.diets?.length ? (
              <div className={s.group}>
                <h3 className={s.hh}>Diets of recipe: </h3>
                {props.details.diets?.map((d) => {
                  if (typeof d === "object") {
                    return <li>{d.name}</li>;
                  } else return <li>{d}</li>;
                })}
              </div>
            ) : null}
            {props.details.cuisines ? (
              <div className={s.group}>
                <h3 className={s.hh}>Origins of recipe: </h3>
                {props.details.cuisines?.map((c) => {
                  return <li>{c}</li>;
                })}
              </div>
            ) : null}
            {props.details.healthScore ? (
              <div className={s.group}>
                <h3 className={s.hh}>Health Score:</h3>
                <p>{props.details.healthScore} %</p>
              </div>
            ) : null}
          </div>
          {props.details.instructions ? (
            <div className={s.groups}>
              <div className={s.group}>
                <h3 className={s.hh}>Instructions: </h3>
                <p>{ReactHtmlParser(props.details.instructions)}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
}

function mapStateToProps(state) {
  return {
    details: state.recipeDetail,
  };
}

export default connect(mapStateToProps, { getRecipeDetail, clearRecipeDetail })(
  RecipeDetail
);
