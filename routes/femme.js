const express = require('express');
const { body } = require('express-validator'); 

const femmeController = require('../controllers/femme');
const router = express.Router();
router.get('/', femmeController.getAllfemmes);
/*
router.put('/', femmeController.putfemme);

router.delete('/:id', femmeController.deletefemme);
*/
router.post('/login',femmeController.login);
router.get('/cle',femmeController.cle);
/*

router.post('/signup',[
    body('nom').trim().not().isEmpty(),
   body('prenom').trim().not().isEmpty(),
   body('numtel').trim().not().isEmpty(),
   body('adresse').trim().not().isEmpty(),
   body('cle').trim().not().isEmpty(),
   body('cle_G').trim().not().isEmpty(),
 ],femmeController.signup
   ); 
   */
   module.exports = router;
 