const femme = require('../models/femme');
const gouvernorat = require('../models/gouvernorat');
const jwt = require('jsonwebtoken');

const{ validationResult } = require('express-validator');
/*
exports.Images= async(req,res,next)=>{

  try {
    const [allfemmes] = await femme.fetchImage();
    console.log(allfemmes);
    res.status(200).json(allfemmes);
    
    }catch(err) {
        if(!err.statuscode){
            err.statuscode = 500
        }
        next(err);
    
        }
     
    };
    */
  exports.cle= async(req,res,next)=>{


  const errors= validationResult(req);

 try{
   let a=12;
 let ch=a.toString();
let s="0";

while(ch.length !=4)
 {
  ch=s.concat(ch);
 }



res.status(201).json({ch});

  
}catch(err){
  if(!err.statusCode){
    err.statusCode=500;
    console.log(err);
  }  
  next(err);
  }

  }
/*
exports.signup= async(req,res,next)=>{

  const errors= validationResult(req);

  if (!errors.isEmpty()) return
  const nom=req.body.nom;
  const prenom=req.body.prenom;
  const numtel=req.body.numtel;
  const adresse=req.body.adresse;
  const cle_G=req.body.cle_G;
// nom gouv
 try{
  const Gouv =await femme.findG(cle_G);
  if (Gouv[0].length !==1)
  {  
    const error =new Error('gouvernorat  n\'existe pas');
    error.statusCode=401;
    throw error;
  }else {
    const storedGouv =Gouv[0][0]; 
    const id_G=storedGouv.id_G;
const req = await femme.fetchFemme(Cle); 
if (req[0].length !==1)
{  
  const error =new Error('femme existe déja');
  error.statusCode=401;
  throw error;
}else {
 
const result =await femme.save(nom,prenom,numtel,Cle,adresse,id_G);
res.status(201).json({message:'femme enregistrer'})
}
  }
}catch(err){
  if(!err.statusCode){
    err.statusCode=500;
    console.log(err);
  }  
  next(err);
  }

  }
  */
 
exports.getAllfemmes = async(req, res, next) => {
try {
const [allfemmes] = await femme.fetchAll();
res.status(200).json(allfemmes);

}catch(err) {
    if(!err.statuscode){
        err.statuscode = 500
    }
    next(err);

    }
 
};
/*** 
exports.login=async(req,res,next)=>{
  try{
    let loginPost =await femme.login(req.body.cle)
      
    console.log("****");
    console.log((Object.values(loginPost[0][0]))[0]);

    if ((Object.values(loginPost[0][0]))[0]==1)
    {  
        res.status(200).json({msg:"login existe"});
    }else 
    {  res.status(200).json({msg:"login n'existe pas"});
    }
    }catch(err){
      if(!err.statusCode){
        err.statusCode =500;
      }
      next(err);
    }
  
};
*/

exports.login=async(req,res,next)=>{
  const Cle = req.body.cle;
//70-7777
  try{
    if(Cle.isEmpty)
    {
      const error =new Error('Remplir cle');
      error.statusCode=401;
      throw error;
    }



    if(Cle.length!=9 )
    {
      const error =new Error('invalide taille cle');
      error.statusCode=401;
      throw error;
    }
   
  
    if(Cle.indexOf('-')!=2 )
   { const error =new Error('forme invalide ..-....');
      error.statusCode=401;
      throw error;
  }
 const ch1 =Cle.substring(0,2); 
 const ch2=Cle.substring(3,9); 


/*
 *  const x =await femme.findG(ch1);
 *     if (x[0].length !==1)
    {  
      const error =new Error('region  n\'existe pas');
      error.statusCode=401;
      throw error;
    }else
 */
     
    const Gouv =await gouvernorat.find(ch1);
    if (Gouv[0].length !==1)
    {  
      const error =new Error('Gouvernorat  n\'existe pas');
      error.statusCode=401;
      throw error;
    }else {
      const storedGouv =Gouv[0][0]; 
      const id_G=storedGouv.id_G;

    

    const Femme =await femme.find(ch2,id_G);
   
    if (Femme[0].length !==1)
    {  
      const error =new Error('femme  n\'existe pas');
      error.statusCode=401;
      throw error;
    }else {
      const storedUser =Femme[0][0]; 

      const token =jwt.sign(
        {
          cle:storedUser.cle,
          userId:storedUser.id,
          userNom:storedUser.nom,
          userImage:storedUser.image_F
        },
        'secretfortoken',
        {expiresIn:'1h'}
      );
      res.status(200).json({token,userId:storedUser.id,userNom:storedUser.nom,userImage:storedUser.image_F});
    }
  }
}catch(err){
      if(!err.statusCode){
        err.statusCode =500;
      }
      next(err);
    }
  
};


  
