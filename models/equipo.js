'use strict'
let moongose=require('mongoose');
let schema=moongose.Schema;

let equipoSchema =schema({
    nombre:String,
    cantidad:Int16Array,
    estado:{type:String, default:'demo', enum:['demo','venta']}
});

module.exports=moongose.model('equipo',equipoSchema);