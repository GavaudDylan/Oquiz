const { Router } = require("express");
const mainController = require("./controllers/mainController");

// Create router
const router = Router();

// Configure router
router.get("/", mainController.renderHomePage);

// Export router
module.exports = router;
