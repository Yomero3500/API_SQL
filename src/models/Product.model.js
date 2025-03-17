const sequelize = require('../database');
const Usuario = require('./Usuario.model')
const {DataTypes} = require('sequelize');

const Product = sequelize.define('Product', {   
    product_id: {
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
        allowNull: true 
    },
    cantidad:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    user_id:{
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
            model: Usuario,
            key: 'user_id',
        }
    }
},
 {
    timestamps: false
 });

module.exports = Product;