const { Model, DataTypes } = require("sequelize");
const sequelize = require("./dbClientSequelize.js");

class Quiz extends Model {

  get localeCreationDate() {
    const date = new Date(this.created_at);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    
    // return new Intl.DateTimeFormat("fr-FR", options).format(date);
    return date.toLocaleString("fr-FR", options);
  }
}

Quiz.init({
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  tableName: "quiz"
});


// On test si la requête semble passée : on check le log "Executing" de Sequelize
// Quiz.findAll();

module.exports = Quiz;