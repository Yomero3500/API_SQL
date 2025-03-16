const sequelize = require('../database');
const {DataTypes} = require('sequelize');

const Usuario= sequelize.define('Usuario', {
  user_id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: { 
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  fcmToken: {
    type: DataTypes.STRING,
    allowNull: true
  }
},
 {
  timestamps: false
});

module.exports = Usuario;