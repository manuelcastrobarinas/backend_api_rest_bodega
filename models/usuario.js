'use strict'
const mongoose=require('mongoose');
let schema =mongoose.Schema;

let usuarioSchema= schema({
    nombre  :String,
    password:String,
    email   :String,
    image   :String
});
module.exports=mongoose.model('usuario',usuarioSchema);