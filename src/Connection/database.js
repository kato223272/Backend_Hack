const {Sequelize} = require("sequelize");

const sequelize = new Sequelize( 
    "agricultura", 
    "root", 
    "basepaola",
{
    host: "localhost",
    dialect: "mysql",
});

module.exports= sequelize;