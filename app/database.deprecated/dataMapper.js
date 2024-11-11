const db = require("./dbClient.js");

const dataMapper = {
  async findAllLevels() {
    // Classique
    const result = await db.query("SELECT * FROM level");
    const levels = result.rows;
    return levels;

    // Sucré
    // const { rows: levels } = await db.query("SELECT * FROM level");
    // return levels;
  }
};

module.exports = dataMapper;