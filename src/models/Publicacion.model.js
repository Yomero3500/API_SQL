const sequelize = require('../database');
const Usuario = require('../models/Usuario.model');
const {DataTypes} = require('sequelize');

const Publicacion = sequelize.define('Publicacion', {
  publicacion_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING
  },
  contenido: {
    type: DataTypes.TEXT
  },
  fecha_creacion: {
    type: DataTypes.DATE
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    references: {
      model: Usuario,
      key: 'usuario_id'
    }
  },
});

module.exports = Publicacion;