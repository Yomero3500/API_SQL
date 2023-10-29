const { DataTypes } = require('sequelize');
const Publicacion = require('./Publicacion.model');
const Usuario = require('./Usuario.model');

const sequelize = require('../database');

const Comentario = sequelize.define('Comentario', {
  comentario_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  contenido: {
    type: DataTypes.TEXT
  },
  fecha_creacion: {
    type: DataTypes.DATE
  },
  publicacion_id: {
    type: DataTypes.INTEGER,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    references: {
      model: Publicacion,
      key: 'publicacion_id'
    }
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    references: {
      model: Usuario,
      key: 'usuario_id'
    }
  }
});

module.exports = Comentario;