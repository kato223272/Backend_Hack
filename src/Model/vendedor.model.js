const sequelize=require('../Connection/database');
const {DataTypes}=require('sequelize');
const Producto = require('./producto.model');

const Vendedor=sequelize.define('Vendedor',{
    vendedor_id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    
    nombre:{
        type:DataTypes.STRING
    },

    producto_id:{
        type:DataTypes.INTEGER,
        onDelete:'CASCADE',
        onUpdate:'CASCADE',

        references:{
            model:Producto,
            key:'producto_id'
        }
    }
},
    {
        timestamps: false
    }
);

module.exports=Vendedor;