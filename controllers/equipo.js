'use strict'
let equipo = require("../models/equipo");

let equipoController={
   
    SaveEquipo: function(req,res){

        let implement=new equipo();
        let params = req.body;

        implement.nombre    =params.nombre;
        implement.cantidad  =params.cantidad;
        implement.estado    ='demo';

        implement.save((err,implementStored)=>{
            if(err)                 return res.status(500).send({message:'error al guardar el equipo'});
            if(!implementStored)    return res.status(404).send({message:'no se ha podido guardar el equipo'});
            return res.status(200).send({implement:implementStored}); 
        });
    },
    getEquipo: function(req,res){

        let EquipoId=req.params.id;

        if(EquipoId==null) return res.status(404).send({message: 'el equipo no existe'});

        equipo.findById(EquipoId,(err,equipo)=>{
            if(err)     return res.status(500).send({message: 'error al obtener los datos'});
            if(!equipo) return res.status(494).send({message: 'el equipo no existe'});
            return res.status(200).send({equipo});
        });
    },

    getAllEquipos: function(req,res){
        equipo.find({}).exec((e,equipos)=>{
            if(e)           return res.status(500).send({message: 'error al obtener los datos del equipo'});
            if(!equipos)    return res.status(404).send({message: 'no existen equipos para mostrar'});
            return res.status(200).send({equipos});
        });
    },

    UpdateEquipo: function(req,res){
        let equipoId=req.params.id;
        let update  =req.body;

        equipo.findByIdAndUpdate(equipoId,update,{new:true},(e,equipoUpdate)=>{
            if(e)               return res.status(500).send({message: 'error al actualizar el equipo'});
            if(!equipoUpdate)   return res.status(404).send({ message: 'el equipo no existe, por lo cual no puede ser actualizado'});
            return res.status(200).send({
                equipo: equipoUpdate
            });
        })
    },
    RemoveEquipo: function(req,res){
        let equipoId=req.params.id;

        equipo.findByIdAndDelete(equipoId,(e,equipoRemove)=>{
            if(e)               return res.status(500).send({message: 'error al eliminar el equipo'});
            if(!equipoRemove)   return res.status(404).send({message: 'el equipo no existe, por lo cual no puede ser eliminado'})
            return res.status(200).send({
                equipo: equipoRemove
            })
        });
    }

}

module.exports=equipoController;