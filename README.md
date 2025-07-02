# Formation React 2025

## Exercice 9 - react-query : Formulaire de création d'un utilisateur
- Créer un composant `CreateUser.jsx`
- Le composant affiche un formulaire permettant de créer un nouvel utilisateur selon les règles précisées par l'[API](https://github.com/Formation-React-2025/api_backend)
- À la soumission du formulaire, contrôler la validité des champs
- Si tous les champs sont OK envoyer la requête de création `POST http://localhost:8080/users`, sinon mettre les champs en erreur en rouge
- En cas d'erreur lors de l'envoi de la requête (`response.status !== 201`, afficher le message d'erreur sous le formulaire
