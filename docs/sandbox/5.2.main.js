const { Moto, Car, ElectricCar } = require("./5.1.Vehicule.js");

const harley = new Moto(true, 250);
console.log(harley); // { nbOfWheels, enginePower, isStarted, hasKickStand }

harley.start();
harley.doAWheeling();
harley.makeNoise();


// ===== Voiture

const clio = new Car(100, 2, 300);
console.log(clio);


const rangeRover = new Car(300, 4, 600);
console.log(rangeRover);

// ===== Voiture electrique

const tesla = new ElectricCar(250, 2, 500, 3000);
console.log(tesla);


// Amélioration en terme de lisibilité
// new ElectricCar({
//   enginePower: 250,
//   nbOfDoors: 2,
//   bootCapacity: 500,
//   batteryCapacity: 3000
// });

