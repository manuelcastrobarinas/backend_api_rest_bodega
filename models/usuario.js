'use strict'
const mongoose=require('mongoose');
let schema =mongoose.Schema;
mongoose.set('useCreateIndex', true);

let usuarioSchema= schema({
    nombre:{
      type:String,
      required: true,
      trim:true,
    },
    password:{
      type:String,
      required: true,
      trim:true,
   },
    email:{
      type:String,
      required: true,
      trim:true,
      unique:true
   },
    image:{
      type:String
   }
},{
   timestamps:true  
});
module.exports=mongoose.model('usuario',usuarioSchema);