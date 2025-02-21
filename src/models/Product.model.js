const sequelize = require('../database');
const {DataTypes} = require('sequelize');

const Product = sequelize.define('Product', {   
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    precio:{
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    imagen:{
        type: DataTypes.BLOB("medium"),
        allowNull: false
    },
    cantidad:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
},
 {
    timestamps: false
 });

module.exports = Product;