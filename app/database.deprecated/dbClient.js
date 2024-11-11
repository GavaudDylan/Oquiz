const { Client } = require("pg");

// Créer un client de connexion (un tunnel vers notre BDD Postgres)
const client = new Client(process.env.PG_URL);

// On le connecte
client.connect();

// On l'exporte pour s'en servir depuis d'autres fichiers
module.exports = client;
