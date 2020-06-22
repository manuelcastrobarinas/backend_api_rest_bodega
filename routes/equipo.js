'use strict'

let equipoController = require("../controllers/equipo")
const express=require('express');
const router=express.Router();


router.post('/register/equipo',equipoController.SaveEquipo);
router.get('/equipo/:id?',equipoController.getEquipo);
router.get('/Allequipos',equipoController.getAllEquipos);
router.put('/equipo/:id',equipoController.UpdateEquipo);
router.delete('/equipo/:id',equipoController.RemoveEquipo);
module.exports=router;