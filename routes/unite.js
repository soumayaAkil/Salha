
const express = require('express');
const { body } = require('express-validator'); 
const uniteController = require('../controllers/unite');
const routerU = express.Router();
routerU.get('/allunite', uniteController.getAllunites);

routerU.post('/findU',uniteController.findU);

   
module.exports = routerU;