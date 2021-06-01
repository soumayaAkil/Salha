const db = require('../util/database');

module.exports = class Gouvernorat {
    constructor(id_G,nom_G,cle_G){
        this.id_G = id_G ;
        this.nom_G = this.nom_G;
        this.cle_G = this.cle_G; // 72
    
    }


    static fetchAll(){
        return db.execute ('SELECT * FROM gouvernorat');
     
}

static find(cle_G){
    return db.execute(
        'SELECT * FROM gouvernorat WHERE cle_G = ? ',[cle_G]);
    
}

static post(nom_G,cle_G){
    return db.execute('INSERT INTO gouvernorat (nom_G,cle_G) VALUES (?,?)',
    [nom_G,cle_G]);
}



    static update(id_G, nom_G,cle_G) {
        return db.execute('UPDATE gouvernorat SET nom_G = ?, cle_G= ?  WHERE id_G = ?', [nom_G,cle_G,id_G]);
      }
    
      static delete(id_G) {
        return db.execute('DELETE FROM gouvernorat WHERE id_G = ?', [id_G]);
      }





}