const db = require('../util/database');
/**
 * id .nom .. idG
 */


module.exports = class prod {


    static postP (type_production,status,date_transaction,commentaire,id){
        return db.execute('INSERT INTO production (type_production,status,date_transaction,commentaire,id) VALUES (?,?,?,?,?)',
        [type_production,status,date_transaction,commentaire,id]);
    }

       
    static findId (){
        return db.execute('SELECT max(id_production) FROM production ');
    } 
    
    static postD (id_produit,id_production,date,quantite,commentaire){
        return db.execute('INSERT INTO detail_production (id_produit,id_production,date,quantite,commentaire) VALUES (?,?,?,?,?)',
        [id_produit,id_production,date,quantite,commentaire]);
    }
   static delete(id_production)
   {
    return db.execute('DELETE FROM production WHERE id_production = ?',

    [id_production]);
}


}