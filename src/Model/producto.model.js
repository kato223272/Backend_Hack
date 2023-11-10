const sequelize = require('../Connection/database');
const {DataTypes} = require('sequelize');

const Producto=sequelize.define('Producto',{
    producto_id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },

    nombre:{
        type:DataTypes.STRING
    },

    cantidad:{
        type:DataTypes.INTEGER
    },

    precio:{
        type:DataTypes.INTEGER
    }
},
    {
        timestamps: false
    }
);

module.exports=Producto;