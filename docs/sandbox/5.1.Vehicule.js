class Vehicule {
  // Attributes
  nbOfWheels;
  enginePower;
  isStarted;

  // Constructeur
  constructor(nbOfWheels, enginePower) {
    this.nbOfWheels = nbOfWheels;
    this.enginePower = enginePower;
    this.isStarted = false;
  }

  // Méthodes d'instance
  start() {
    this.isStarted = true;
  }
  stop() {
    this.isStarted = false;
  }
  makeNoise() {
    if (this.isStarted) {
      console.log("Vroooom !!");
    }
  }
  toString() {
    const startedString = this.isStarted ? "est démarré" : "n'est pas démarré";
    return `Véhicule à ${this.nbOfWheels} roues, de puissance ${this.enginePower}, ${startedString}.`;
  }
}

//    CLASSE FILLE      CLASSE PARENTE 
class Moto extends Vehicule {
  // Attributs complémentaires
  hasKickStand;

  // Constructeur
  constructor(hasKickStand, enginePower) {
    super(2, enginePower); // Appel du constructeur de la classe que l'on étend (ici, la classe Véhicule)
    this.hasKickStand = hasKickStand;
  }

  // Méthode d'instance supplémentaire
  doAWheeling() {
    console.log("Vriiiiiiiii !");
  }

}


class Car extends Vehicule {
  nbOfDoors;
  bootCapacity;

  constructor(enginePower, nbOfDoors, bootCapacity) {
    super(4, enginePower);
    this.nbOfDoors = nbOfDoors;
    this.bootCapacity = bootCapacity;
  }
};

class ElectricCar extends Car {
  batteryCapacity;

  constructor(enginePower, nbOfDoors, bootCapacity, batteryCapacity) {
    super(enginePower, nbOfDoors, bootCapacity);
    this.batteryCapacity = batteryCapacity;
  }

  reload() {
    console.log("Ziiiiippp !");
  }
}

module.exports = { Vehicule, Moto, Car, ElectricCar };