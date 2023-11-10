const sequelize = require('../Connection/database');
const {DataTypes}=require('sequelize');
const Usuario = require('./usuario.model');
const Vendedor = require('./vendedor.model');
const Producto = require('./producto.model');

const Venta = sequelize.define('Venta',{
    venta_id:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },

    usuario_id:{
        type:DataTypes.INTEGER,
        onDelete:'CASCADE',
        onUpdate:'CASCADE',

        references:{
            model:Usuario,
            key:'usuario_id'
        }
    },

    vendedor_id:{
        type:DataTypes.INTEGER,
        onDelete:'CASCADE',
        onUpdate:'CASCADE',

        references:{
            model:Vendedor,
            key:'vendedor_id'
        }
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

module.exports=Venta;