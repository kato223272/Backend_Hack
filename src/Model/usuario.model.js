const sequelize = require('../Connection/database');
const {DataTypes} = require('sequelize');

const Usuario = sequelize.define('Usuario', {
    usuario_id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    nombre:{
        type:DataTypes.STRING
    },
    contrasenia:{
        type:DataTypes.STRING
    },
    apellido_Paterno:{
        type:DataTypes.STRING
    },
    apellido_Materno:{
        type:DataTypes.STRING
    },
    telefono:{
        type:DataTypes.INTEGER
    }
},
    {
        timestamps: false
    }
);


module.exports = Usuario;

