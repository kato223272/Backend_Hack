const express = require('express');
const Usuario = require('../Router/usuario.router');
const Producto = require ('../Router/producto.router');
const Vendedor = require('../Router/vendedor.router');
const Venta = require('../Router/venta.router');
const morgan = require('morgan');
const app=express();

app.use(morgan("dev"));

app.get('/',(req, res)=>{
    res.send('This is my App');
});

app.use(express.json());
app.use("/usuario", Usuario);
app.use("/producto", Producto);
app.use("/vendedor", Vendedor);
app.use("/venta", Venta);

module.exports=app;