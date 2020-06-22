'use strict'

const bodega = require("../models/bodega");


let bodegaController={

    saveBodega: function(req,res){

        let almacen  = new bodega();
        let params   = req.body;

        almacen.nombre      =params.nombre;
        almacen.direccion   =params.direccion;
        almacen.telefono    =params.telefono;

        almacen.save((err,almacenStored)=>{
            if(err)             return res.status(500).send({message: 'error al guardar la bodega'});
            if(!almacenStored)  return res.status(404).send({message: 'no se ha podido guardar la bodega'})
            return res.status(200).send({almacen:almacenStored});
        });
    },
    getBodega: function (req,res){
        
        let bodegaId=req.params.id;

        if(bodegaId==null) return res.status(404).send({message: 'la bodega no existe'});

        bodega.findById(bodegaId, (err,bodega)=>{
            if(err)     return res.status(500).send({ message:' error al devolver los datos'});
            if(!bodega) return res.status(404).send({ message: 'la bodega no existe'});
            return res.status(200).send({bodega});
        });
    },
    
    getAllBodega: function(req,res){
        bodega.find({}).exec((e,bodegas)=>{
            if(e)           return res.status(500).send({message: 'error al encontrar las bodegas'});
            if(!bodegas)    return res.status(404).send({message: 'no hay bodegas para mostrar'});
            return res.status(200).send({bodegas});
        });
    },
    
    UpdateBodega: function(req,res){
        let bodegaId=req.params.id;
        let update=req.body;

        bodega.findByIdAndUpdate(bodegaId,update,{new:true}, (err,bodegaUpdate)=>{
            if(err)             return res.status(500).send({message:'error al actualizar la bodega'});
            if(!bodegaUpdate)   return res.status(404).send({message:'no exsite la bodega, por eso no se puede actualizar'});
            return res.status(200).send({
                bodega: bodegaUpdate
            });
        });
    },

    DeleteBodega: function(req,res){
        let bodegaID=req.params.id;
        
        bodega.findByIdAndDelete(bodegaID,(e,bodegaRemove)=>{
            if(e)               return res.status(500).send({message: 'error al borrar la bodega'});
            if(!bodegaRemove)   return res.status(404).send({message: 'no existe bodega para remover'});
            return res.status(200).send({
                bodega:bodegaRemove
            })
        });
    }
}

module.exports=bodegaController;