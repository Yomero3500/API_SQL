const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("prueba", "root", "MicheladA2", {
  host: "localhost",
  dialect: "mysql",
});

async function syncDatabase() {
  try {
    await sequelize.authenticate(); 
    console.log("Conexión a la base de datos establecida correctamente.");
    
    await sequelize.sync({ alter: false }); 
    console.log("Las tablas se han sincronizado correctamente.");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
}

syncDatabase();

module.exports = sequelize;
