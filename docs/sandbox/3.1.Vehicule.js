class Vehicule {
  // Attributs
  nbOfWheels;
  enginePower;
  isStarted;

  // Constructeur
  constructor(nbOfWheels, enginePower) {
    // Valeurs d'initialisation
    this.nbOfWheels = nbOfWheels;
    this.enginePower = enginePower;
    this.isStarted = false;
  }

  // Méthode d'instance
  start() {
    this.isStarted = true;
  }

  stop() {
    this.isStarted = false;
  }

  makeNoise() {
    if (this.isStarted) {
      console.log(`Vrooooom !`);
    }
  }

  toString() {
    // if (this.isStarted) {
    //   return `Véhicule à ${this.nbOfWheels} roues, de puissance ${this.enginePower}, est démarré.`;
    // } else {
    //   return `Véhicule à ${this.nbOfWheels} roues, de puissance ${this.enginePower}, n'est pas démarré.`;
    // }

    return `
      Véhicule à ${this.nbOfWheels} roues, 
      de puissance ${this.enginePower}, 
      ${this.isStarted ? "est" : "n'est pas"} démarré.
    `;
  }

  boostEngine(power) {
    // Méthode 1 
    // this.enginePower = this.enginePower + power;
    // if (this.enginePower > 2000) {
    //   this.enginePower = 2000;
    // }

    // Méthode 2
    this.enginePower = Math.min(2000, this.enginePower + power);
  }
}

module.exports = Vehicule;

