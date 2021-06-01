const produit = require('../models/produit');
const{ validationResult } = require('express-validator');

 
exports.getAllproduits = async(req, res, next) => {
try {
const [allproduits] = await produit.fetchAll();
res.status(200).json(allproduits);

}catch(err) {
    if(!err.statuscode){
        err.statuscode = 500
    }
    next(err);

    }
 
};

exports.Images= async(req,res,next)=>{

    try {
      const [allfemmes] = await produit.fetchImage();
      console.log(allfemmes);
      res.status(200).json(allfemmes);
      
      }catch(err) {
          if(!err.statuscode){
              err.statuscode = 500
          }
          next(err);
      
          }
       
      };
exports.getPord = async(req, res, next) => {
    const nom_P = req.body.nom_P;
    try {
    const prod= await produit.fetchProduit(nom_P);
   const storedProd= prod[0][0];
   res.status(200).json(storedProd);
   /*
    res.status(200).json({id_produit:storedProd.id_produit,nb_min:storedProd.nb_min,image_P:storedProd.image_P,nom_P:storedProd.nom_P,id_unite:storedProd.id_unite});
    */
    }catch(err) {
        if(!err.statuscode){
            err.statuscode = 500
        }
        next(err);
    
        }
     
    };
    

