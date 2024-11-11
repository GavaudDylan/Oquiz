const Level = require("./Level.js");


testLevels();



async function testLevels() {
  
  // === Creation d'un level en BDD ===
  const easyLevel = new Level({ name: "Moyen" });
  await easyLevel.insert(); // insérer dans la BDD
  console.log(easyLevel.id);


  // === Delete un level en BDD ===
  const hardLevel = new Level({ name: "Hard" });                 // { name: "Hard", id: undefined }
  await hardLevel.insert();                                      // { name: "Hard", id: 7 }          (id choisie par la BDD)
  await hardLevel.delete();

  // === Update d'un level ===
  const mediumLevel = new Level({ name: "Medium" });
  await mediumLevel.insert();

  mediumLevel.name = "Medium !!!";
  await mediumLevel.update(); // On persiste la modification en BDD

  // === Récupérer un level de la BDD ===

  // ❌ Syntaxe désagréable
  // const level = new Level(); // Pénible d'avoir à CREER un niveau avnt d'en récupérer un
  // const level3 = await level.findById(3); // Méthode d'instance

  // ✅ Syntaxe qui nous semble logique
  const level4 = await Level.findById(mediumLevel.id); // Méthode de CLASSE
  console.log(level4);
  await level4.delete();

  // === Récupérer tous les levels de la BDD ===
  const levels = await Level.findAll();
  
  await levels[4].delete();
}


