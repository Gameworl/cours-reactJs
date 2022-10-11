# Le reactJS
- React est une bibliothèque JavaScript open-source 📚
- Elle est utilisée pour gérer la couche d'affichage des applications web et mobiles 🖥️📱
- L'objectif principal de React est d'être rapide, évolutif et simple.
- React est une bibliothèque pour créer des interfaces utilisateur composables .
- React possede une communauté de développeurs importante ce qui permet une facilité dans la résolution des problèmes ou l'ajout de dépendance 📦

## Pré-requis

1. Un ide sachant reconnaitre reactJS (Visual studio code par exemple) 

2. Assurez-vous de disposer d’une version installée de Node.js (https://nodejs.org/fr/) suffisamment récente.

3. Ajouter NVM, cela vous permettra de pouvoir naviguer entre différents projets ayant une version de node différente

## Votre premier projet

Maintenant que l'installation de Node.js a été effectué vous allez pouvoir créer votre premier projet 

```shell
npx create-react-app mon-app
cd mon-app
npm start
```

🎊 Voila votre premier projet de créé ! 🎊

```diff 
+ Que s'est-il passé  lors de la commande "npx create-react-app mon-app" et qu'est ce que "create-react-app" ?

+ Si l'on éjecte "create-react-app" de notre projet que se passe-t-il ?

+ Un fichier nommé "package.json" se trouve à la racine de votre projet à quoi sert-il et que contient ce fichier précisément ? 
```

### Mon premier composant

```diff 
+ A quoi sert le fichier App.js , App.css et App.test.js ?

+ Comment notre application choisis d'afficher le contenu de App.js lors de son lancement ?
```

Dans le fichier App.js, remplacer son contenu par : 

```js
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Ceci est un titre dans la function App</h1>
      </header>
    </div>
  );
}

export default App;
```

Ensuite, nous allons créer un composant qui nous affichera un texte sous le `<h1></h1>` de notre page.

Pour faire cela au-dessus de notre composant App() , nous allons créer un composant nommé Information qui aura la forme :

```js
export function Information() {
  return <h2>je suis un sous-titre de la function Information</h2>
 }
 ```
 
 ```diff 
 + Il faut maintenant l'insérer dans notre page à vous de jouer !!
 ```
 
---

Nous avons donc créer un composant nommé Information() celui-ci a pour objectif d'afficher un texte dans notre page, mais il se trouve dans le même fichier que notre fonction "App". 

```diff 
+ Vous devez le sortir de App.js et l'insérer dans un fichier nommé Information.js et vérifier que tous fonctionne correctement.
```

Il est préférable de découper son code sous forme de composant, donc avoir un fichier avec un composant permet de maintenir le projet de manière plus efficace et d'avoir une lecture de celui-ci plus efficace.

Nous avons donc deux fichiers un qui contient la composant App()  et un autre qui contient Information(), la prochaine étape est de pouvoir modifier le texte de la fonction d'information. 
Pour cela, il existe ce qu'on appelle des "props", les props servent a passer en paramètre des informations a un composant.

Pour faire cela, il suffit de rajouter a un composant une variable props dans ses paramètres donc par exemple : 

```js
export exemple(props){}

```

ensuite, il faut définir quels types de props, nous voulons lui passer en paramètre. 
Dans notre exemple, nous voulons lui passer un texte soit : 

```js
<Exemple texte=""/>
```

Cela nous permet donc de récupérer le paramètre texte dans notre composant :

```js
export exemple(props){
  return <p>{props.texte}</p>
}
```

Dans notre composant information, nous voulons lui passer en paramètre la date actuelle sous forme dd/MM/yyyy.

```diff 
+ Il faut donc créer une function dans le composant App() qui passe la date en paramètre de `<information/>`.
```

---

Dans notre projet, nous allons devoir faire en sorte de mettre à jour certains composants lors d'action bien précise pour cela, il existe un hook nommé "useState".

Ce hook comme indiqué permet de gérer l'état local du composant précis dans une page.

```diff 

+ comment utiliser le hook "useState" 

```

Grâce à ce hook, il est possible de récupérer une information d'un composant enfant pour le passer à son parent. Il suffit de passer dans les props de l'enfant la fonction du hook pour mettre à jour notre variable.

Une fois que nous avons compris comment fonctionne "useState", nous allons créer un composant qui contient un `<input/>` qui retournera un chiffre qui  sera envoyé au composant principal.

```diff 
+ Vous devez maintenant faire en sorte de récupérer l'information du input dans "function App() {}" et de l'afficher dans la page
```

## Besoin d'aide ? Attention à internet

Sur internet, vous trouverez beaucoup de solutions pour créer un composant. Mais attention, un grand nombre de ces solutions nous propose des composants écrits en Class et non en function. 


```diff 
+ Transformer notre function App() en class 

+ Quelle est la différence entre l'écriture d'un composant en class et en function ? 
```

## Mise en pratique

Maintenant que vous maîtrisez les bases, nous allons pouvoir créer notre premier projet.
Le but de celui-ci est de mettre en place ce que vous avez appris précédemment pour cela, nous allons implémenter ‼️ un chifoumi ‼️.

Nous voulons que notre projet en react puisse :  

```diff 
General : 

+ Pouvoir selectionner => 👊🖐✌️
+ Avoir un affichage de ce qu'on a selectionné
+ Avoir un affichage du résultat
+ Avoir une liste des matches qui ont été joués ( ✌️ vs 👊 => 👊 victoire de X)
+ Pouvoir vider la liste des matches


Mode 2 joueurs : 

+ Pouvoir selectionner soit 👊🖐✌️ en tant qu'adversaire (sans avoir la vision de la selection du 1er joueur)

Mode 1 joueur : 

+ Faire une ia qui selectionne soit 👊🖐✌️

Supplément : 

+ faire un menu pour rajouter une action aux 👊🖐✌️

```


## Pour le cours suivant 

Nous avons vu précédemment `useState` qui est un hook, il existe une multitude de hook.
Pour le prochain cours, vous allez devoir écrire un morceau de code qui mettra en pratique le hook qui vous sera attribué et vous présenterez celui-ci en début du prochain cours.

Lien diaporama : 

https://docs.google.com/presentation/d/1OOwJxttyVc7mLsDFzbFgFdmESbjMKE_8MmS-HHAlHkU/edit?usp=sharing
