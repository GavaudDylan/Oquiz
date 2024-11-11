const Vehicule = require("./3.1.Vehicule.js");

// INSTANCIATION
const ferrari = new Vehicule(4, 500); // { nbOfWheels: 4, enginePower: 500, isStarted: false }
console.log(ferrari.isStarted); // false
ferrari.makeNoise(); // N'affiche rien (car isStarted === false)
console.log(ferrari.toString());


// DEMARRAGE DE LA VOITURE
ferrari.start(); // this.isStarted = true <=====> ferrari.isStarted = true
console.log(ferrari.isStarted); // true
console.log(ferrari); // { nbOfWheels: 4, enginePower: 500, isStarted: true }
ferrari.makeNoise(); // Affiche "Vrooom !" (car isStarted === true)
console.log(ferrari.toString());


// Exercice du moteur


console.log(ferrari.enginePower); // 500

ferrari.boostEngine(200); 

console.log(ferrari.enginePower); // 700

ferrari.boostEngine(400);

console.log(ferrari.enginePower); // 1100

ferrari.boostEngine(8000); 

console.log(ferrari.enginePower); // 2000 (car on est capé !)



// ==== D'autres véhicules ====

const harley = new Vehicule(2, 300);
console.log(harley.toString());
harley.start();
harley.makeNoise();