// En JS sait faire des objets

const harry = {
  firstname: "Harry",
  lastname: "Potter",
  age: 10,
  sayHi() {
    const message = `Je m'appelle ${harry.firstname} ${harry.lastname} et j'ai ${harry.age} ans.`;
    console.log(message);
  }
};

harry.sayHi();

// Un deuxième objet

const hermione = {
  firstname: "Hermione",
  lastname: "Granger",
  age: 11,
  sayHi() {
    const message = `Je m'appelle ${hermione.firstname} ${hermione.lastname} et j'ai ${hermione.age} ans.`;
    console.log(message);
  }
};

hermione.sayHi();

// Problématique => on se repète, on ne respect pas le principe du DRY (don't repeat yourself)


// === Solution 1 (sans factory) : rajouter une fonction === 

function sayHello(person) {
  const message = `Bonjour, je m'appelle ${person.firstname} ${person.lastname} et j'ai ${person.age} ans.`;
  console.log(message);
}

sayHello(harry);
sayHello(hermione);

// => Problématique 
// Ici on utilise `sayHello(harry)` (fonction) alors que ce qui m'interesse `harry.sayHello()` (méthode d'un objet)



// === Solution 2 : la factory ====

// Idée : écrire une fonction qui génère un objet avec les propriétés fournies et les méthodes fournies

function makePerson(firstname, lastname, age) {
  return {
    firstname: firstname,
    lastname: lastname,
    age: age,
    sayHi() { console.log(`Je m'appelle ${firstname} ${lastname} et j'ai ${age} ans.`); },
    castSpell() { console.log(`Expeliarmus !`); },
    computeBirthyear() { return 1997 - age; }
  };
}

// Une factory est une FONCTION qui fabrique des objets.
// C'est une sorte de MOULE à objets ; qui auront tous les mêmes propriétés et les mêmes méthodes (mais potentiellement des VALEURS différentes)

// L'intérêt de cette factory : c'est qu'on écrit les méthodes des objets 1 seule fois 

const ron = makePerson("Ron", "Weasley", 10);
ron.sayHi();
ron.castSpell();
console.log(ron);
console.log(ron.computeBirthyear());


const voldy = makePerson("Tom", "Jedusor", 99);
voldy.castSpell();
console.log(voldy);
console.log(voldy.computeBirthyear());

