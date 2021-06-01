const unite = require('../models/unite');
const produit= require('../models/produit');
const{ validationResult } = require('express-validator');

 
exports.getAllunites = async(req, res, next) => {
try {
const [allunites] = await unite.fetchAll();
res.status(200).json(allunites);

}catch(err) {
    if(!err.statuscode){
        err.statuscode = 500
    }
    next(err);

    }
 
};

exports.findU=async(req,res,next)=>{
    const nom_P = req.body.nom_P;

    try{
 
      const Produit =await produit.fetchProduit(nom_P);
     
      if (Produit[0].length !==1)
      {  
        const error =new Error('Produit  n\'existe pas');
        error.statusCode=401;
        throw error;
      }else {
        const storedProd =Produit[0][0]; 
   const id_u= storedProd.id_unite;
       
      const Unite =await unite.find(id_u);
     
      if (Unite[0].length !==1)
      {  
        const error =new Error('unite  n\'existe pas');
        error.statusCode=401;
        throw error;
      }else {
        const storedUnite =Unite[0][0]; 
        res.status(200).json(storedUnite);
      }
      }
  }catch(err){
        if(!err.statusCode){
          err.statusCode =500;
        }
        next(err);
      }
    
  };
  
  

