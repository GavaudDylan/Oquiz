const db = require("./dbClient.js");

class User {
  #id;
  #firstname;
  #lastname;
  #email;
  #password;

  constructor(obj) {
    this.#id = obj.id;
    this.#firstname = obj.firstname;
    this.#lastname = obj.lastname;
    this.#email = obj.email;
    this.#password = obj.password;
  }

  get id() { return this.#id; }
  get firstname() { return this.#firstname; }
  get lastname() { return this.#lastname; }
  get email() { return this.#email; }
  get password() { return this.#password; }
  get fullname() { return `${this.firstname} ${this.lastname}`; }

  set firstname(value) { this.#firstname = value; }
  set lastname(value) { this.#lastname = value; }
  set email(value) { this.#email = value; }
  set password(value) { this.#password = value; }

  async insert() {
    const result = await db.query(`
      INSERT INTO "user"
        ("firstname", "lastname", "email", "password")
      VALUES
        ($1, $2, $3, $4)
      RETURNING
        id
      ;
    `, [this.#firstname, this.#lastname, this.#email, this.#password]
    );

    const insertedId = result.rows[0].id;
    this.#id = insertedId;
  }

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
    const values = [
      this.#id,
      this.#firstname,
      this.#lastname,
      this.#email,
      this.#password,
      new Date()
    ];
    
    await db.query(query, values);
  }

  async delete() {
    await db.query(`DELETE FROM "user" WHERE id = $1`, [this.#id]);
  }

  static async findById(id) {
    const result = await db.query(`SELECT * FROM "user" WHERE "id" = $1`, [id]);
    const rawUser = result.rows[0]; // { ... } || undefined

    if (! rawUser) { return null; } // Typique active record : return null quand le record n'est pas trouvé en BDD

    return new User(rawUser); // On renvoie un ACTIVE RECORD
  }

  static async findByEmail(email) {
    const result = await db.query(`SELECT * FROM "user" WHERE "email" = $1`, [email]);
    const rawUser = result.rows[0]; // { ... } || undefined

    if (! rawUser) { return null; }

    return new User(rawUser);
  }

  static async findAll() {
    const result = await db.query(`SELECT * FROM "user"`);
    const rawUsers = result.rows; // [{...}, {...}, {...}]
    
    //     []         []       {...}   =>     User{...}
    const users = rawUsers.map(rawUser => new User(rawUser));
    return users;
  }
}

module.exports = User;
