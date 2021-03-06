import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './styles/App.css';
import s from './styles/AppBG.module.css'
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx'
import RecipeDetail from './components/RecipeDetail/RecipeDetail';

import NavModern from './components/NavModern/NavModern';

import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import About from './components/About/About';

import Spinner from './components/Spinner/Spinner';



function App() {
  return (
    <div className={s.back}>
      <Route path="/" component={NavModern}/>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/recipes" component={Home}/>
      <Route exact path="/recipes/createRecipe" component={CreateRecipe}/>
      <Route exact path="/recipes/:id([a-zA-Z0-9\-]{36}|[0-9]+)" component={RecipeDetail}/>  
      <Route exact path="/about" component={About}/>
      <Route exact path='/spinner' component={Spinner}/>
    </div>
  );
}

export default App;

//([a-zA-Z0-9\-]{32}|[0-9]+)