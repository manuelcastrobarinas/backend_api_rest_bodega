'use strict'

let bodegaController = require("../controllers/bodega");
const express=require('express');
const router=express.Router();


router.post('/register/bodega',bodegaController.saveBodega);
router.get('/bodega/:id?',bodegaController.getBodega);
router.get('/allbodegas',bodegaController.getAllBodega);
router.put('/bodega/:id',bodegaController.UpdateBodega);
router.delete('/bodega/:id',bodegaController.DeleteBodega);
module.exports=router;