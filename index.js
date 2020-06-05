'use strict'
var app=require('./app');
var mongoose=require('mongoose');

var PORT= 3700;
app.listen(PORT,()=>{
console.log(`el servidor esta corriendo en en puerto ${PORT}`);
});

mongoose.set('useFindAndModify',false);
mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost:27017/ProyectoDev',{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{
    console.log('la base de datos esta conectada');
}).catch(e=>console.log(e));
