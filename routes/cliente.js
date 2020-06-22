'use strict'

let clienteController = require("../controllers/cliente");
const express=require('express');
const router=express.Router();




router.post('/register/client',clienteController.saveClient);
router.get('/client/:id?',clienteController.getClient);
router.get('/AllClients',clienteController.getAllClient);
router.put('/client/:id',clienteController.updateClient);
router.delete('/client/:id',clienteController.RemoveClient);


module.exports=router;