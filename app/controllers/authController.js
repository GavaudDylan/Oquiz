const emailValidator = require("email-validator");
const passwordValidator = require("password-validator");
const bcrypt = require("bcrypt");

const { User } = require("../models/index.js");

const authController = {
  async renderSignupPage(req, res) {
    res.render("signup");
  },

  async renderSigninPage(req, res) {
    res.render("signin");
  },

  async registerUser(req, res) {
    try {

      // Récupérer le body : firstname, lastname, email, password, confirm
      const { firstname, lastname, email, password, confirmation } = req.body;

      // Valider que tous les champs sont présents ==> Sinon : renvoyer sur la même page mais avec un message d'erreur
      if (!firstname || !lastname || !email || !password || !confirmation) {
        res.status(400).render("signup", { errorMessage: "Tous les champs sont obligatoires." });
        return;
      }

      // Vérifier le format de l'email (email-validator) ==> Sinon : renvoyer sur la même page mais avec un message d'erreur
      if (! emailValidator.validate(email)) {
        return res.status(400).render("signup", { errorMessage: "Le format de l'email fourni n'est pas valide." });
      }

      // Vérifier que le MDP + sa confirmation match  ==> Sinon : renvoyer sur la même page mais avec un message d'erreur
      if (password !== confirmation) {
        return res.status(400).render("signup", { errorMessage: "Le mot de passe et sa validation ne correspondent pas." });
      }

      // Vérifier la complexité du mot de passe ==> Sinon : renvoyer sur la même page mais avec un message d'erreur
      const passwordSchema = new passwordValidator()
        .is().min(12)
        .has().uppercase()
        .has().lowercase()
        .has().digits(1)
      ;
      if (! passwordSchema.validate(password)) {
        return res.status(400).render("signup", { errorMessage: "Le mot de passe doit contenir plus de 12 caractères, dont un chiffre, une majuscule et une minuscule." });
      }

      // Vérifier que l'email n'est pas déjà pris ! ==> Sinon : renvoyer sur la même page mais avec un message d'erreur
      // On cherche dans la BDD UN (findOne) utilisateur DONT (where) le email vaut ....
      const alreadyExistingUser = await User.findOne({ where: { email: email }}); // { ... } || null
      if (alreadyExistingUser) { // si truthy (object valide), ça veut dire que l'utilisateur existe déjà
        return res.status(409).render("signup", { errorMessage: "L'email fourni est déjà utilisé." });
      }

      // Hasher le mot de passe avant de l'enregistrer en base de données (modules tiers : bcrypt ou  argon2i / module node : scrypt)
      const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Créer l'utilisateur en BDD en utilisant Sequelize (donc protège des injections SQL)
      await User.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashedPassword
      });

      // Rediriger vers la page de login pour permettre à l'utilisateur de se connecter ===> Pourquoi pas avec un mot de passe de succès !
      res.render("signin", { successMessage: "Compte utilisateur créé avec succès. Veuillez à présent vous authentifier." });

    } catch (error) {
      console.log(error);
      res.status(500).render("500");
    }
  },

  async loginUser(req, res) {
    try {

      // Récupérer l'email et le password depuis le body
      const { email, password } = req.body;

      // Récupérer l'utilisateur dans la BDD correspondant à l'email donné
      const user = await User.findOne({ where: { email }}); // null || { ... }

      // S'il n'existe pas ==> Erreur : mauvais email
      if (!user) {
        res.status(400).render("signin", { errorMessage: "Mauvais couple email/mot de passe." });
        return;
      }

      // Comparer à l'aide de bcrypt le mot de passe fourni avec le mot de passe hashé enregistré
      const isMatching = await bcrypt.compare(password, user.password);
      if (!isMatching) { // Si ca match pas => Erreur : mauvais mdp
        return res.status(400).render("signin", { errorMessage: "Mauvais couple email/mot de passe." });
      }

      // Si ca match ! ==> SESSION : ajouter dans la session utilisateur l'ID de l'utilisateur qui vien de se logger
      req.session.userId = user.id;

      // Rediriger vers la home page
      res.redirect("/");

    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },

  logoutUser(req, res) {
    // Pour déconnecter l'utilisateur, il suffit de retirer le userId de la session de l'utilisateur ! 
    
    // Retirer le fait que l'utilisateur soit connecté (mais conservé le reste des infos de la session)
    // req.session.userId = null; // Alternativement : delete req.session.userId;

    // Supprimer la session (ex: si l'utilisateur avait un panier, quand il se deconnecte, ça supprime également son panier ✅)
    req.session.destroy();

    // On redirige vers la home page
    res.redirect("/");
  }
};

module.exports = authController;
