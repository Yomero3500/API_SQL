const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("red_social", "root", "23josesa", {
  host: "localhost",
  dialect: "mysql",
});
//!!Importante cambiar los parametros de la base de datos con la que trabajes 

//Todo: realizar los test correspondientes para la prueba  
async function prueba() {
  try {
    await sequelize.authenticate();
    console.log("Conexion exitosa");
  } catch (error) {
    console.error("Error en la conexion:", error);
  }
}

//prueba();
module.exports = sequelize;
