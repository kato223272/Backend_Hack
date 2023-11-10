const router = require('express').Router();
const Usuario = require("../Model/usuario.model");

router.get("/buscarTodos", async (req,res)=>{
    try {
        const usuario = await Usuario.findAll()
        res.status(200).json({
        ok:true,
        status:200,
        body: usuario
    })
    } catch (error) {
        res.status(500).json({error: "Error al buscar el historial de usuarios"});
        console.log(error);
    }
})


router.get("/buscarUnico/:id", async(req,res)=>{
    try{
        const id = req.params.id;
        const usuario =await Usuario.findOne({
            where:{
                usuario_id:id,
            }
        })
        res.status(200).json({
            ok:true,
            status:200,
            body: usuario
        })
    }catch(error){
        res.status(500).json({error: "Error al buscar el usuario"});
        console.log(error);
    }
})

router.post("/agregar", async (req,res)=>{
    const {usuario_id, nombre, apellido_Paterno,apellido_Materno,telefono }=req.body;
    try{
        await Usuario.sync()
        const usuario = await Usuario.create({
            usuario_id: usuario_id,
            nombre: nombre,
            apellido_Paterno: apellido_Paterno,
            apellido_Materno:apellido_Materno,
            telefono:telefono
        });
        res.json(usuario);
    }catch(error){
        res.status(500).json({error: "Error al agregar usuario"});
        console.log(error);
    }
})

router.put("/modificar/:id", async (req,res)=>{
    try{
        const id = req.params.id
        const { usuario, nombre, apellido_Paterno,apellido_Materno,telefono} = req.body;
        const updateUsuario = await Usuario.update({
            usuario: usuario,
            nombre: nombre,
            apellido_Paterno: apellido_Paterno,
            apellido_Materno:apellido_Materno,
            telefono:telefono
        }, {
            where: {
                usuario_id:id
            }
        })
        res.send("Usuario Modificado");
    }catch(error){
        res.status(500).json({error: "Error al modificar el usuario"});
        console.log(error);
    }
});


router.delete("/eliminar/:id", async(req,res)=>{
    try{
        const id=req.params.id;
        const deleteUsuario=await Usuario.destroy({
            where:{
                usuario_id:id
            },
        })
        res.send("Usuario eliminado")
    }catch(error){
        res.status(500).json({error: "Error al eliminar el usuario"});
        console.log(error);
    }
})

module.exports=router;