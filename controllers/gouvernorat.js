const gouvernorat = require('../models/gouvernorat');
const{ validationResult } = require('express-validator');
exports.postgouv= async(req,res,next)=>{

  const errors= validationResult(req);

  if (!errors.isEmpty()) return
  const nom_G =req.body.nom_G;
  const cle_G =req.body.cle_G;

 try{
 

 
const result =await gouvernorat.post(nom_G,cle_G);
res.status(201).json({message:'gouvernorat enregistrer'})
}catch(err){
  if(!err.statusCode){
    err.statusCode=500;
    console.log(err);
  }  
  next(err);
  }
  }
 
exports.getAllgouvernorats = async(req, res, next) => {
try {
const [allgouvernorats] = await gouvernorat.fetchAll();
res.status(200).json(allgouvernorats);

}catch(err) {
    if(!err.statuscode){
        err.statuscode = 500
    }
    next(err);

    }
 
};

  exports.putgouv = async (req, res, next) => {
    try {
      const putResponse = await gouvernorat.update(req.body.id_G, req.body.nom_G ,req.body.cle_G);
      res.status(200).json(putResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.deletegouv = async (req, res, next) => {
    try {
      const deleteResponse = await gouvernorat.delete(req.params.id);
      res.status(200).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };