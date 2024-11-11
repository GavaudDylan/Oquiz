const Level = require("./Level.js");
const Quiz = require("./Quiz.js");
const Tag = require("./Tag.js");
const User = require("./User.js");


// ==== Tag ====

const cookingTag = new Tag({ id: 1, name: "Cuisine" });
console.log(cookingTag);

const sportTag = new Tag({ id: 2, name: "Sport" });
console.log(sportTag);


// ==== Level ====

const easyLevel = new Level({ id: 1, name: "Facile" });
console.log(easyLevel);

const hardLevel = new Level({ id: 2, name: "Difficile" });
console.log(hardLevel);

// ==== User ====

const arya = new User({
  id: 1,
  firstname: "Arya",
  lastname: "Stark",
  email: "arya@stark.io",
  password: "S4nS-ViS4age!"
});
console.log(arya);

const john = new User({
  id: 2,
  firstname: "John",
  lastname: "Snow",
  email: "john@snow.io",
  password: "Youknownoth1ng..."
});
console.log(john);

// ==== Quiz ====

const quiz1 = new Quiz({
  id: 1,
  title: "Le grand quiz de la tartiflette",
  description: "Vous êtes incollable sur la cuisine savoyarde ? Voyons voir cela !",
  author_id: john.getId()
});

console.log(quiz1);


// ==== Privée / public ====

console.log(john.getId()); // 2
console.log(john.getFirstname()); // John
// john.setFirstname("jo"); // ❌ Erreur à la mairie
john.setFirstname("Jon"); // ✅ OK
console.log(john.getFirstname()); // Jon


// ==== Getters / setters nouvelle génération ===

// Utilisation du GETTER (comme si c'était un attribut)
console.log(arya.lastname); // Appel la fonction getter (ça se voit pas) // SUCRE SYNTAXIQUE où on utilise la fonction get comme si c'était une propriété !

// Utilisation du SETTER (comme si c'était un attribut)
arya.lastname = "Hidden"; // Appel de fonction sous le capot (===> arya.setters["lastname"]("Hidden"))
console.log(arya.lastname); // Hidden


console.log(arya.email);
console.log(arya.password);

// arya.password = "123"; // ❌
arya.password = "SansVisage-Stark";
console.log(arya.password);

// Setter bonus !
console.log(arya.fullname);
console.log(john.fullname);


// Validatin email 
arya.email = "arya@oclock.io";
console.log(arya.email);
