const { Router } = require("express");
const mainController = require("./controllers/mainController");
const levelController = require("./controllers/levelController.js");
const quizController = require("./controllers/quizController.js");
const tagController = require("./controllers/tagController.js");
const authController = require("./controllers/authController.js");

// Create router
const router = Router();

// Configure router
router.get("/", mainController.renderHomePage);

router.get("/quiz/:id", isLoggedIn, quizController.renderQuizPage);
router.get("/tags", tagController.renderTagsPage);

router.get("/levels", isAdmin, levelController.renderLevelsPage);
router.post("/levels", isAdmin, levelController.createLevel);

router.get("/register", authController.renderSignupPage);
router.post("/register", authController.registerUser);

router.get("/login", authController.renderSigninPage);
router.post("/login", authController.loginUser);
router.get("/logout", isLoggedIn, authController.logoutUser);

// Export router
module.exports = router;



// === ACL = Access Control List =====

// Note : si on veut ranger cette fonction dans notre fonction dans middlewares/ c'est tout à fait possible
function isLoggedIn(req, res, next) {
  // Si l'utilisateur n'est pas connecté
  if (! req.user) {
    // => on redirige vers la page de login
    return res.status(401).render("signin", { errorMessage: "Veuillez d'abord vous connecter." });
  }
  
  // Sinon, on passe directement au middleware suivant
  next();
}


function isAdmin(req, res, next) {
  // Vérifie si l'utilisateur n'est pas connecté 
  if (!req.user) {
    return res.status(401).render("signin", { errorMessage: "Veuillez d'abord vous connecter." });
  }
  
  // Vérifier qu'il est admin
  if (req.user.role !== "admin") {
    return res.status(403).render("404"); // On redirige vers la 404 comme ça ni vu ni connu, il aura l'impression que la page n'existe pas
  }

  // Sinon, il est bien connecté et admin
  next();
}
