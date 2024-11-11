const { Answer, User, Quiz, Level, Question, Tag } = require("./V4/associations.js");

module.exports = { Answer, User, Quiz, Level, Question, Tag };

// L'index est un fichier "passe plat" pour faciliter nos imports (et seulement pour ça)

// require("../models/index.js") ;
// peut s'abréger :
// require("../models");

// Un peu comme une "table des matières du dossier". 
// Pour préciser au "reste du monde" (les autres dossiers du projet) ce dont ils auront potentiellement besoin