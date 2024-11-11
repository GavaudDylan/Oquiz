const CoreModel = require("./CoreModel.js");
const db = require("./dbClient.js");

class Level extends CoreModel {
  name;
  
  static tableName = "level";

  constructor(obj) {
    super(obj);
    this.name = obj.name;
  }

  async update() {
    await db.query(`
      UPDATE
        "level"
      SET
        "name" = $2,
        "updated_at" = $3
      WHERE
        "id" = $1
    `, [this.id, this.name, new Date()]);
  }

  static async findAll() {
    const result = await db.query(`SELECT * FROM "level"`);
    const rawLevels = result.rows; 
    return rawLevels.map(rawLevel => new Level(rawLevel));
  }
}

module.exports = Level;
