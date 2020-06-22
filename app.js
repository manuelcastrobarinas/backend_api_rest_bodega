const express=require('express');
const BodyParser=require('body-parser');
const app=express();


// cargar archivos RUTAS

let bodegaRutas=require('./routes/bodega');
let ciudadRutas=require('./routes/ciudad');
let clienteRutas=require('./routes/cliente');
let equipoRutas=require('./routes/equipo');
let usuarioRutas=require('./routes/usuario');



//MIDDLEWARES
app.use(BodyParser.urlencoded({extended:false}));
app.use(BodyParser.json());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//RUTAS
app.use('/api',usuarioRutas,bodegaRutas,ciudadRutas,clienteRutas,equipoRutas);

//EXPORTAR 
module.exports= app;