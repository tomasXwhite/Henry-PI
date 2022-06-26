import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { getAllRecipes } from '../../redux/actions/actions';
import { Link } from "react-router-dom";
// import { useEffect} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
import Card from '../Card/Cardd.jsx';
import ss from './Home.module.css'


function Home(props) {
    
  const [query, setQuery] = useState('');

  React.useEffect(()=> {
    props.getAllRecipes(query)
  }, [query])


  function handleChange(e) {
    setQuery(e)
  }

        return (
        <div>
          Hola 
          <selection>
        <form className={ss.center} >
          <input className={ss.bar}
            type="text"
            placeholder="Search..."
            onChange={(e) => handleChange(e.target.value)}   //ejecuto pasandole el valor de lo q dispara el evento, o sea lo q esta escrito
          />
        </form>
      </selection>
          {
           props.recipes?.map(r => {
            
            return (
            <Card
            key={r.id}
            title={r.title}
            id={r.id}
            diets={r.diets}
            img={r.image}
            // summary={r.summary}
            // healthScore={r.healthScore}
            />
            )
            
          })

          }


        </div>



    )
}

export function mapStateToProps(state) {
    return {
      recipes: state.recipes
    }
  }
  
  
  // export function mapDispatchToProps(dispatch) {
  //   return {
  //     getAllRecipes: () => dispatch(getAllRecipes())
  //   }
  // }


export default connect(mapStateToProps, {getAllRecipes})(Home);