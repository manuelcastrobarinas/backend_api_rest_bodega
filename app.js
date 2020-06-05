var express=require('express');
var BodyParser=require('body-parser');
var app=express();


// cargar archivos RUTAS
var usuarioRutas=require('./routes/usuario');


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
app.use('/api',usuarioRutas);

//EXPORTAR 
module.exports= app;