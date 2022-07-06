// const { Router } = require("express");
const express = require('express');
// const Recipe = require('../models/Recipe');
// const { conn, Recipe, Diet } = require("../db.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
require('dotenv').config();
const {
  APIKEY1, APIKEY2, APIKEY3, APIKEY4, APIKEY5, APIKEY6, APIKEY7, APIKEY8, APIKEY10                //destructuring de mis variables de entorno
} = process.env;
const recipesMiddleware = require('./recipes.js')
const dietsMiddleware = require('./diets.js')

// const { prueba } = require("../controllers/controllers.js");
// const { Op } = require("sequelize");
// const db = require("../db.js");
// const router = Router();


const server = express()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// server.use(express.json());
server.get('/', (req, res) => {
  res.send('Henry foods Individual Project.');
});
server.use("/recipes", recipesMiddleware)
server.use("/diets", dietsMiddleware)












// router.get("/recipes", async (req, res) => {
//   const { title } = req.query;
//   // if (!name) {
//   //   return res.status(404).json({ error: "falta ingresar 'name' por query" });
//   // }
//   console.log("estoy en el get: " + title);

//   try {
//     let result = await axios.get(
//       `https://api.spoonacular.com/recipes/complexSearch?number=50&addRecipeInformation=true&apiKey=${APIKEY6}`
//     );
//     result = await result.data;
//     let resultadoFinalApi = result.results; //ahora result va a ser un arr con ls obj q van a ser las recetas

//     let resultadoFinalDb = await Recipe.findAll({include: [{ model: Diet}]})

//     if(title) {
//      resultadoFinalApi = await resultadoFinalApi.filter((recipe) =>
//       recipe.title.toLowerCase().includes(title.toLowerCase())
//     );

//     //aca lo q hago es, primero traigo las recetas d la api, me devuelve un monton de cosas q devuelve el axios al pedo q no me sirven, la respuesta está alojada en el obj data.
//     //entonces digo q mi result ahora va a ser result.data. data es un obj con el array results cuyos elementos son las recetas(objs), entonces accedo a ese arr, y ahora tengo todas las recetas.
//     //Entonces, si hay name, hago un filter a ese arr, dejando pasar solo las recetas cuyo titulo incluya, sino devuelvo todas,
//     resultadoFinalDb = await Recipe.findAll({
//       where: {
//         title: {
//           [Op.substring]: title,
//         },
//       },
//       include: [{model: Diet}]
//     });
//   }
//     const arr = [...resultadoFinalApi, ...resultadoFinalDb]

//     resultadoFinalApi.length || resultadoFinalDb
//       ? res.json(arr)
//       : res.status(404).json({
//           error: "El query ingresado no coincide con ninguna receta",
//         });
//   } catch (err) {
//     return res.status(404).json({ errorMsg: err });
//   }
// });

// router.get("/recipes/:id", async (req, res) => {
//   const { id } = req.params;
//   if (!id) res.status(404).json({ error: "falta ingresa id por parámetro" });

//   if (id.length < 10) {
//     try {
//       let result = await axios.get(
//         `https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKEY6}`
//       );
//       result = await result.data;
//       // const resultado = result.filter(e => e)                       //aca me falta filtrar toda la info q me da la api, para mostrar lo que me pidan, pero no se q me piden
//       return res.json(result);
//     } catch (err) {
//       return res.status(404).json({ error: err.message });
//     }
//   } else {
//     try {
//       const result = await Recipe.findByPk(id, {
//         include: Diet,
//       });
//       result
//         ? res.json(result)
//         : res
//             .status(404)
//             .json({
//               errorMsg:
//                 "No se encontró ninguna receta con el id en la base de datos",
//             });
//     } catch (err) {
//       console.log(err);
//       res.status(404).json({ errorMsg: "Error en la búsqueda por ideeeeeee", err });
//     }
//   }
// });

// router.post("/recipes", async (req, res) => {
//   const { title, summary, healthScore, instructions, diets } = req.body;
//   if (!title || !summary)
//     return res.status(404).json({ error: "faltan datos obligatorios" });

//   try {
//     const newRecipe = await Recipe.create({
//       title,
//       summary,
//       healthScore,
//       instructions,
//     });

//     // const arrOfPromisesCreations = await diets.map(d => Diet.create(d))
//     // await Promise.all(arrOfPromisesCreations)
//     if(diets?.length){
//       let dietsSelected = diets.map((d) =>
//         Diet.findOrCreate({
//           where: { name: d.name },
//           defaults: d,
//         })
//       );
//       const resolvedDiets = await Promise.all(dietsSelected)
//       resolvedDiets.map(d => newRecipe.setDiets(d[0]))

//     }
    
//     //aca como tengo q crear la receta con sus tipos de dieta asociados, creo la receta, el diets q me llega por body va a ser un arreglo con cada dieta,
//     //y le hago un mapeo para seleccionarlas, y en el caso de que me mandasen una dieta que no tengo en mi base de datos (ya que en el front voy a poner para seleccionar y por si quieren
//     //crear su tipo de dieta), la creo con el dato q me pasen (o sea {name: ""})
//     //Luego tengo q resolver el dietsSelected, ya q eso va a ser un arreglo con promesas en Pending, entonces hago promise all, me guardo en una variable
//     //lo q ahora va a ser un arreglo de arreglos(cada uno va a tener el obj con la dieta), y a ese arreglo padre le hago un map, llamando a setDiets
//     //pasandole el arreglo(con el objeto que tiene el name de la dieta y el id)
//     return res.json({ msg: "receta y dieta creadas con exito" });
//   } catch (err) {
//     res.status(404).json({ error: err + "losiento" });
//   }
// });

// router.get("/diets", async (req, res) => {
//   try {
//     const result = await Diet.findAll();
//     res.json(result);
//   } catch (err) {
//     res.status(404).json({ errorMsg: "error provisto", err });
//   }
// });

// router.get("/", (req, res) => {
//   res.json({ msg: "estas en el get / pa" });
// });

module.exports = server;
