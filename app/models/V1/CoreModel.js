class CoreModel {
  id;
  created_at;
  updated_at;

  constructor(obj) { // obj = { id, created_at, updated_at }
    this.id = obj.id;
    this.created_at = obj.created_at || new Date();
    this.updated_at = obj.updated_at || new Date();
  }
}

module.exports = CoreModel;
