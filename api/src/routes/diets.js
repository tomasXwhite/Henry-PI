const { Router } = require('express')
const {
    APIKEY1, APIKEY2, APIKEY3, APIKEY4, APIKEY5, APIKEY6, APIKEY7, APIKEY8, APIKEY10                //destructuring de mis variables de entorno
  } = process.env;
require('dotenv').config();
const axios = require("axios");

const router = Router()
const { conn, Recipe, Diet } = require("../db.js");




router.get("/", async (req, res) => {
    try {
      const result = await Diet.findAll();
      res.json(result);
    } catch (err) {
      res.status(404).json({ errorMsg: "error provisto", err });
    }
  });


  module.exports = router