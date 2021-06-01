const db = require('../util/database');
/**
 *
 */


module.exports = class Femme {
    constructor(idj,nom,prenom,numtel,adresse,cle){
        this.id = idg ;
        this.nom = this.nom;
        this.prenom = this.prenom;
        this.numtel = this.numtel;
        this.cle = this.cle; // 7777
    
    }
    static findG(cle_G){
        return db.execute(
            'SELECT * FROM gouvernorat WHERE cle_G = ? ',[cle_G]);
        
    }

/*
    static AjoutidG (idG,id){
        return db.execute('INSERT INTO femmes (idG) VALUES (?) WHERE id = ? ',
        [idG,id]);
    }
    */
    static fetchAll(){
        return db.execute ('SELECT * FROM femmes');
     
    }
    static find(cle,id_G){
        return db.execute(
            'SELECT * FROM femmes WHERE cle = ? AND id_G = ?  ',[cle,id_G]);
        
    }
    static save (nom,prenom,numtel,cle,adresse,id_G){
        return db.execute('INSERT INTO femmes (nom,prenom,numtel,cle,adresse,id_G) VALUES (?,?,?,?,?,?)',
        [nom,prenom,numtel,cle,adresse,id_G]);
    }
  
    /**** 
    static login(cle){
        return db.execute('SELECT count(*) FROM femmes WHERE cle = ?',[cle]);
    }
    */
 static fetchFemme(cle)
 {
    return db.execute(
        'SELECT * FROM femmes WHERE cle = ?',[cle]); 
 }
   static update(id, nom,prenom,numtel,cle,adresse,id_G) {
        return db.execute('UPDATE femmes SET nom = ?, prenom= ? ,numtel= ? , cle= ? , adresse= ? WHERE id = ?', [nom,prenom,numtel,cle,adresse,id]);
      }
    
      static delete(id) {
        return db.execute('DELETE FROM femmes WHERE id = ?', [id]);
      }
   
  
};