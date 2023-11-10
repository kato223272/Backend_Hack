const router = require('express').Router();
const Producto = require('../Model/producto.model');

router.get("/buscarTodos", async (req,res)=>{
    try {
        const producto = await Producto.findAll()
        res.status(200).json({
        ok:true,
        status:200,
        body: producto
    })
    } catch (error) {
        res.status(500).json({error: "Error al buscar el historial de productos"});
        console.log(error);
    }
})


router.get("/buscarUnico/:id", async(req,res)=>{
    try{
        const id = req.params.id;
        const producto =await Producto.findOne({
            where:{
                producto_id:id,
            }
        })
        res.status(200).json({
            ok:true,
            status:200,
            body: producto
        })
    }catch(error){
        res.status(500).json({error: "Error al buscar el producto"});
        console.log(error);
    }
})

router.post("/agregar", async (req,res)=>{
    const {producto_id, nombre,cantidad, precio }=req.body;
    try{
        await Producto.sync()
        const producto = await Producto.create({
            producto_id:producto_id,
            nombre:nombre,
            cantidad:cantidad,
            precio:precio
        });
        res.json(producto);
    }catch(error){
        res.status(500).json({error: "Error al agregar producto"});
        console.log(error);
    }
})

router.put("/modificar/:id", async (req,res)=>{
    try{
        const id = req.params.id
        const {nombre,cantidad, precio }=req.body;
        const updateProducto = await Producto.update({
            nombre:nombre,
            cantidad:cantidad,
            precio:precio
        }, {
            where: {
                producto_id:id
            }
        })
        res.send("Producto Modificado");
    }catch(error){
        res.status(500).json({error: "Error al modificar el producto"});
        console.log(error);
    }
});


router.delete("/eliminar/:id", async(req,res)=>{
    try{
        const id=req.params.id;
        const deleteProducto=await Producto.destroy({
            where:{
                producto_id:id
            },
        })
        res.send("Producto eliminado")
    }catch(error){
        res.status(500).json({error: "Error al eliminar el producto"});
        console.log(error);
    }
})

module.exports=router;