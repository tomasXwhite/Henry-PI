import React from "react";
import { getRecipeDetail } from "../../redux/actions/actions";
import { useEffect  } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";


function RecipeDetail(props) {
    const {id} = useParams()

    React.useEffect(()=> {
        props.getRecipeDetail(id)
      }, [])

return(


    <div>buenas shavale 
    <p>{props.details.title}</p>
    </div>
)

}


function mapStateToProps(state) {
    return {
        details: state.recipeDetail
    }
}

export default connect(mapStateToProps, {getRecipeDetail})(RecipeDetail)