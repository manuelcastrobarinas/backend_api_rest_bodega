'use strict'

let cliente=require('../models/cliente');


var clienteController={

    saveClient: function(req,res){

        let client=new cliente();
        let params=req.body;
        
        client.nombre=params.nombre;
        client.image =null;

        
        client.save((err,clientStored)=>{
            if(err)             return res.status(500).send({message:'error al guardar cliente'});
            if(!clientStored)   return res.status(404).send({massage:'no se ha podido guardar cliente'});
            return res.status(200).send({client:clientStored});
        });
    },
    getClient:  function(req,res){
        let ClientId=req.params.id;

        if(ClientId==null) return res.status(404).send({message:'el cliente no existe'});

        cliente.findById(ClientId,(err,cliente)=>{
            if(err)      return res.status(500).send({message:'error al obtener los datos'});
            if(!cliente) return res.status(404).send({message:'el cliente no existe'});
            return res.status(200).send({cliente});
        });
    },
    
    getAllClient: function(req,res){
        cliente.find({}).exec((e,clientes)=>{
            if(e)           return res.status(500).send({message: 'error al obtener a los clientes'});
            if(!clientes)   return res.status(404).send({message: 'no hay clientes para mostrar'});
            return res.status(200).send({clientes});
        });
    },

    updateClient: function(req,res){
        let ClientId=req.params.id;
        let update=req.body;

        cliente.findByIdAndUpdate(ClientId,update,{new:true}, (e,ClientUpdate)=>{
            if(e) return      res.status(500).send({message: 'error al actualizar el cliente'});
            if(!ClientUpdate) res.status(404).send({message: 'el cliente no existe, por lo cual no puede actualizarse'});
            return res.status(200).send({
                 cliente: ClientUpdate
            });
        });
    },
    RemoveClient: function(req,res){
        let ClientID=req.params.id;

        cliente.findByIdAndDelete(ClientID,(e,clientRemove)=>{
            if(e)               return res.status(500).send({message: 'error al borrar al cliente'});
            if(!clientRemove)   return res.status(404).send({message: 'el cliente no existe'});
            return res.status(200).send({
                cliente:clientRemove
            })
        });
    }       
}

module.exports=clienteController;