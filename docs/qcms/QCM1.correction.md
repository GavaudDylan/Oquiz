# QCM 1

Un `wireframe` est : 
- ❌ un board de gestion de projet ==> kanban
- ✅ une maquette fonctionnelle d'une page ==> croquis pour mettre de comprendre le fonctionnement d'une page
- ❌ la description complète d'une fonctionnalité ==> **use case / spécification** (spécifié directement sur Github)
- ❌ un scenario de test ==> user stories


`dotenv` permet de :
- ✅ charger les variables d'environnement
- ❌ définir les variables d'environnement ==> `.env`
- ❌ empêcher de versionner les variables d'environnement ==> `.gitignore`


Devant mon `MCD` :
- ❌ je précise les relations entre mes tables et leurs différents champs ==> au niveau du MLD
- ✅ je précise les **associations** entre mes **entités** et leurs différents **attributs**
- ❌ je pars en courant


"Dans ma `TodoApp3000`, une LISTE peut avoir plusieurs CARTES mais une CARTE ne peut appartenir qu'à une et une LISTE". Je le modélise comment : 
- ✅ `LISTE --0:N-- APPARTIENT --1:1-- CARTE`
- ❌ `LISTE --1:1-- APPARTIENT --0:N-- CARTE` ==> une liste à 1 et 1 seule carte ==> pas ce qu'on veut
- ❌ `LISTE --1:N-- APPARTIENT --1:N-- CARTE` ==> une carte appartient à 1 à N liste ==> pas ce qu'on veut

