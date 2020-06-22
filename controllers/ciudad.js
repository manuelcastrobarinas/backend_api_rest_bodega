'use strict'

var ciudad=require('../models/ciudad');


var ControllerCiudad ={

    saveCiudad: function(req,res){

        let city    = new ciudad();
        let params  = req.body;

        city.nombre = params.nombre;

        
        city.save((err,cityStored)=>{
            if(err)         return res.status(500).send({message: 'error al guardar la ciudad'});
            if(!cityStored) return res.status(404).send({message: 'no se ha podido guardar la ciudad'});
            return res.status(200).send({city:cityStored});
        }); 
    },
    getCiudad: function(req, res){

        let CiudadId=req.params.id;

        if (ciudad==null) return res.status(404).send({message:'la ciudad no existe'});

        ciudad.findById(CiudadId, (err,ciudad)=>{
            if(err)     return res.status(500).send({message:'error al obtener los datos'});
            if(!ciudad) return res.status(404).send({message:'la ciudad no existe'});
            return res.status(200).send({ciudad});
        });

    },
    
    getAllCity: function(req,res){
        ciudad.find({}).exec((e,ciudades)=>{
            if(e)           return res.status(500).send({message: 'error al obtener las ciudades'});
            if(!ciudades)   return res.status(404).send({message: 'no existen ciudades para mostrar'});
            return res.status(200).send({ciudades});
        });
    },

    UpdateCity: function(req,res){
        let ciudadID=req.params.id;
        let update=req.body;

        ciudad.findByIdAndUpdate(ciudadID,update,{new:true}, (err,ciudadUpdate)=>{
            if(err)             return res.status(500).send({message:'error al actualzar la ciudad'});
            if(!ciudadUpdate)   return res.status(404).send({message: 'la ciudad no existe, por esto no puede actualizarse'});
            return res.status(200).send({
                ciudad: ciudadUpdate
            });
        });
    },
    RemoveCity: function(req,res){
        let ciudadId=req.params.id;

        ciudad.findByIdAndDelete(ciudadId,(e,ciudadRemove)=>{
            if(e)               return res.status(500).send({message: 'error al borrar la ciudad'});
            if(!ciudadRemove)   return res.status(404).send({message: 'la ciudad no existe'});
            return res.status(200).send({
                ciudad:ciudadRemove
            });
        });
    }
}

module.exports =ControllerCiudad;
