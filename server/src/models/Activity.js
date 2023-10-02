const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificulty:{type:DataTypes.INTEGER, allowNull:false},
    duration:{type:DataTypes.DECIMAL, allowNull:false},
    season:{type:DataTypes.ENUM("Verano","Otoño","Invierno","Primavera"), allowNull:false}
  });
};

