const express = require('express');
const { body } = require('express-validator'); 

const productionController = require('../controllers/prodControllers');
const router = express.Router();
/*
//router.post('/ajouterProd',productionController.post);
 //router.post('/ajouterProdDetail',productionController.postD);
//router.post('/prodFinale',productionController.POST);
*/
router.post('/liste',productionController.postListe);
router.put('/put',productionController.put);
router.delete('/delete',productionController.delete);
   module.exports = router;
 