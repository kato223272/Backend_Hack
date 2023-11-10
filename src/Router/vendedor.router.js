const router = require('express').Router();
const Vendedor = require ('../Model/vendedor.model')

router.get("/buscarTodos", async (req,res)=>{
    try {
        const vendedor = await Vendedor.findAll()
        res.status(200).json({
        ok:true,
        status:200,
        body: vendedor
    })
    } catch (error) {
        res.status(500).json({error: "Error al buscar el historial de vendedores"});
        console.log(error);
    }
})


router.get("/buscarUnico/:id", async(req,res)=>{
    try{
        const id = req.params.id;
        const vendedor =await Vendedor.findOne({
            where:{
                vendedor_id:id,
            }
        })
        res.status(200).json({
            ok:true,
            status:200,
            body: vendedor
        })
    }catch(error){
        res.status(500).json({error: "Error al buscar el vendedor"});
        console.log(error);
    }
})

router.post("/agregar", async (req,res)=>{
    const {vendedor_id, nombre, producto_id }=req.body;
    try{
        await Vendedor.sync()
        const vendedor = await Vendedor.create({
            vendedor_id: vendedor_id,
            nombre: nombre,
            producto_id:producto_id
        });
        res.json(vendedor);
    }catch(error){
        res.status(500).json({error: "Error al agregar vendedor"});
        console.log(error);
    }
})

router.put("/modificar/:id", async (req,res)=>{
    try{
        const id = req.params.id
        const {vendedor_id, nombre, producto_id }=req.body;
        const updateVendedor = await Vendedor.update({
            vendedor_id: vendedor_id,
            nombre: nombre,
            producto_id:producto_id
        }, {
            where: {
                vendedor_id:id
            }
        })
        res.send("Vendedor Modificado");
    }catch(error){
        res.status(500).json({error: "Error al modificar el vendedor"});
        console.log(error);
    }
});


router.delete("/eliminar/:id", async(req,res)=>{
    try{
        const id=req.params.id;
        const deleteVendeddor=await Vendedor.destroy({
            where:{
                vendedor_id:id
            },
        })
        res.send("Vendedor eliminado")
    }catch(error){
        res.status(500).json({error: "Error al eliminar el vendedor"});
        console.log(error);
    }
})

module.exports=router;