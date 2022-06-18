const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumen: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    health_score: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
        max: 100,
      }
    },
    step_by_step: {
      type: DataTypes.STRING,
    }
  });
};
