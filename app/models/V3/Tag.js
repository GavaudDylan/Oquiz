const CoreModel = require("./CoreModel.js");

class Tag extends CoreModel {
  name;

  constructor(obj) {
    super(obj);
    this.name = obj.name;
  }

  static tableName = "tag";
}

module.exports = Tag;

