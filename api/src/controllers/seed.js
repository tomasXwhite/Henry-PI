const {conn, Diet, Recipe} = require('../db.js')
let cargarDietas = async() => {
try{
    let arrOfDiets = [
      {
        name: "gluten free"
      },
      {
        name: "dairy free"
      },
      {
        name: "ketogenic"
      },
      {
        name: "vegetarian"
      },
      {
        name: "lacto ovo vegetarian"
      },
      // {
      //   name: "Ovo-Vegetarian"
      // },
      {
        name: "vegan"
      },
      {
        name: "pescetarian"
      },
      {
        name: "paleolithic"
      },
      {
        name: "primal"
      },
      {
        name: "low fodmap"
      },
      {
        name: "whole 30"
      }
    ] 
    let promises = arrOfDiets.map(d => Diet.findOrCreate({
      where: {name: d.name},
      defaults: d
    }))
  await Promise.all(promises)
  
  } catch(err) {
    console.log("ERROR EN LA CARGA INICIAL DE DIETAS: " + err)
  }
}
cargarDietas()