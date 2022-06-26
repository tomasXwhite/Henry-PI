import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx'
import RecipeDetail from './components/RecipeDetail/RecipeDetail';

import Nav from './components/Nav/Nav';
import NavModern from './components/NavModern/NavModern';

import CreateRecipe from './components/CreateRecipe/CreateRecipe';



function App() {
  return (
    <div>
      <Route path="/" component={Nav}/>

      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/recipes" component={Home}/>
      <Route exact path="/recipes/createRecipe" component={CreateRecipe}/>
      <Route exact path="/recipes/:id([a-zA-Z0-9\-]{32}|[0-9]+)" component={RecipeDetail}/>
    </div>
  );
}

export default App;
