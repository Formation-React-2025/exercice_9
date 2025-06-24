# Formation React 2025

## Exercice 1

### Initialisation d'un nouveau projet React
- Lancer la commande ```npx create-react-app exercice_1```
- Dans le dossier ```exercice_1``` lancer les commande ```npm install``` (ou ```npm i```) puis ```npm start```

### Création d'un premier composant React
- Dans le package ```./src/components/exercice-1```. créer le composant ```Exercice1``` dont le comportement est le suivant :
  - Le composant affiche un header avec le titre « Exercice 1 »
  -	Le composant affiche en contenu « Hello world ! »
  -	Le composant affiche un footer avec la date et l’heure

- Dans le fichier ```./src/App.js``` supprimer le code retourné et appeler le composant.


Note : on pourra utiliser la fonction javascript ```toLocalDateString``` de ```Date``` pour afficher la date et l’heure au format voulu (voir [Date.prototype.toLocaleString()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)).

<u>Exemple :</u>
```
new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
})
```

## Exercice 2

### Initialisation du projet
Plusieurs possibilités :
- Initialiser le projet via la commande ```npx create-react-app```
- Continuer sur le même projet
- Télécharger le projet initialisé depuis le GitHub [Formation React 2025](https://github.com/orgs/Formation-React-2025/repositories) :
  - ```git clone https://github.com/Formation-React-2025/exercice_2.git```

### Création d'un composant avec des props
- Lancer la commande ```npm install prop-types@15.8.1```.
 
- Dans le package ```./src/components/exercice-2```, créer le composant ```Exercice2``` dont le comportement est le même que le composant ```Exercice1``` aux différences suivantes :
  -	Le titre du header est maintenant reçu en props
  -	Le contenu correspond à la props ```children```
 
- Dans le fichier ```./src/App.jsx```, appeler le composant.

<u>Note :</u> par la suite, nous pourrons duppliquer ce composant dans ```./src/components/layout/exercice-layout/ExerciceLayout``` afin de le réutiliser.

## Exercice 3

### Initialisation du projet
Plusieurs possibilités :
- Initialiser le projet via la commande ```npx create-react-app```
- Continuer sur le même projet
- Télécharger le projet initialisé depuis le GitHub [Formation React 2025](https://github.com/orgs/Formation-React-2025/repositories) :
  - ```git clone https://github.com/Formation-React-2025/exercice_3.git```

### Création d'un composant avec state
- Dans le package ```./src/components/exercice-3```, créer le composant ```Exercice3```.
- Le composant retournera un formulaire avec deux champs de saisie de type ```text``` et un bouton de type ```submit```.
-  Les champs seront ```uncontrolled```, ```required``` et leurs valeurs seront gérées au travers d’un « state » React.
-  Les libellés des champs seront les suivants :
    - « Nom »
    - « Prénom »
- Le bouton portera la mention « Enregistrer ».

- À la soumission du formulaire, contrôler que les champs obligatoires sont bien renseignés. Si ce n’est pas le cas, afficher les champs en rouge avec un message « Le champ est obligatoire ».

- Dans le fichier ```./src/App.jsx```, appeler le composant.

<u>Notes :</u> afin de ne pas propager l’évènement de validation du formulaire, on pourra utiliser la méthode ```e.preventDefault()```.

Notions : CSS, state

## Exercice 4 – Découpage

### 1 - Initialisation du projet
Plusieurs possibilités :
- Initialiser le projet via la commande ```npx create-react-app```
- Continuer sur le même projet
- Télécharger le projet initialisé depuis le GitHub [Formation React 2025](https://github.com/orgs/Formation-React-2025/repositories) :
    - ```git clone https://github.com/Formation-React-2025/exercice_4.git```

### 2 - InputText
- Créer un composant ```InputText``` » dans le package ```./src/components/input/input-text``` ».
- Le composant retourne un ```uncontrolled``` input de type ```text``` dont la valeur est passée en props.
- Le composant prend en entrée les props suivantes :

|         Nom         | Description                                                                   |      Type      |  Required   | Valeur par défaut |
|:-------------------:|-------------------------------------------------------------------------------|:--------------:|:-----------:|:-----------------:|
|     ```label```     | Label du champ                                                                |  ```string```  | ```true```  |         -         |
|     ```value```     | Valeur de l'input                                                             |  ```string```  | ```false``` |  ```undefined```  |
| ```onValueChange``` | Fonction de callback ```(value: string) => void``` à exécuter lors d'un input | ```Function``` | ```false``` |  ```undefined```  |
|     ```name```      | Name de l'input                                                               |  ```string```  | ```false``` |  ```undefined```  |
|     ```error```     | Texte à afficher en cas d'erreur                                              |  ```string```  | ```false``` |  ```undefined```  |
|   ```disabled```    | Pour désactiver le champ                                                      | ```boolean```  | ```false``` |    ```false```    |
|   ```required```    | Pour rendre le champ obligatoire                                              | ```boolean```  | ```false``` |    ```false```    |

### 2 - LabelButton
- Créer un composant ```LabelButton``` dans le package ``` ./src/components/input/buttons/label-button```.
- Le composant retourne un button et prend en entrée les props suivantes :

|      Nom       | Description                                                                                     |      Type      |  Required   | Valeur par défaut |
|:--------------:|-------------------------------------------------------------------------------------------------|:--------------:|:-----------:|:-----------------:|
|  ```label```   | Label du bouton                                                                                 |  ```string```  | ```true```  |         -         |
|   ```type```   | Définit le type de button (```submit```, ```button``` ou ```reset```)                           |  ```string```  | ```false``` |  ```'button'```   |
| ```onClick```  | Fonction de callback ```(event: HtmlEventt) => void``` à exécuter lors d'un clic sur le bouton  | ```Function``` | ```false``` |  ```undefined```  |
| ```disabled``` | Pour désactiver le champ                                                                        | ```boolean```  | ```false``` |    ```false```    |

### 3 - Découpage et réutilisation de composants
- Dans le package ```./src/components/exercices-exercice-4```, re-créer le formulaire de l’exercice 3 en utilisant les nouveaux composants ```InputText``` et ```LabelButton```.

## Exercice 5 – map

### 1 - Initialisation du projet
Plusieurs possibilités :
- Initialiser le projet via la commande ```npx create-react-app```
- Continuer sur le même projet
- Télécharger le projet initialisé depuis le GitHub [Formation React 2025](https://github.com/orgs/Formation-React-2025/repositories) :
    - ```git clone https://github.com/Formation-React-2025/exercice_5.git```

### 2 - Construction d'un tableau
#### 2.1 Pré-requis
- Pour gérer différentes opérations sur les dates, nous allons utiliser la librairie ```date-fns```. Pour cela, lancer la commande ```npm install date-fns@4.1.0```
- Télécharger le fichier [Date.utils.js](https://github.com/Formation-React-2025/datas/blob/main/Date.utils.js) dans le package ```./src/utils```
- Télécharger le fichier [users_small.json](https://github.com/Formation-React-2025/datas/blob/main/users_small.json) dans le package ```./src/datas```
- Télécharger le modèle [User.model.js](https://github.com/Formation-React-2025/datas/blob/main/User.model.js) dans le package ```./src/models```.

#### 2.2 Création du composant
- Dans le package ```./src/components/exercices/exercice-5```, créer le composant ```Exercice5```
- Le composant doit afficher, dans un tableau, la liste des utilisateurs du fichier ```JSON``` :
  ```
  import usersJon from '../../../datas/users_small.json';
  ```
- Les utilisateurs seront stockés dans un state :
  ```
  const [
    users,
  ] = useState(usersJon.map((u) => new User(u)));
  ```

Les colonnes du tableau sont les suivantes :
- Identifiant
- Civilité (```M.``` ou ```Mlle``` ou ```Mme```)
- Prénom
- Nom
- Âge
- E-mail
- Date de dernière modification

#### 2.3 - Initialisation du tableau
- Initialiser le tableau ainsi que les colonnes

#### 2.4 - Créer un composant UserRow.jsx qui prend en entrée un user et qui afficher une ligne du tableau

#### 2.5 - Utiliser le ".map" pour boucler sur les users et afficher l'ensemble des lignes du tableau

#### 2.6 - Dans le fichier UserColumns.js, définir un tableau d'objets columns comportant les propriétés ci-dessous et décrivant les colonnes du tablea : 
- id
- title
- render

```
const USER_COLUMNS = [
  {
    id: 'id',
    title: 'Identifiant',
    render: (u) => u.id,
  },
  ...
]
```

#### 2.7 - Créer un composant UserCell qui prend en entrée un user et une colonne et applique la méthode render
#### 2.8 - Modifier UserRow.jsx pour qu'il prenne en props un tableau de colonnes utiliser .map pour
#### 2.9 - Modifier le header du tableau en utilisant le .map sur les colonnes

### Exercice 6
Nous allons mettre en place la possibilité de trier les colonnes du tableau.

#### SortHeaders.jsx
##### 1. Pré-requis
- Télécharger le fichier [SortDirection.constants.js](https://github.com/Formation-React-2025/datas/blob/main/SortDirection.constants.js) dans le package `./src/constants`
- Télécharger le fichier [Sort.types.js](https://github.com/Formation-React-2025/datas/blob/main/Sort.types.js) dans le package `./src/types`
- Télécharger le fichier [SortDescIcon.jsx](https://github.com/Formation-React-2025/datas/blob/main/SortDescIcon.jsx) dans le package `./src/components/icons`
- Télécharger le fichier [SortIncactiveIcon.jsx](https://github.com/Formation-React-2025/datas/blob/main/SortIncactiveIcon.jsx) dans le package `./src/components/icons`

##### 2. Création du composant
- Créer un composant ```HeaderCell.jsx``` dont les props sont les suivantes : 
  ```
  HeaderCell.propTypes = {
    column: ColumnTypes.isRequired,
    sort: SortTypes,
    onSortChange: PropTypes.func,
  };
  ```

Le comportement du composant est le suivant :
- Affiche `column.title`
- A droite du titre, afficher une icône :
  - Lorsqu'aucun tri n'est appliqué sur la colonne, afficher `<SortInactiveIcon />`
  - Lorsqu'un tri est appliqué sur la colonne, afficher de façon permanente `<SortDescIcon />`. De plus si le tri est croissant (`ASC`) appliquer une rotation de 180° à l'icône
- Le contenu du composant est clickable :
  - Au clic, exécuter la props `onSortChange` avec la nouvelle valeur de tri
  - Si `sort.order !== column.id`, nouvelle valeur = 
  ```
  {
    order: column.id,
    direction: SortDirection.ASC,
  }
  ```
  - Sinon (`sort.order === column.id`), si `sort.direction === SortDirection.ASC`, nouvelle valeur = 
  ```
  {
    order: column.id,
    direction: SortDirection.DESC,
  }
  ```
  - Sinon nouvelle valeur =
  ```
  {
    order: '',
    direction: '',
  }
  ```

<u>Notes :</u> 
- Nous considérerons qu'un tri est appliqué sur la colonne SSI `sort.order === column.id` et `sort.direction === SortDirectionConstants.ASC || sort.direction === SortDirectionConstants.DESC`

##### 3. Utilisation
- Reprendre le composant de l'exercice 5.
- Le composant devra maintenant gérer les variables de tri dans un state et utiliser le composant HeaderCell.jsx pour afficher les cellules du header du tableau
- Les lignes du tableau devront être affichées selon le tri du state du composant (attention à ne pas modifier la structure des tableaux)

### Exercice 7 - Pagination
Nous allons mettre en place la pagination sur le tableau de l'exercice 6

- Télécharger le fichier [users.json](https://github.com/Formation-React-2025/datas/blob/main/users.json) dans le répertoire `./src/datas`
- Modifier les users chargés par le contenu du nouveau fichier `JSON`
- Le composant affichant le tableau doit maintenant gérer dans son state la page du tableau à afficher
- Dans le footer du tableau, faire appel au composant `./src/components/pagination/Pagination.jsx` en footer du tableau
- Utiliser le composant pour mettre à jour les lignes du tableau affichées en fonction de la page sélectionnée


### Exercice 8 - Récupérer les user depuis API GET (react-query GET /users)
- Lancer la commande `npm install @tanstack/react-query@5.81.5`
- Lancer la commande `npm axios@1.10.0`
- Télécharger le projet [api_backend](https://github.com/Formation-React-2025/api_backend) `git clone https://github.com/Formation-React-2025/api_backend.git`
- Lancer l'API : dans le répertoire `api_backend` lancer les commandes `npm install` puis `npm start`
- Reprendre l'exercice précédent et charger les users en faisant appel à l'API `GET http://localhost:8080/users`

### Exercice 9 - Formulaire de création d'un nouveau user (react-query => post /users)
CreateUser.jsx

### Exercice 10 - Nav bar (1 Route pour chaque exo)
/exercices/{i}

### Exercice 11 - Page infos utilisateur (routage + nested routes + react query GET /users/XXX et PATCH /users/XXX)

Créer composant UserView avec le path /users
Tout path non reconnu redirige vers /users
Le composant UserView charge les users du fichier JSON et appelle le composant userTable avec

Créer composant UserInfos affichant les informations utilisateur avec le path /users/XXX/infos
/users/XXX/* => redirection vers page /users/XXX/infos
Ajouter une nouvelle colonne dans le tableau pour rediriger vers /users/XXX/infos

Dans le composant UserView, ajouter un lien redirigeant vers /users/create qui affiche CreateUsers.jsx

Créer le composant UpdateUsers.jsx sur le path /users/XXX/update qui permet de modifier un utilisateur
Ajouter une colonne dans le tableau pour rediriger vers la page de modification
Ajouter un lien dans le composant UserInfos pour rediriger vers la page de modification

### Exercice 12 - Reducer
Créer un composant Notification dont les props sont reçus via reducer
Dans le composant UserInfos, dispatcher une notification d'erreur si le user n'est pas trouvé et rediriger vers la page table
Dans les composants CreateUser et EditUser :
- Une notification en succès si le user a été édité
- Une notification en erreur si une erreur s'est produite

### Exercice 13 - Utiliser react-router pour gérer la pagination et les filtres sur le tableau

### Exercice 14 - Utiliser react-router pour gérer les forrmulaires "uncontrolled"
