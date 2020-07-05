'use strict'

let usuarioController=require('../controllers/usuario');
const express=require('express');
const router= express.Router();

//middleware
var crypto = require('crypto')
var multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './uploads/');
  },
  filename(req, file = {}, cb) {
    const { originalname }  = file;
    const fileExtension     = (originalname.match(/\.+[\S]+$/) || [])[0];
    // cb(null, `${file.fieldname}__${Date.now()}${fileExtension}`);
   
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + fileExtension);
    });
  },
});

var mul_upload = multer({dest: './uploads/',storage});


router.get('/home',usuarioController.usuario);
router.post('/test',usuarioController.test);
router.post('/register',usuarioController.saveUser);
router.post('/login',usuarioController.loginUser);
router.get('/user/:id?',usuarioController.getUser);
router.get('/allUsers',usuarioController.getAllUsers);
router.put('/user/:id',usuarioController.UpdateUser);
router.delete('/user/:id', usuarioController.deleteUser);
router.post('/upload-image/:id', mul_upload.single('image'), usuarioController.UploadImage);
router.get('/getImage/:image',usuarioController.getImageFile);


module.exports=router;