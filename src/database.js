const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("prueba", "root", "12062022", {
  host: "localhost",
  dialect: "mysql",
});
//!!Importante cambiar los parametros de la base de datos con la que trabajes 

module.exports = sequelize;