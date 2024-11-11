const db = require("./dbClient.js");

class CoreModel {
  // Attribut d'instnce
  id;

  // Attribut de classe
  static tableName = null;


  constructor(obj) {
    this.id = obj.id;
  }

  async delete() {
    // ==> On cherche le nom de la table dans laquelle supprimer l'instance

    // On a l'instance
    // console.log(this);

    // On a la classe de l'instance
    // console.log(this.constructor);

    // On a les propriété (statique) de la classe de l'instance
    // console.log(this.constructor.tableName);

    await db.query(`DELETE FROM "${this.constructor.tableName}" WHERE id = $1`, [this.id]);
  }

  async insert() {

    // console.log(this); // { id, firstname, lastname, email, password }
    // console.log(Object.keys(this)); // [ 'id', 'firstname', 'lastname', 'email', 'password' ]
    // console.log(Object.keys(this).slice(1)); // [ 'firstname', 'lastname', 'email', 'password' ]
    // console.log(Object.keys(this).slice(1).map(key => `"${key}"`)); // [ '"firstname"', '"lastname"', '"email"', '"password"' ]
    // console.log(Object.keys(this).slice(1).map(key => `"${key}"`).join(", "));
    const attributesNames = Object.keys(this).slice(1).map(key => `"${key}"`).join(", ");

    // console.log(this); // { id, firstname, lastname, email, password }
    // console.log(Object.keys(this)); // [ 'id', 'firstname', 'lastname', 'email', 'password' ]
    // console.log(Object.keys(this).slice(1)); // [ 'firstname', 'lastname', 'email', 'password' ]
    // console.log(Object.keys(this).slice(1).map((key, index) => index)); // [ 0, 1, 2, 3 ]
    // console.log(Object.keys(this).slice(1).map((key, index) => `$${index + 1}`)); // [ '$1', '$2', '$3', '$4' ]
    // console.log(Object.keys(this).slice(1).map((key, index) => `$${index + 1}`).join(", ")); // $1, $2, $3, $4
    const attributesIndexes = Object.keys(this).slice(1).map((key, index) => `$${index + 1}`).join(", ");

    // console.log(this);
    // console.log(Object.values(this)); // [ undefined, 'Jamy', 'Gourmaud', 'jammy@cestpassorcier.io', "C'estPasSorcierQuandMeme!" ]
    // console.log(Object.values(this).slice(1)); // [ 'Jamy', 'Gourmaud', 'jammy@cestpassorcier.io', "C'estPasSorcierQuandMeme!" ]
    const attributesValues = Object.values(this).slice(1);

    const result = await db.query(`
      INSERT INTO "${this.constructor.tableName}"
        (${attributesNames})
      VALUES
        (${attributesIndexes})
      RETURNING
        id
      ;
    `, attributesValues
    );
    const insertedId = result.rows[0].id;
    this.id = insertedId;
  }

  static async findById(id) {
    // On a accès à la classe 
    // console.log(this);

    // Donc les propriété de classe
    // console.log(this.tableName);

    // Note : pour appeler le contructeur, on utilise directement
    // console.log(new this(...));

    const result = await db.query(`SELECT * FROM "${this.tableName}" WHERE "id" = $1`, [id]);
    const rawEntity = result.rows[0];
    if (! rawEntity) { return null; }

    return new this(rawEntity);
  }
}

module.exports = CoreModel;
