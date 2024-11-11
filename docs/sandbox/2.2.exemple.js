// ==== CLASSE ====

class Wizard {
  // Attributs
  firstname;
  lastname;
  age;

  // Constructeur
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  // Méthoeds
  castSpell() {
    console.log("Expeliarmus !");
  }

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}

// ==== INSTANCES ====

// Première instance
const harry = new Wizard("Harry", "Potter", 10);
harry.castSpell();
console.log(harry.getFullName());
console.log(harry.age);


// Deuxième instance
const hermione = new Wizard("Hermione", "Granger", 11);
hermione.castSpell();
console.log(hermione.getFullName());
console.log(hermione.age);

