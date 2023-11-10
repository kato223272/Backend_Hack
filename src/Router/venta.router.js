const router = require('express').Router();
const Venta = require('../Model/venta.model');

router.get("/buscarTodos", async (req,res)=>{
    try {
        const venta = await Venta.findAll()
        res.status(200).json({
        ok:true,
        status:200,
        body: venta
    })
    } catch (error) {
        res.status(500).json({error: "Error al buscar el historial de ventas"});
        console.log(error);
    }
})


router.get("/buscarUnico/:id", async(req,res)=>{
    try{
        const id = req.params.id;
        const venta =await Venta.findOne({
            where:{
                venta_id:id,
            }
        })
        res.status(200).json({
            ok:true,
            status:200,
            body: venta
        })
    }catch(error){
        res.status(500).json({error: "Error al buscar la venta"});
        console.log(error);
    }
})

router.post("/agregar", async (req,res)=>{
    const {venta_id, usuario_id, vendedor_id, producto_id }=req.body;
    try{
        await Venta.sync()
        const venta = await Venta.create({
            venta_id: venta_id,
            usuario_id: usuario_id,
            vendedor_id:vendedor_id,
            producto_id:producto_id
        });
        res.json(venta);
    }catch(error){
        res.status(500).json({error: "Error al agregar venta"});
        console.log(error);
    }
})

router.put("/modificar/:id", async (req,res)=>{
    try{
        const id = req.params.id
        const {usuario_id, vendedor_id,producto_id }=req.body;
        const updateVenta = await Venta.update({
            usuario_id: usuario_id,
            vendedor_id:vendedor_id,
            producto_id:producto_id
        }, {
            where: {
                venta_id:id
            }
        })
        res.send("Vendedor Modificado");
    }catch(error){
        res.status(500).json({error: "Error al modificar el venta"});
        console.log(error);
    }
});


router.delete("/eliminar/:id", async(req,res)=>{
    try{
        const id=req.params.id;
        const deleteVenta=await Venta.destroy({
            where:{
                vendedor_id:id
            },
        })
        res.send("Vendedor eliminado")
    }catch(error){
        res.status(500).json({error: "Error al eliminar la venta"});
        console.log(error);
    }
})

module.exports=router;