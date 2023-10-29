const sequelize = require('../database');
const {DataTypes} = require('sequelize');

const Usuario= sequelize.define('Usuario', {
  usuario_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  }
});

module.exports = Usuario;