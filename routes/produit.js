
const express = require('express');
const { body } = require('express-validator'); 
const prodController = require('../controllers/produit');
const routerP = express.Router();
routerP.get('/', prodController.getAllproduits);
routerP.post('/min', prodController.getPord);
routerP.get('/images',prodController.Images);
module.exports = routerP;
