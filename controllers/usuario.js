'use strict' 
var usuario=require('../models/usuario');
var fs = require('fs');



var ControllerUsuario = {

    usuario: function(req,res){
        return res.status(200).send({
            message: 'soy la home del usuario' 
        });
    },

    test:function (req,res) {
        return res.status(200).send({
            message: 'soy el metodo test del controlador usuario',
        });
    },

    saveUser: function(req,res){
        var user=new usuario();
        
        var params=req.body;
        user.nombre=params.nombre;
        user.password=params.password;
        user.email=params.email;
        user.image=null;
       
        user.save((err,usuarioStored)=>{
            if(err) return res.status(500).send({message: 'error al guardar el usuario'});
            if(!usuarioStored) return res.status(404).send({message: 'no se ha podido guardar el usuario'});
            return res.status(200).send({user:usuarioStored});
        });
    },

    getUser: function(req,res){
        var userId=req.params.id;
        
        if(userId==null) return res.status(404).send({message: 'el usuario no existe'});

        usuario.findById(userId, (err,usuario)=>{
            if(err) return res.status(500).send({message: 'error al devolver los datos'});
            if(!usuario) return res.status(404).send({message: 'el usuario no existe'});
            return res.status(200).send({
                usuario
            });
        });
    },

    getAllUsers: function(req,res){
        usuario.find({}).exec((err,usuarios)=>{
            if(err) return res.status(500).send({ message: 'error al devolver los datos'});
            if(!usuarios) return res.status(404).send({ message: 'no hay usuarios para mostrar' });

            return res.status(200).send({usuarios});
        });
    },

    UpdateUser: function(req,res){
        let usuarioId=req.params.id;
        var update= req.body;

        usuario.findByIdAndUpdate(usuarioId,update,{new:true}, (err,userUpdate)=>{
            if(err) return res.status(500).send({message: 'error al actualizar usuario'});
            if(!userUpdate) return res.status(404).send({message: 'no existe el usuario para poder actualizarlo'});

            return res.status(200).send({
                usuario: userUpdate
            });
        });
    },

    deleteUser: function(req,res){
        let usuarioId=req.params.id;

        usuario.findByIdAndDelete(usuarioId,(err,usuarioRemove)=>{
            if(err) return res.status(500).send({message: 'no se ha podido borrar el usuario'});
            if(!usuarioRemove) return res.status(404).send({message: 'no se puede eliminar ese usuario'});

            return res.status(200).send({
                usuario: usuarioRemove
            });
        });
    },

   UploadImage : function(req,res){
    var usuarioId= req.params.id;
    var fileName = 'imagen no subida';

    if(req.file){

        var file_path = req.file.path;
        var file_split = file_path.split('\\');
        var file_name = file_split[1];
        var ext_split = req.file.originalname.split('.');
        var file_ext = ext_split[1]
    
        if(file_ext== 'png' || file_ext== 'gif' || file_ext== 'jpg' || file_ext =='PNG' || file_ext== 'GIF' || file_ext== 'JPG'){
         
            usuario.findByIdAndUpdate(usuarioId, {image:file_name}, {new:true}, (err, imagenUpdated) => {
    
                if(err) return res.status(500).send({message: 'la imagen no se ha subido'});
                if(!imagenUpdated) return res.status(404).send({message: 'el usuario no existe'});
                
                res.status(200).send({
                        usuario: imagenUpdated
                });    
            }); 
        }else{
            fs.unlink(file_path,(err)=>{
                return  res.status(200).send({message: 'la Extension del archivo no valida'});
            });   
        }
      } else{
            res.status(200).send({
                message: ({fileName})
            });
        }
   },
   getImageFile: function(req,res){
    var file= req.params.image;
    var path_file='./uploads/'+file;
        fs.exist(path_file, (exists)=>{
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({
                    message: 'no existe la imagen...'
                });
            }
        });
   }
}

module.exports= ControllerUsuario;