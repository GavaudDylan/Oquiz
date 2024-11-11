# QCM 6

La commande pour intégrer du code d'une branche dans une autre branche en local est :
- `git checkout <nom_de_la_branche_a_merger_dans_la_branche_courante>`
- `git integrate <nom_de_la_branche_a_merger_dans_la_branche_courante>`
- `git merge <nom_de_la_branche_a_merger_dans_la_branche_courante>`
- on ne peut pas le faire en local, seulement via Github


Pourquoi faut-il hasher les mots de passe avant de les insérer en BDD
- Pour prévenir une catastrophe en cas d'éventuelle fuite de la BDD 
- Pour que les devs de l'équipe ne voit pas les mdps des utilisateurs en clair
- Les deux, mon capitaine !


En Sequelize, l'opération `include` permet : 
- de récupérer les données d'une `table B` jointe à partir d'une requête sur une `table A`.
- d'inclure tous les champs de la `table A` dans une requête sur la `table A`.
- de définir les associations existantes dans ma BDD.


`app.use(express.urlencoded())` permet de :
- envoyer des données dans le body d'un formulaire côté client
- parser les données du body d'une requête et les récupérer dans `req.body`
- chiffrer les mots de passe qui transitent dans l'URL
