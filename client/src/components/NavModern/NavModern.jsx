import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./NavModern.module.css";
import "./NavModern2.scss";

function NavModern(props) {
  

  return (
    <nav class="navv2">
      <ul class="ull2">
        <Link to="/recipes">
          <li class="lii2">
            <a class="aa2">Home</a>
          </li>
        </Link>
        <Link to="/about">
          <li class="lii2">
            <a class="aa2">About</a>
          </li>
        </Link>
        <Link to="/recipes/createRecipe">
          <li class="lii2">
            <a class="aa2">Create Recipe</a>
          </li>
        </Link>
        <Link to="/">
          <li class="lii2">
            <a class="aa2">Landing page</a>
          </li>
        </Link>
      </ul>
    </nav>

    
  );
}

export default NavModern;

