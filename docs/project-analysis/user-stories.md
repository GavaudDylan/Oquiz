# User stories

## Kesako ?

- Préciser certaines fonctionnalités sous forme d'un parcours utilisateur, toujours dans l'optique de **clarifier le besoin**.

- Formaliste associé aux user stories

- Les user stories font de parfait **scénari de test** : 
  - une fois que l'application est codé, on va vérifier que le fonctionnement de celle-ci est confirme aux user stories proposées initialement

## Conseil (les conseils de tonton Zozo)

- Prennez le temps d'y reflechir ! Même si ça parait simple, réfléchir au maximum aux différents cas d'utilisateurs pour éviter les embuches !
- Avant de coder quoi que ce soit ! A confronter au client et/ou aux membres de l'équipe !
- N'hésitez pas à revenir dessus au fur et à mesure du projet.
- Les plus atomiques (unitaires) possibles : n'hésitez pas à les couper en deux : si possible, une action = une fonctionnalité

## Formalisme

- 🇫🇷 `En tant que [role], je veux pouvoir [action], (( afin de [but] ))`
- 🇬🇧 `As a [role], I want to [action], (( in order to [goal] ))`

## Etape 1 - définir les rôles de l'application

Nos utilisateurs : 
- `visiteur` (utilisateur non loggé)
- `membre` (utilisateur loggé)
- `admin` (utilisateur loggé avec des droits d'administration)


## Exemples 

| En tant que...| je veux pouvoir... | afin de... | commentaire | # sprint |
|---|---|---|---|---|
visiteur | une page d'accueil | prévisualiser le contenu du site | - | 1 |
visiteur | visualiser les titres de quiz sur la page d’accueil | choisir le quiz que je souhaite effectuer et y accéder | - | 1 |
visiteur | visualiser les description et les auteurs des quiz sur la page d’accueil |  | - | 1 |
visiteur | pouvoir accéder aux questions d’un quiz | | Attention, dans un second temps cette fonctionnalité sera réservé aux membres connecté | 1 |
visiteur | pouvoir visualiser la difficulté de chaque question |  | - | 1 |
visiteur | visualiser les sujets de chaque quiz sur la page du quiz |  | - | 1 |
visiteur | pouvoir visualiser tous les sujets | pouvoir accéder aux quiz d’un sujet | - | 1 |
visiteur | pouvoir visualiser tous les quiz pour un sujet donné |  | - | 1 |
visiteur | accéder à un formulaire d’inscription | pouvoir m’inscrire | - | 2 |
visiteur | accéder à un formulaire de connexion | pouvoir me connecter | - | 2 |
visiteur | pouvoir m’inscrire | devenir membre | - | 2 |
visiteur | pouvoir me connecter à mon compte | pouvoir répondre à un quiz | - | 2 |
membre | pouvoir me déconnecter |  | - | 2 |
membre | pouvoir répondre aux questions d’un quiz | vérifier mes connaissances | - | 3 |
membre | pouvoir visualiser mon score |  | - | 3 |
membre | pouvoir visualiser les bonnes et mauvaises réponses que j’ai donné | savoir quelles erreurs j’ai effectuées | - | 3 |

## Brouillon

Exemples données sur Slippers :
- En tant qu'utilisateur je veux selectionner une thematique afin de repondre à un quiz
  - ✅ En tant que VISITEUR, je veux pouvoir selectionner une thématique afin d'accéder à la liste des quizzes de cette thématique

- En tant qu'utilisateur connecté, je veux pouvoir trier les quizz par thème pour pouvoir ensuite les jouer
  - ✅ En tant que MEMBRE, je veux pouvoir accéder à une page de thématique, afin de consulté la liste des quizzes triés par théme

- En tant qu'user je veux pouvoir me connecter/m'inscrire afin de faire des quizz
  - ✅ EN tant que VISITEUR, je veux pouvoir m'inscrire afin de devenir membre et pouvoir jouer des quizzes
  - 
- En tant que user je veux me connecter pour répondre aux quizz
  - ✅ En tant que VISITEUR, je veux pouvoir me connecter afin de répondre à un quiz

- en tant qu'user je veux pouvoir me déconnecter quand j'ai finis de jouer 
  - ✅ En tant que MEMBRE, je veux pouvoir me déconnecter 

- 🚧 En tant que visiteur, je veux pouvoir être redirigé vers la page de connexion lorsque je tente de jouer un quiz alors que je ne suis pas connecté

- ✅ En tant que admin, je veux pouvoir ajouter un quizz, afin de pouvoir rendre disponible un nouveau quizz 

- ✅ En tant membre, je veux pouvoir changer de mot de passe


- ✅ En tant que membre, je veux pouvoir valider mes réponses à un quiz afin de connaitre les bonnes réponses.

- En tant qu'utilisateur je veux pouvoir changer de niveau afin de jouer
  - ✅ En tant que membre, je veux pouvoir connaitre le niveau de difficulté des QUESTIONS lors je joue un quiz.


- En tant qu'admin, je veux pouvoir ajouter/supprimer un quiz, afin d'avoir une gestion des quiz et pouvoir rendre disponible ou non certains quiz
  - En tant qu'admin, je veux pouvoir ajouter un quiz
  - En tant qu'admin, je veux pouvoir supprimer un quiz
