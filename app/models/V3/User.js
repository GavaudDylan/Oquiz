const CoreModel = require("./CoreModel.js");
const db = require("./dbClient.js");

class User extends CoreModel {
  firstname;
  lastname;
  email;
  password;

  static tableName = "user";

  constructor(obj) {
    super(obj);
    this.firstname = obj.firstname;
    this.lastname = obj.lastname;
    this.email = obj.email;
    this.password = obj.password;
  }

  get fullname() { return `${this.firstname} ${this.lastname}`; }

  async update() {
    const query = `
      UPDATE 
        "user"
      SET
        "firstname" = $2,
        "lastname" = $3,
        "email" = $4,
        "password" = $5,
        "updated_at" = $6
      WHERE
        "id" = $1
    `;
    const values = [this.id, this.firstname, this.lastname, this.email, this.password, new Date()];
    await db.query(query, values);
  }

  static async findAll() {
    const result = await db.query(`SELECT * FROM "user"`);
    const rawUsers = result.rows;
    const users = rawUsers.map(rawUser => new User(rawUser));
    return users;
  }

  static async findByEmail(email) {
    const result = await db.query(`SELECT * FROM "user" WHERE "email" = $1`, [email]);
    const rawUser = result.rows[0];

    if (! rawUser) { return null; }

    return new User(rawUser);
  }
}

module.exports = User;
