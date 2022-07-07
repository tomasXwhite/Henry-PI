const { Router } = require('express')
const {
    APIKEY1, APIKEY2, APIKEY3, APIKEY4, APIKEY5, APIKEY6, APIKEY7, APIKEY8, APIKEY9, APIKEY10, APIKEY11, APIKEY12, APIKEY13, APIKEY14, APIKEY15, APIKEY16, APIKEY17, APIKEY18, APIKEY19, APIKEY20, APIKEY21, APIKEY22, APIKEY23, APIKEY24, APIKEY25                //destructuring de mis variables de entorno
  } = process.env;
require('dotenv').config();
const axios = require("axios");
 const { Op } = require("sequelize");
const router = Router()
const { conn, Recipe, Diet } = require("../db.js");



router.get("/", async (req, res) => {
    const { title } = req.query;

    console.log("estoy en el get: " + title);
  
    try {
      let result = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?number=50&addRecipeInformation=true&apiKey=${APIKEY25}`
      );
      result = await result.data;
      let resultadoFinalApi = result.results; //ahora result va a ser un arr con ls obj q van a ser las recetas
       let newResult = resultadoFinalApi.map(r => {
         return   {
              id: r.id,
              title: r.title,
              diets: r.diets,
              image: r.image,
              healthScore: r.healthScore
              
            }
        })
      let resultadoFinalDb = await Recipe.findAll({include: [{ model: Diet}]})
  
      if(title) {
        newResult = await newResult.filter((r) =>
        r.title.toLowerCase().includes(title.toLowerCase())
      );
  
      resultadoFinalDb = await Recipe.findAll({
              where: {
                title: {
                  [Op.substring]: title,
                },
              },
              include: [{model: Diet}]
            });
          }
      const arr = [...newResult, ...resultadoFinalDb]
  
      newResult.length || resultadoFinalDb.length
        ? res.json(arr)
        : res.status(404).json({
            error: "El query ingresado no coincide con ninguna receta",
          });
    } catch (err) {
      return res.status(404).json({ errorMsg: err });
    }
  });




  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) res.status(404).json({ error: "falta ingresa id por parámetro" });
  
    if (id.length < 10) {
      try {
        let result = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKEY25}`
        );
        result = await result.data;
        const newResult = {
          title: result.title,
          summary: result.summary,
          diets: result.diets,
          healthScore: result.healthScore,
          image: result.image,
          instructions: result.instructions,
          cuisines: result.cuisines,
          dishTypes: result.dishTypes

        }
        
        
        
        return res.json(newResult);
      } catch (err) {
        return res.status(404).json({ error: err.message });
      }
    } else {
      try {
        const result = await Recipe.findByPk(id, {
          include: Diet,
        });
        result
          ? res.json(result)
          : res
              .status(404)
              .json({
                errorMsg:
                  "No se encontró ninguna receta con el id en la base de datos",
              });
      } catch (err) {
        console.log(err);
        res.status(404).json({ errorMsg: "Error en la búsqueda por ideeeeeee", err });
      }
    }
  });




  router.post("/", async (req, res) => {
    const { title, summary, healthScore, instructions, diets } = req.body;
    if (!title || !summary) {                                                    diets: [{name: "asdfasd"}, {name:"asdfas"}]
    return res.status(404).json({ error: "faltan datos obligatorios" });
  }
    try {
      const newRecipe = await Recipe.create({
        title,
        summary,
        healthScore,
        instructions,
      });
  
      if(diets?.length){
        let dietsSelected = diets.map((d) =>
          Diet.findOrCreate({
            where: { name: d.name },
            defaults: d,
          })
        );
        const resolvedDiets = await Promise.all(dietsSelected)
        resolvedDiets.map(d => newRecipe.setDiets(d[0]))
  
      }
      
      return res.json({ msg: "receta y dieta creadas con exito" });
    } catch (err) {
      res.status(404).json({ error: err + " losiento" });
    }
  });
  


  module.exports = router