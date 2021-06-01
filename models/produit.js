const db = require('../util/database');

module.exports = class Produit {
    constructor(id,nom,prenom,numtel,adresse,cle){
        this.id = id ;
        this.nom = this.nom;
        this.prenom = this.prenom;
        this.numtel = this.numtel;
        this.cle = this.cle; // 7777
    
    }
    /*
    static findU(nom_unite){
        return db.execute(
            'SELECT * FROM gouvernorat WHERE nom_unite = ? ',[nom_unite]);
        
    }
*/
/*
    static AjoutidG (idG,id){
        return db.execute('INSERT INTO femmes (idG) VALUES (?) WHERE id = ? ',
        [idG,id]);
    }
    */
    static fetchAll(){
        return db.execute ('SELECT * FROM produit');
     
    }
    static find(nom_P,id_unite){
        return db.execute(
            'SELECT * FROM produit WHERE nom_P = ? AND id_unite = ?  ',[nom_P,id_unite]);
        
    }
    static fetchImage(){
        return db.execute('SELECT image_P FROM produit ');   
       }
  
    /**** 
    static login(cle){
        return db.execute('SELECT count(*) FROM femmes WHERE cle = ?',[cle]);
    }
    */
 static fetchProduit(nom_P)
 {
    return db.execute(
        'SELECT * FROM produit WHERE nom_P = ?',[nom_P]); 
 }

};