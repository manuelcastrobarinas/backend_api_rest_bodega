'use strict'
const mongoose=require('mongoose');
let schema=mongoose.Schema;

let bodegaSchema=schema({
    nombre:String,
    direccion:String,
    telefono:String
});

module.exports=mongoose.model('bodega',bodegaSchema);