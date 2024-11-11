# QCM 5

Quelle est la commande `git` pour changer de branche ? 
- `git checkout -b ma_branche`
- `git checkout ma_branche`
- `git pull ma_branche`
- `git change ma_branche`


Qu'est-ce qu'une `Pull Request` ?
- une demande de suppression de code d'une branche
- une demande d'intégration de code d'une branche dans une autre
- le fait de merger le code en local
- le fait de commit sur une branche particulière


Pour lier deux modèles `Sequelize`, j'utilise :
- `belongingTo`
- `hasManyOf`
- `hasOneOf`
- j'en sais rien, je regarde la doc, j'apprends pas ça par coeur ! 


"Un PROF enseigne a une PROMO qui possède plusieurs ELEVES". Je veux récupérer toutes les promos avec les élèves qui les composent : 
- `Promo.findAll({ include: "students" })`
- `Student.findAll({ include: "promo" })`
- `Prof.findAll({ include: "students" })`


Dans une requête Sequelize, quelle est l'option utilisée pour spécifier les propriétés de l'entité que l'on souhaite récupérer ?
- `project`
- `order`
- `attributes`
- `fields`
- `where`
