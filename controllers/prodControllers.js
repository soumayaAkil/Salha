const prod = require('../models/prodModels');
const{ validationResult } = require('express-validator');
/*
 
exports.post= async(req,res,next)=>{

    const errors= validationResult(req);


    const date_transaction=req.body.date_transaction;
    const id= req.body.id;

let type_production="output";
let status="prêt";

////////////////////////////////// const commentaire=req.body.commentaire;
let commentaire="";

  

   try{
   
    
   
  const result =await prod.postP(type_production,status,date_transaction,commentaire,id);
  res.status(201).json({message:'productionnnnnnnnn enregistrer'})
  }catch(err){
    if(!err.statusCode){
      err.statusCode=500;
      console.log(err);
    }  
    next(err);
    }
    }
    exports.postD= async(req,res,next)=>{

        const errors= validationResult(req);
    
    
        const date=req.body.date;
        const quantite= req.body.quantite;
       const id_produit=req.body.id_produit;

    
    
    ////////////////////////////////// const commentaire=req.body.commentaire;
    let commentaire="";
    try{
       let id_max=await prod.findId();

      let id_production=id_max[0][0]['max(id_production)'];
    
      const result =await prod.postD(id_produit,id_production,date,quantite,commentaire);
      res.status(201).json({message:'detail production enregistrer'})
      }catch(err){
        if(!err.statusCode){
          err.statusCode=500;
          console.log(err);
        }  
        next(err);
        }
        }
*/
exports.postListe= async(req,res,next)=>{
  const errors= validationResult(req);




try{
    const type_production="output";
    const status="prêt";
    
let commentaire="";
const liste=req.body;
const date=liste[0].date_transaction;

const id=liste[0].id;
   let result =await prod.postP(type_production,status,date,commentaire,id);

// production sans date 

    const id_max=await prod.findId();
   const id_production=id_max[0][0]['max(id_production)'];  
  for(var i=0; i<liste.length;i++)
  {
    let quantite= liste[i].quantite;
    let id_produit=liste[i].id_produit;
    let produ =await prod.postD(id_produit,id_production,date,quantite,commentaire);
   // date  logique dans detail prod , principr id et dtae le meme un seul 
  }
   res.status(201).json({message:'liste  production enregistrer'})

}catch(err){
  if(!err.statusCode){
    err.statusCode=500;
    console.log(err);
  }  
  next(err);
  } 
}
/*
  const date=req.body.date_transaction;
  const quantite= req.body.quantite;
 const id_produit=req.body.id_produit;
  const id=req.body.id;

  let type_production="output";
let status="prêt";
   


let commentaire="";
try{
const result =await prod.postP(type_production,status,date,commentaire,id);

 let id_max=await prod.findId();

let id_production=id_max[0][0]['max(id_production)'];

const produ =await prod.postD(id_produit,id_production,date,quantite,commentaire);
res.status(201).json({message:'detail production enregistrer'})
*/
    /*    
    exports.POST= async(req,res,next)=>{

      const errors= validationResult(req);
  
  
      const date=req.body.date_transaction;
      const quantite= req.body.quantite;
     const id_produit=req.body.id_produit;
      const id=req.body.id;
  
      let type_production="output";
    let status="prêt";
       


  let commentaire="";
  try{
    const result =await prod.postP(type_production,status,date,commentaire,id);
  
     let id_max=await prod.findId();

    let id_production=id_max[0][0]['max(id_production)'];
  
    const produ =await prod.postD(id_produit,id_production,date,quantite,commentaire);
    res.status(201).json({message:'detail production enregistrer'})
    }catch(err){
      if(!err.statusCode){
        err.statusCode=500;
        console.log(err);
      }  
      next(err);
      }
      }
  */    
exports.put= async (req, res, next) => {



  try{
   
    const type_production="output";
    const status="prêt";
    
let commentaire="";
const liste=req.body;
const date=liste[0].date_transaction;

const id=liste[0].id;
const putResponse = await prod.delete(liste[0].id_production);
   let result =await prod.postP(type_production,status,date,commentaire,id);

// production sans date 

    const id_max=await prod.findId();
   const id_production=id_max[0][0]['max(id_production)'];  
  for(var i=0; i<liste.length;i++)
  {
    let quantite= liste[i].quantite;
    let id_produit=liste[i].id_produit;
    let produ =await prod.postD(id_produit,id_production,date,quantite,commentaire);

  }
 



  res.status(201).json({message:'detail production modifier'})
    
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


exports.delete= async (req, res, next) => {



  try{
   

const putResponse = await prod.delete(req.body.id_production);
   
  res.status(201).json({message:'detail production supprimer'})
    
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


































