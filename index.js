// Load environment variables
require("dotenv/config");

// Import des dépendances tierses
const express = require("express");

// Import des dépendances locales
const router = require("./app/router");
const middleware404 = require("./app/middlewares/middleware404");
const sessionMidleware = require("./app/middlewares/sessionMiddleware.js");
const loadLoggedUser = require("./app/middlewares/loadLoggedUser.js");

// Create Express app
const app = express();

// Configure static folder
app.use(express.static("./public"));

// Configure view engine
app.set("view engine", "ejs");
app.set("views", "./app/views");

// Configure body parsers
app.use(express.urlencoded({ extended: true }));

// Configure user session
app.use(sessionMidleware);

// Load user info from session and database
app.use(loadLoggedUser);

// Configure routes
app.use(router);

// Configure page 404
app.use(middleware404);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
