const db = require('../util/database');
module.exports = class Unite {
   

    static fetchAll(){
        return db.execute ('SELECT * FROM unite');
     
}

static find(id_unite){
    return db.execute(
        'SELECT * FROM unite WHERE id_unite = ? ',[id_unite]);
    
}










}