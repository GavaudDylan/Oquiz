const validator = require("email-validator");

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

  // === (GETTERS) ===
  getId() { // la méthode est publique (on peut y accéder de l'extérieur)
    return this.#id;
  }

  getFirstname() {
    return this.#firstname;
  }

  // === (SETTERS) ===
  
  // Pour l'ID, on ne MET PAS de setter => comme ça, impossible de modifier l'ID d'une instance une fois que celle-ci est créée
  
  setFirstname(newFirstname) {
    if (newFirstname.length < 3) { // VALIDATION DE DONNEES
      throw new Error("Erreur à la mairie : impossible de choisir un prénom de moins de 3 caractères");
    }

    this.#firstname = newFirstname;
  }

  // === GETTERS (V2) ===
  get lastname() {
    return this.#lastname;
  }

  get email() {
    return this.#email;
  }

  get password() {
    return this.#password;
  }

  get fullname() {
    return `${this.#firstname} ${this.#lastname}`;
  }

  // === SETTERS (V2) ===
  set lastname(newLastname) {
    if (newLastname.length < 3) { throw new Error("lastname length should be above 2 characters"); }
    this.#lastname = newLastname;
  }

  set email(newEmail) {
    // Validation pour l'email 
    
    // Option 1 - tout à la main
    // if (!newEmail.includes("@")) { throw new Error("Email invalide"); }

    // Option 2 - utiliser les Regex
    // const emailRegex = /^\w+@\w+\.[a-z]{2,3}$/;
    // if (! emailRegex.test(newEmail)) {
    //   throw new Error("Email invalide");
    // }

    // Option 3 - on utilise une librairie (ie, un module NPM)
    if (validator.validate(newEmail) === false) {
      throw new Error("Email invalide");
    }

    this.#email = newEmail; // Sinon, on set l'email
  }

  set password(value) {
    if (value.length < 12) {
      throw new Error("Password length should be above 12 characters");
    }
    this.#password = value;
  }
}

module.exports = User;
