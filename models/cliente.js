'use strict'
const mongoose=require('mongoose');
let schema=mongoose.Schema;

let clienteSchema=schema({
    nombre  :String,
    image   :String
});

module.exports=mongoose.model('cliente',clienteSchema);

