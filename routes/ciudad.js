'use strict'

let ciudadController = require('../controllers/ciudad');
const express = require('express');
const router=express.Router();


router.post('/register/city', ciudadController.saveCiudad);
router.get('/city/:id?',ciudadController.getCiudad);
router.put('/city/:id',ciudadController.UpdateCity);
router.get('/Allcity',ciudadController.getAllCity);
router.delete('/city/:id',ciudadController.RemoveCity);

module.exports=router;