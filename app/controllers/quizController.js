const { Quiz } = require("../models/index.js");

const quizController = {
  async renderQuizPage(req, res) {
    try {

      // Récupérer l'ID du quiz demandé 
      const quizId = parseInt(req.params.id);
  
      // Récupérer le quiz en BDD, avec toutes ses infos ! 
      const quiz = await Quiz.findByPk(quizId, {
        // include: { all: true, nested: true } // Attention au poids de la réponse
  
        include: [
          "author",
          "tags",
          { association: "questions", include: ["level", "propositions"] }
        ]
  
      });
      /*
      On a besoin de quoi ? 
      - Quiz (title, description, date de création)
        - Auteur (firstname, lastname)
        - Tags (name)
        - Questions (description, anecdote)
           - Level (name)
           - Answer (description)
      */
  
      // Si le quiz est null (id n'existe pas)
      if (! quiz) { return res.status(404).render("404"); }
  
      // console.log(quiz.toJSON());
      res.render("quiz", { quiz });

    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  }
};

module.exports = quizController;
