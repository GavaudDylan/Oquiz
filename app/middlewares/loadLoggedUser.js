const { User } = require("../models/index.js");

const loadLoggedUser = async (req, res, next) => {
  const userId = req.session && req.session.userId; // number || undefined
  if (userId) { // Si l'utilisateur est effectivement connecté, on le charge depuis la BDD
    const user = await User.findByPk(userId);
    res.locals.user = user; // On le met dans les locals afin de s'en servir dans n'importe quelle vue EJS
    req.user = user; // On accroche à req (qui se balade de middleware en middleware) le user loggé
  }

  next();
};

module.exports = loadLoggedUser;
