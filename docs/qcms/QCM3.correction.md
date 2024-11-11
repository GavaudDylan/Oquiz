# QCM 3

`Active Record` est : 
- ❌ l'inverse du `dataMapper` ==> à la place du DataMapper
- ✅ un `design pattern` pour accéder à la BDD ==> façon d'accéder aux données
- ❌ une méthode d'instance ==> une méthode dans un objet
- ❌ "Tu connais pas Active Record ? C'est un groupe, ils étaient number one"


`MVC` veut dire : 
- ✅ Model View Controller ==> schéma d'architecture classique dans une app 
  - `model` : accès à la BDD
  - `view` : affichage client
  - `controller` : gérer les requêtes / réponses
- ❌ Major Version Control
- ❌ Merguezed Versionned Couscous


Une méthode de classe se définit avec le mot clé :
- ✅ `static`
- ❌ `class` ==> pour définir une classe
- ❌ `public` ==> dans d'autres langages
- ❌ aucun des trois

```js
class Hero {
  name;
  superpower;

  constructor(name, superpower) {
    this.name = name;
    this.superpower = superpower;
  }

  // Méthode d'instance
  fly() {
    console.log("Wooooosh !");
  }

  // Méthode de classe
  static getNbOfHerosPresentInTheWorld() {
    console.log(`Il y a actuellement X héros dans le monde`);
  }
}

const clark = new Hero("Clark Kent", "flight");
clark.fly(); // méthode d'instance

Hero.getNbOfHerosPresentInTheWorld(); // méthode de classe 
```


Pour appeler le contructeur de la classe parente depuis la classe enfant, on utilise le mot clé : 
- ❌ `constructor()`
- ✅ `super()`
- ❌ `parent()`
- ❌ `ohViensLaQuandJeTappelle()`

