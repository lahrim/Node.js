# Node.js via Express framework

## installation
```
yarn install
```

changer .env.exemple en .env

## utilisation
Dans le terminal à la racine du projet
```
yarn start
```
Si vous êtes bien connecté à la base de donnée, dans le terminal il doit afficher :
=> Bien joué mon pote („• ᴗ •„)

## utiles
Déjà installé dans le package.json
```
dotenv
cors
mongoose
uid2
bcrypt
```

## modules
## checkBody
checkBody, permet de vérifier si un ou plusieurs champs sont remplis pour les req.body par exemple
Ajouter cette ligne au début de votre fichier
```
const { checkBody } = require('@modules/checkBody')
```
Voici un exemple d'utilisation
```
// vérifie si les champs sont remplis
if(!checkBody(req.body, ['titre', 'code_postal', 'ville', 'description', 'token' ])) return res.json({ result: false, error: 'Champs vide(s) ou manquant(s)' })
```

## checkIdFormat
Permet de vérifier si l'id est au bon format pour mongoose
Ajouter cette ligne au début de votre fichier
```
const { checkIdFormat } = require('@modules/checkIdFormat')
```
Voici un exemple d'utilisation
```
// vérifier si l'id est au bon format
if(!checkIdFormat(id)) return res.json({ result: false, error: 'ID d\'annonce invalide' })
```

## cleanSpace
Permet de retire les espaces avant et après dans un champ, à la reception des données
Ajouter cette ligne au début de votre fichier
```
const { cleanSpace } = require('@modules/cleanSpace')
```
Voici un exemple d'utilisation
```
// cela retire les espaces avant et après dans un champ à la reception des données
const cleanClasseList = { titre, adresse, code_postal, ville }

for (const i in cleanClasseList) {
  const cleanedField = cleanSpace(cleanClasseList[i])

  if(cleanedField !== null) champs[i] = cleanedField
}
```
