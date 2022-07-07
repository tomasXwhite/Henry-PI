
const express = require('express');

const axios = require("axios");
require('dotenv').config();
const {
  APIKEY1, APIKEY2, APIKEY3, APIKEY4, APIKEY5, APIKEY6, APIKEY7, APIKEY8, APIKEY10                //destructuring de mis variables de entorno
} = process.env;
const recipesMiddleware = require('./recipes.js')
const dietsMiddleware = require('./diets.js')




const server = express()



server.get('/', (req, res) => {
  res.send('Henry foods Individual Project.');
});
server.use("/recipes", recipesMiddleware)
server.use("/diets", dietsMiddleware)










module.exports = server;
