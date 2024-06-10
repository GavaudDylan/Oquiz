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


quiz_and_theme_link (
id                     -- identifiant nombre généré aléatoirement
quiz_id                -- clé étrangère -> #quiz.id
theme_id               -- clé étrangère -> #theme.id
)


theme (
id                     -- identifiant nombre généré aléatoirement
name                   -- chaine de caractère
)


question (
id                     -- identifiant nombre généré aléatoirement
description            -- chaine de caractère
wiki                   -- chaine de caractère
anecdote               -- chaine de caractère
level_id               -- clé étrangère -> #level.id
quiz_id                -- clé étrangère -> #quiz.id
)


level (
id                     -- identifiant nombre généré aléatoirement
name                   -- chaine de caractère
)


proposal (
id                     -- identifiant nombre généré aléatoirement
description            -- chaine de caractère
question_id            -- clé étrangère -> #question.id
)
```
