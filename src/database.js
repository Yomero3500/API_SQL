const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("red_social", "root", "joalmoso0304", {
  host: "localhost",
  dialect: "mysql",
});
//!!Importante cambiar los parametros de la base de datos con la que trabajes 

module.exports = sequelize;