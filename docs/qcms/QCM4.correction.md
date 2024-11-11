# QCM 4

`sequelize` est : 
- ❌ un SGBD ==> Système de gestion de Base de Données (ex : Postgres, MySQl, SQlite, Oracle DB, ...)
- ✅ un ORM ==> Object Relational Mapping
- ❌ un CLI ==> Command Line Interface (ie, un soft dans le terminal) ≠  `GUI` = Graphical User Interface 
- ❌ un AR (Active Record) ==> à noter, sequelize utilise le Design Pattern AN sous le capôt


Laquelle de ces méthodes de classe n'existe pas dans `sequelize`
- ❌ `Model.findAll()`
- ❌ `Model.create()`
- ❌ `Model.findOne()`
- ✅ `Model.findById()` ==> `Model.findByPk()`


Laquelle de ces méthodes d'instance n'existe pas dans `sequelize`
- ❌ `model.save()`
- ✅ `model.insert()` ==> on utilise `save()` directement. En sequelize, le `insert()` et le `update()` qu'on avait codé sont la même méthode `save()`
- ❌ `model.set()` 
- ❌ `model.destroy()`



Dans l'assignation : `const sequelize = new Sequelize(process.env.PG_URL);`, la variable `sequelize` designe :
- le module sequelize
- l'instance de connexion à la BDD 
- l'adresse de la BDD Postgresql
- le constructeur de la classe Sequelize
