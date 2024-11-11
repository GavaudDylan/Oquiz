# QCM 2

Le MCD indique `VOITURE <-- 1,1 --> Possède <-- 0,N --> GARAGE`. C'est une association de quel type ?
- ❌ One-to-One
- ✅ One-to-Many
- ❌ Many-to-Many
- ❌ Voiture-to-Garage

---

Le mot clé `extends` permet : 
- ❌ d'instancier un élément d'une classe ===> `new`
- ✅ d'hériter d'une classe 
- ❌ de définir les attributs d'une classe ===> simplement on les listes en début de classe et le constructeur les INITIALISE

```js
class Fille extends Mere {
	constructor(...) {
		super(...);
	}
}

class Humain {
	eyeColor;
	height;

	constructor(eyeColor, height) {
		this.eyeColor = eyeColor;
		this.height = height;
	}
}

class SuperHero extends Humain {
	superPowers;

	constructor(eyeColor, height, superPowers) {
		super(eyeColor, height);
		this.superPowers;
	}

	canFly() {
		// retourne true si l'un des superPowers de l'instance est "flight" // retourne false sinon
		if (this.superPowers.includes("flight")) {
			return true;
		} else {
			return false;
		}
	}
}


const john = new Humain("blue", 175);
const clark = new SuperHero("blue", 190, ["flight", "laser eyes", "super strength"]); // 1 instance
const peter = new SuperHero("brown", 185, ["spider web", "walk on walls"]); // 1 instance

console.log(clark.canFly()); // true
console.log(peter.canFly()); // false

console.log(john instanceof Humain); // true
console.log(clark instanceof SuperHero); // true

console.log(john instanceof SuperHero); // false
console.log(clark instanceof Humain); // true

```

---


La méthode `constructor` d'une classe `C` permet d'appeler :
- ✅ `new C();`
- ❌ `new C;` ===> Le constructeur est une fonction, on n'oublie pas de l'appeler (avec des parenthèses)
- ❌ `C.constructor()` ===> cette syntaxe n'existe pas


**Composition over inheritance** : la POO est parfois considéré comme un anti-pattern (un mauvais design pattern) => tout dépend du projet. 

---

`this` permet : 
- ❌ d'accéder à la classe depuis l'extérieur  ==> `Class`
- ❌ d'accéder à une instance de classe de puis l'extérieur de la classe 
- ✅ d'accéder à une instance de classe depuis l'intérieur de la classe

---

[Lire le code founi après la question.] Laquelle de ces instructions déclenche une erreur ?
- ❌ `hachiko.drink();` ==> OK, car hachiko est un Dog donc un Animal et les instances de la classe "Animal" ont la méthode drink()
- ❌ `hachiko.color = "grey";` ==> hachiko est un Dog donc un Animal. Un animal a une propriété "color" PUBLIQUE donc elle peut être modifiée depuis l'extérieur de la classe
- ❌ `garfield.eat();` ==> garfield est un Cat donc un Animal. Animal a un méthode eat() donc ok !
- ✅ `garfield.bark();` ==> garfield est un Cat (mew()) donc un Animal (drink() + eat()). Mais il n'a pas la méthode bark();


```js
class Animal {
	color;

	constructor(obj) {
		this.color = obj.color;
	}
	drink() {
		console.log("slurp slurp");
	}
	eat() {
		console.log("nom nom nom");
	}
}

class Dog extends Animal {
	constructor(obj) {
		super(obj);
	}
	bark() {
		console.log("waf waf");
	}
}

class Cat extends Animal {
	constructor(obj) {
		super(obj);
	}
	mew() {
		console.log("mew mew");
	}
}

const hachiko = new Dog({ color: "white" });
const garfield = new Cat({ color: "orange" });
```