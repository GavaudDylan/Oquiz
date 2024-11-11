class Vehicule {
  nbOfWheels;
  #enginePower;
  #isStarted; // Attribut privé => impossible d'y accéder (en lecture ou écriture) depuis l'extérieur !

  constructor(nbOfWheels, enginePower) {
    this.nbOfWheels = nbOfWheels;
    this.#enginePower = enginePower;
    this.#isStarted = false;
  }

  start() {
    console.log("Vérification de la puissnce du moteur... OK !");
    console.log("Contrôle des bougies... OK !");
    console.log("Pression de l'huile... OK !"); // Imaginons du vrai code de vérification

    this.#isStarted = true;
  }

  stop() {
    this.#isStarted = false;
  }

  makeNoise() {
    if (this.#isStarted) {
      console.log(`Vrooooom !`);
    }
  }

  toString() {
    return `
      Véhicule à ${this.nbOfWheels} roues, 
      de puissance ${this.#enginePower}, 
      ${this.#isStarted ? "est" : "n'est pas"} démarré.
    `;
  }

  boostEngine(power) {
    this.#enginePower = Math.min(2000, this.#enginePower + power);
  }

  // GETTER (-> lire une valeur PRIVEE depuis l'extérieur)
  getIsStarted() {
    return this.#isStarted;
  }

  getEnginePower() {
    return this.#enginePower;
  }

  // SETTER (-> modifier une valeur PRIVEE depuis l'extérieur)
  setEnginePower(newEngineValue) {
    // Intérêt : on peut ajouter des vérification !!

    if (newEngineValue < 0) {
      throw new Error("Interdiction de mettre une puissance moteur inférieur à zero."); // stopper le programme en "levant une exception"
    }

    this.#enginePower = newEngineValue;
  }
}

module.exports = Vehicule;

