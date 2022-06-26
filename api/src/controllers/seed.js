const {conn, Diet, Recipe} = require('../db.js')
let cargarDietas = async() => {
try{
    let arrOfDiets = [
      {
        name: "Gluten Free"
      },
      {
        name: "Ketogenic"
      },
      {
        name: "Vegetarian"
      },
      {
        name: "Lacto-Vegetarian"
      },
      {
        name: "Ovo-Vegetarian"
      },
      {
        name: "Vegan"
      },
      {
        name: "Pescetarian"
      },
      {
        name: "Paleo"
      },
      {
        name: "Primal"
      },
      {
        name: "Low FODMAP"
      },
      {
        name: "Whole30"
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