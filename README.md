Démarrer le serveur d'API json qui s'appuie sur le fichier `db.json` :

```
npx json-server --watch db.json --port 4000
```

Initialiser `db.json` avec le contenu suivant :

```
{
  "notes": [
    {
      "id": 1,
      "title": "Inititation à React.JS",
      "content": "React est un framework de dev interractif"
    },
    {
      "id": 2,
      "title": "Utilisation de JSON server",
      "content": "lorem ipsummmm"
    },
    {
      "title": "Postman",
      "content": "Pour faire des requêtes HTTP",
      "id": 4
    }
  ],
  "profile": {
    "name": "Julien"
  }
}
```
