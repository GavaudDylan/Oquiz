const { Tag } = require("../models");

const tagController = {
  async renderTagsPage(req, res) {
    try {

      // Récupérer tous les tags + les quizzes associés
      const tags = await Tag.findAll({ include: "quizzes" });
    
      // Les fournir à la view
      res.render("tags", { tags });

    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  }

};

module.exports = tagController;

