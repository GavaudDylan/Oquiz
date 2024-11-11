const db = require("./dbClient.js");

class Level {
  id;
  name;

  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
  }

  // CREATE (méthode d'instance)
  async insert() {
    // Appelle client.query() pour insérer le level en BDD
    const result = await db.query(`
      INSERT INTO "level"
        ("name")
      VALUES
        ($1)
      RETURNING
        id
    `, [this.name]);
    // Le "RETURNING id" permet de récupérer l'ID généré par la commande INSERT INTO
    // Note : RETURNING * permet de récupérer TOUT l'ENREGISTREMENT qui vient d'être inséré en BDD

    // console.log(result); // { rowCOunt, oid, rows: [{ id }], fields, ... }
    const insertedId = result.rows[0].id; // On récupère l'ID généré par la BDD
    this.id = insertedId; // Et on met l'ID dans l'instance
  }

  // DELETE (méthode d'instance)
  async delete() {
    const result = await db.query(`DELETE FROM "level" WHERE id = $1`, [this.id]);
    
    if (result.rowCount === 1) { // Si la suppression s'est bien passé, alors le rowCount vaut 1, on prévient en renvoyant true
      return true;
    } else {
      return false;
    }
  }
  
  // UPDATE (méthode d'instnce)
  async update() {
    await db.query(`
      UPDATE
        "level"
      SET
        "name" = $2
      WHERE
        "id" = $1
    `, [this.id, this.name]);
  }

  // READ (méthode de classe) - findById
  static async findById(id) {
    const result = await db.query(`SELECT * FROM "level" WHERE "id" = $1`, [id]);
    // console.log(result); // { command, rowCount, oid, rows}
    const rawLevel = result.rows[0]; // { id, name, created_at, updated_at }   (=> donnée BRUTE)

    const level = new Level(rawLevel); // Level { id, name, insert(), delete(), update() }  (=> donnée BRUTE + méthode active record)
    return level;
  }

  // READ (méthode de classe) - findAll
  static async findAll() {
    // Récupérer tous les level de la BDD
    const result = await db.query(`SELECT * FROM "level"`);
    const rawLevels = result.rows; // ARRAY [{...}, {...}, {...}]
    
    // Méthode 1 :
    const ARlevels = []; // ARRAY [Level{...}, Level{...}, Level{...}]
    rawLevels.forEach(rawLevel => {
      ARlevels.push(new Level(rawLevel));
    });

    // Méthode 2 :
    // const ARlevels = rawLevels.map(rawLevel => new Level(rawLevel));

    return ARlevels;
  }
}

module.exports = Level;
