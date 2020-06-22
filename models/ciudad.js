'use strict'
const mongoose=require('mongoose');
let schema=mongoose.Schema;

let ciudadSchema=schema({
    nombre:String
});

module.exports=mongoose.model('ciudad',ciudadSchema);