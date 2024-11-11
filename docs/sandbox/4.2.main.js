const Vehicule = require("./4.1.Vehicule.js");

const ferrari = new Vehicule(4, 330);
console.log(ferrari);


// ferrari.isStarted = true; // Tentative de démarrage de la voiture
// console.log(ferrari);

// ferrari.start(); // Bonne méthode "officielle" pour démarrer la voiture
// console.log(ferrari);


// === PROBLEME 1 ====
// On aimerait que depuis l'extérieur de la classe, il soit IMPOSSIBLE de démarrer la voiture sans passer par la méthode "start()"
// On aimerait que depuis l'extérieur de classe, il soit IMPOSSIBLE de MODIFIER LA VALEUR d'UN certain attribut -> isStarted

// === SOLUTION 1 ====
// Solution --> Attribut privé

console.log(ferrari.toString()); // "n'est pas démarré"

ferrari.start(); // modification de l'attribut privé
// ferrari.#isStarted = true; // ERROR ! Interdit de modifier un attribut privé à l'extérieur de la classe
// ferrari.isStarted = true; // BUG ! Il ne se passe rien de spécial

console.log(ferrari.toString()); // "est démarré"


// === PROBLEME 2 === 
// Il est maintenant impossible pour moi de déterminer si le véhicule est started ou non !
// Je suis obligé de "tricher" en observant la méthode toString()
// Admettons qu'on souhaite : 
// - interdire l'écriture d'une nouvelle valeur
// - mais autoriser la lecture de la valeur courante

// === SOLUTION 2 ===
// On rajoute une méthode (qui elle est publique) pour lire la valeur
// cette méthode s'appelle un GETTER !
// Plusieurs syntaxe

// console.log(ferrari.#isStarted); // ❌ interdit 

console.log(ferrari.getIsStarted());  // true

ferrari.stop();

console.log(ferrari.getIsStarted()); // fakse



// Même chose pour la puissance du moteur

console.log(ferrari);

console.log(ferrari.getEnginePower()); // 330

ferrari.setEnginePower(900); 

console.log(ferrari.getEnginePower()); // 900

// MAIS OU DIABLE EST L'INTERET de rendre la propriété PRIVEE si finalement on autorise la LECTURE et l'ECRITURE depuis l'extérieur ? 
// ==> On peut ajouter des validations

ferrari.setEnginePower(-1000);

