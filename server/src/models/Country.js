const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{type:DataTypes.STRING, primaryKey:true, unique:true},
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags:{type:DataTypes.STRING, allowNull:true},
    continents:{type:DataTypes.STRING, allowNull:false},
    capital:{type:DataTypes.STRING, allowNull:false},
    subregion:{type:DataTypes.STRING, allowNull:true},
    area:{type:DataTypes.DECIMAL, allowNull:false},
    population:{type:DataTypes.INTEGER, allowNull:false}
  },{timestamps:false});
};
