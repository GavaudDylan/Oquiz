// En POO : 
// - les factory sont des CLASSES (fabrique à objet)
// - un objet issue de la classe s'appelle un INSTANCE (de classe)

class Wizard { // Notre factory, usine à fabriquer des "wizards" // Noter la majuscule pour les noms de classe

  // 1. Attributs/propriété de la classe // On liste généralement les attributs de la classe en haut de celle-ci.
  firstname;
  lastname;
  age;

  // 2. Une classe a "TOUJOURS" un constructeur
  constructor(firstname, lastname, age) { // Le constructor est la fonction que l'on lance pour réellement fabriquer l'objet // bouton pour démarrer l'usine
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;

    // this = le mot clé pour accéder à l'instance courante depuis l'INTERIEUR de la classe
    // Ici, dans le constructeur, on initialise les valeurs des propriétés de l'object courant

    // généralement, le constructeur est constitué de simples "passe plat"
  }

  // 3. Méthodes
  sayHi() {
    console.log(`Salut je m'appelle ${this.firstname} ${this.lastname} et j'ai ${this.age} ans.`);
    // Le this change selon l'objet sur lequel on appelle la méthode !
  }

  castSpell() {
    console.log("Expeliarmus");
  }
}

// Pour appeler le constructor, on utilise le mot clé `new NOM_DE_LA_CLASSE(...)`
// ❌ Wizard.constructor("Ron", "Weasley", 10);
const ron = new Wizard("Ron", "Weasley", 10); // ron est une "instance" de la "classe" Wizard
console.log(ron);


const voldy = new Wizard("Tom", "Jedusor", 99); // voldy est une "instance de la "classe" Wizard
console.log(voldy);


ron.sayHi();
ron.castSpell();


voldy.sayHi();
voldy.castSpell();