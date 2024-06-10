# Modèle logique de données

C'est une étape de **traduction** qui intervient après la création du MCD.

On prépare la mise en place dans la BDD (dans la BDD, on code en anglais).

Idée est de traduire :
- le français vers l'**anglais**
- les noms d'entité en nom de **table**
- les noms d'attributs en nom de **colonnes**
- les associations : 
  - **clés primaires** / **clés étrangères**
  - tables de liaisons


- Formalisme moins rigoureux : format textuel ou format graphique acceptés
- Deux écoles (mettre ou ne pas mettre les types) :
  - conseil : on ne MET PAS les types (raison : on a pas encore fixé le SGBD)
  - mais on triche un peu en les notant en français


## Schéma textuel 

```

user (
  id                   -- identifiant nombre généré aléatoirement
  firstname            -- chaine de caractère
  lastname             -- chaine de caractère
  email                -- chaine de caractère de 255 caractères max
  password             -- chaine de caractère
)


quiz (
  id                   -- identifiant nombre généré aléatoirement
  title                -- chaine de caractère
  description          -- chaine de caractère
  author_id            -- clé étrangère -> #user.id    
)
```


