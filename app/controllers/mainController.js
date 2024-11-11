const { Quiz } = require("../models");

const mainController = {
  async renderHomePage(req, res) {
    try {

      // Récupérer les quizzes de la BDD en nous servant du modèle Quiz
      const quizzes = await Quiz.findAll({  // [{}, {}, {}]
        // include: ["tags", "author"], // ==> Version raccourcie !
        
        include: [
          { association: "author", attributes: ["firstname", "lastname"] },
          { association: "tags", attributes: ["name"] /* , through: { attributes: [] } */ },
        ]
   
      });
      // console.log(JSON.stringify(quizzes, null, 2));
  
      // Les fournir à la vue lors du res.render
      res.render("home", { quizzes });

    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }

    // Try/catch
  }
};

module.exports = mainController;
