const CoreModel = require("./CoreModel.js");

class Quiz extends CoreModel {
  title;
  description;
  author_id;

  constructor(obj) {
    super(obj);

    this.title = obj.title;
    this.description = obj.description;
    this.author_id = obj.author_id;
  }
}

module.exports = Quiz;
