# Le reactJS 📚

Pour commencer qu'est ce que le "React" (également connu sous le nom de React.js ou ReactJS) ? 

C'est une bibliothèque JavaScript open-source utilisée pour créer des interfaces utilisateur (UI). Il a été développé par Facebook et a été rendu disponible pour la première fois en 2013.

- Principalement utilisé pour créer des applications web 🖥, mais il peut également être utilisé pour créer des applications mobiles 📱 en utilisant des frameworks tels que React Native.

- Il s'appuie sur l'idée de rendu de composants, ce qui signifie que vous pouvez créer des "composants" réutilisables de UI qui peuvent être combinés pour créer des interfaces utilisateur plus complexes. Chaque composant a son propre état et peut être mis à jour indépendamment des autres composants. Cela rend le développement d'applications plus facile et plus efficace, car vous pouvez mettre à jour des parties spécifiques de votre interface utilisateur sans avoir à recharger la page entière.

- React est également connu pour sa performance élevée grâce à son utilisation de différentes techniques de mise à jour de l'UI de manière optimisée. Il utilise également un DOM virtuel (un arbre de données qui représente l'interface utilisateur), ce qui permet de minimiser le nombre de modifications apportées au DOM réel (qui est ce qui est affiché dans le navigateur) et de réduire ainsi les temps de chargement et les exigences de mémoire 📉.

Donc en résumé, React est une bibliothèque JavaScript populaire utilisée pour créer des interfaces utilisateur réactives et performantes pour les applications web et mobiles.

---
## Pré-requis (20 min)

1. Un ide sachant reconnaitre reactJS (Visual studio code par exemple) 

2. Assurez-vous de disposer d’une version installée de Node.js (https://nodejs.org/fr/) suffisamment récente.

3. Ajouter NVM (node version manager), cela vous permettra de pouvoir naviguer entre différents projets ayant une version de node différente

---
## Ce que vous devez connaitre

  1. Le JSX (JavaScript XML) est une syntaxe qui permet de mélanger du code HTML et du JavaScript dans les fichiers de votre application React. C'est ce qui vous permet de créer des composants de UI en utilisant du code HTML-like dans vos fichiers JavaScript.

  2. Les composants sont la pierre angulaire de React. Ils sont des blocs de code réutilisables qui représentent une partie de votre interface utilisateur. Vous pouvez créer des composants en utilisant des fonctions ou des classes, et chaque composant a son propre état et méthodes de rendu.

  3. Les props (short pour "propriétés") sont des arguments passés à un composant lors de son utilisation. Ils permettent de passer des données à un composant depuis l'extérieur et de les utiliser dans le code du composant.

  4. State est une propriété d'un composant qui contient des données qui peuvent être utilisées dans le rendu du composant. Une State peut être modifié à l'intérieur du composant et peut déclencher une mise à jour de l'interface utilisateur lorsqu'il est modifié.

  5. Cycle de vie : chaque composant de React a un cycle de vie qui décrit les différentes étapes qu'il traverse depuis sa création jusqu'à sa suppression. Comprendre comment fonctionne le cycle de vie des composants peut vous aider à mieux gérer votre application et à écrire du code plus efficace.
---
## C'est parti

![Alt Text](https://media.giphy.com/media/5jYt43Rzz83SeKR4oU/giphy.gif)


### Création d'un projet (15 min)

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

### Mon premier composant  (20 min)

```diff 
+ A quoi sert le fichier App.js , App.css et App.test.js ?

+ Comment notre application choisis d'afficher le contenu de App.js lors de son lancement ?
```

Voici un exemple d'un composant simple dans React :

```js
import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is a simple React component.</p>
    </div>
  );
}

export default MyComponent;
```

Dans cet exemple, `MyComponent` est une fonction qui renvoie un élément div avec un titre et un paragraphe. Les déclarations d'importation et d'exportation en haut et en bas du fichier permettent d'utiliser le composant dans d'autres parties de l'application.

Pour utiliser un composant dans une application React, vous pouvez l'importer, puis le rendre à l'aide de la syntaxe JSX, qui est une extension syntaxique pour JavaScript permettant d'écrire du code de type HTML dans vos fichiers JavaScript. 

Voici un exemple de la façon dont vous pouvez utiliser le composant `MyComponent` dans une application React :

```js
import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

export default App;
```

Dans cet exemple, le composant `App` importe le composant `MyComponent` et le rend à l'intérieur d'un élément `div`.

Lorsque l'application est rendue, le composant `MyComponent` s'affiche sur la page.

```diff 
+ Vous devez faire en sorte que votre application affiche notre composant
```

### Les props (parent => enfant) (30 min)

Dans ReactJS, les props (abréviation de "properties") sont un moyen de transmettre des données d'un composant parent à un composant enfant. Ils sont en lecture seule et ne peuvent pas être modifiés par le composant enfant.

Les props sont transmis à un composant sous forme d'objet, et le composant peut accéder aux props en utilisant l'argument props transmis à la fonction du composant.

Voici un exemple de la façon dont vous pouvez utiliser les props dans un composant React :

```js
import React from 'react';

function MyComponent(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default MyComponent;
```

Dans cet exemple, le composant `MyComponent` est une fonction qui prend un argument props. Le composant renvoie un élément div avec un titre et un paragraphe, et il utilise l'objet props pour accéder aux props titre et description qui lui ont été transmis.


Pour transmettre des accessoires à un composant, vous pouvez les inclure en tant qu'attributs lorsque vous effectuez le rendu du composant. Voici un exemple de la manière dont vous pouvez transmettre des props au composant `MyComponent` :

```js
import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <MyComponent title="Hello World" description="This is a description" />
  );
}

export default App;
```
Dans cet exemple, le composant App rend le composant `MyComponent` et lui transmet deux props : title et description.

Le composant `MyComponent` peut alors accéder à ces paramètres en utilisant l'argument props.

 ```diff 
 + Ajouter les props a notre composant 
 ```

### Les props (enfant => parent) (15 min)

Les props sont un moyen de transmettre des données d'un composant parent à un composant enfant. Elles sont en lecture seule et ne peuvent pas être modifiées par le composant enfant.

Voici un exemple de la façon dont vous pouvez transmettre un prop d'un composant enfant à un composant parent :

```js
import React from 'react';

function ChildComponent(props) {
  return (
    <button onClick={props.onClick}>Click me!</button>
  );
}

function ParentComponent() {
  function handleClick() {
    console.log('Button was clicked!');
  }

  return (
    <ChildComponent onClick={handleClick} />
  );
}

export default ParentComponent;

```

Dans cet exemple, le composant `ParentComponent` rend le composant `ChildComponent` et lui transmet un prop `onClick`. L'accessoire `onClick` est une fonction définie dans le composant `ParentComponent` et transmise au composant `ChildComponent` en tant que propriété.


Lorsque le bouton du `ChildComponent` est cliqué, la fonction `handleClick` est appelée et le message "Button was clicked !" est enregistré dans la console.


Pour accéder aux propriétées dans le `ChildComponent`, vous pouvez utiliser l'argument props qui est transmis à la fonction du composant. Dans cet exemple, l'accès à la fonction `onClick` s'effectue à l'aide de `props.onClick`.

 ```diff 
 + Ajouter composant enfant avec un bouton qui passe une information à son composant parent
 ```

### Le UseState (20 min)

`useState` est un hook dans ReactJS qui vous permet d'ajouter un état aux composants fonctionnels. Avant l'introduction des hooks, l'état ne pouvait être utilisé que dans les composants basés sur des classes.

Pour utiliser le hook `useState`, vous devez l'importer de la bibliothèque react et l'appeler dans votre composant fonctionnel. Le hook `useState` prend un état initial en argument et renvoie un tableau contenant deux éléments : la valeur de l'état actuel et une fonction de mise à jour de l'état.

Voici un exemple d'utilisation du hook `useState` pour ajouter un état à un composant fonctionnel :

```js
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Dans cet exemple, le composant `Example` déclare une variable d'état appelée `count` à l'aide du hook `useState`. La valeur initiale de `count` est fixée à 0. Le hook `useState` renvoie un tableau contenant la valeur actuelle de `count` (qui est 0) et une fonction appelée `setCount` pour mettre à jour la valeur de `count`.

Le composant rend un bouton et un élément de texte qui affiche la valeur actuelle du nombre. Lorsque l'on clique sur le bouton, la fonction `setCount` est appelée avec la nouvelle valeur de `count`, ce qui incrémente sa valeur de 1.


 ```diff 
 + Ajouter un useState à votre application

 + faire en sorte qu'un composant enfant incrémente le useState du parent
 ```

### Le UseEffect (20 min)

`useEffect` est un hook dans ReactJS qui vous permet d'effectuer des effets dans les composants fonctionnels. Il remplace les méthodes de cycle de vie telles que `componentDidMount`, `componentDidUpdate` et `componentWillUnmount`, qui ne sont disponibles que dans les composants basés sur des classes.

Pour utiliser le hook `useEffect,` vous devez l'importer de la bibliothèque react, puis l'appeler dans votre composant fonctionnel. Le hook `useEffect` prend une fonction en argument, appelée fonction "effect". La fonction effect est exécutée après le rendu du composant et peut être utilisée pour effectuer des effets tels que des requêtes réseau, la mise en place d'abonnements et la mise à jour de l'état du composant.

Voici un exemple de la façon dont vous pouvez utiliser le hook `useEffect` pour réaliser un effet dans un composant fonctionnel :

```js
import React, { useEffect, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('The component has rendered!');
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Dans cet exemple, le composant `Example` utilise le hook `useEffect` pour enregistrer un message dans la console à chaque fois que le composant est rendu. La fonction effect est appelée après le rendu du composant et n'a pas d'argument.

Vous pouvez également spécifier une liste de dépendances comme deuxième argument du hook `useEffect`. La fonction d'effet sera réexécutée chaque fois que l'une des dépendances change. Cela peut être utile pour optimiser les performances de la fonction d'effet en évitant les réexécutions inutiles.

Voici un exemple d'utilisation du hook `useEffect` avec des dépendances :

```js
import React, { useEffect, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(`The count is ${count}`);
  }, [count]);

  return (
    <div>
      <p>The count is {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment count
      </button>
      <input value={name} onChange={event => setName(event.target.value)} />
    </div>
  );
}
```

Dans cet exemple, le composant `Example` possède deux variables d'état : `count` et `name`. 

Le hook `useEffect` est utilisé pour enregistrer la valeur de count dans la console à chaque fois qu'elle change. Le hook `useEffect` possède une liste de dépendances qui ne comprend que `count`, de sorte que la fonction effect ne sera ré-exécutée que lorsque `count` changera.

 ```diff 
 + Ajouter un useEffect qui se lance quand on modifie la page 

 + Ajouter un useEffect qui se lance uniquement lors d'une condition spécifique

 ```
 
--- 

## UseEffect

```diff

+ A quoi sert le useEffect ? 

```


### UseEffect à l'ancienne

Si l'on développe en "Class" alors nous utilisons 
```js
 componentDidMount() {    document.title = `You clicked ${this.state.count} times`;  }  
 componentDidUpdate() {    document.title = `You clicked ${this.state.count} times`;  }
```
Cela nous permet de faire automatiquement une action quand notre composant est monté et quand on l'update

```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {    
    document.title = `You clicked ${this.state.count} times`; 
     }  
  
  componentDidUpdate() {   
     document.title = `You clicked ${this.state.count} times`;  
     }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

### UseEffect de nos jours

Comme vous le savez, la méthode de développement en "Class" n'est plus d'actualité. Nous préférons les "function".
Dans un souci de lisibilité et d'efficacité, il fut décidé de remplacer `componentDidMount` `componentDidUpdate` avec `UseEffect`. 

```js
import React, { useState, useEffect } from 'react';
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {    
    document.title = `You clicked ${count} times`;  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Contrairement à componentDidMount ou componentDidUpdate, les actions du useEffect ne bloquent pas le refresh la page. Notre application est ainsi plus réactive.

### Quelques informations suplémentaires

- Vous pouvez créer autant de UseEffect que vous voulez.
- Vous pouvez rajouter des dépendances au UseEffect pour que celui-ci ce déclenche à un moment précis.

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```

```diff

+ Mettez en place un UseEffect et comprenez comment celui-ci fonctionne.

```

---

## Travail

Maintenant que vous maîtrisez les bases, nous allons pouvoir créer notre premier projet.
Le but de celui-ci est de mettre en place ce que vous avez appris précédemment pour cela, nous allons implémenter ‼️ 

un chifoumi ‼️

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

![Alt Text](https://media.giphy.com/media/MIlFrmkPJDvec6qSzl/giphy.gif)

---

## Un projet fonctionel


Il arrive quelques fois qu'un projet soit inutilisable suite à des erreurs dans certains fichiers ou des mauvaises manipulations.

Par exemple, prenons notre projet tictactoe, un de mes collègues me l'a envoyer, mais je ne peux pas le lancer à cause de plusieurs erreurs.

```diff
+ Faites le nécessaire pour que le projet fonctionne et indiquer les erreurs que vous avez trouvées. 
```

Pour qu'il soit compréhensible, nous allons appliquer ce qu'on appelle des bonnes pratiques.
Il existe une multitude de bonnes pratiques, elles servent à produire un code de qualité et à faire en sorte que le projet soit compréhensible et maintenable. 

```diff
+ Lister les principales bonnes pratiques en reactJS (5 minimums)

+ Appliquer les bonnes pratiques que vous avez sélectionnées au projet tictactoe

+ Quel constat avez-vous fait sur le projet une fois que les bonnes pratiques ont été appliquées.

```

---
## Navigation 

la navigation sur site web
le projet react-router

Nous allons voir comment faire en sorte de créer une navigation sur notre application.

```diff
+ Récupérer le projet react-router

+ Les fichiers sont en .tsx, pourquoi ? 

+ Dans le projet, les commentaires vous expliqueront comment fonctionne la navigation et ses fonctionnalités. 

- site web pour l'api : https://pokeapi.co/

+ Ajouter une route permettant d'avoir la liste des baies dans pokemon 

+ Ajouter une route permettant d'avoir description d'une baie

+ Ajouter une route pour savoir quel pokemon je peux trouver dans les environs de "cerulean-city-area"
```

## Le découpage en atomic Design 

L’approche Atomic Design est la suivante : partir du plus petit (l’atome) pour concevoir plus grand (la page ou l’écran). 
Les éléments de base de l’interface sont conçus en premier, de manière générique, puis assemblés pour concevoir les molécules, 
les organismes et finalement les pages ou les écrans.

L'atomic design est utiliser souvent dans le cas où l'on se retrouve avec une même page qui a des modifications mineurs (textes, images).

Prenons par exemple cette page (cf. tableau), nous pouvons distinguer plusieurs éléments tels qu'un personnage, un bandeau, un fond, un texte, etc.


- Un atome va être par exemple une image, celle-ci sera uniquement affichée et rien de plus. Il n'y a aucune logique.
- une molécule va être un ensemble d'atomes, toujours sans logique.
- un organisme est un ensemble de molécules et d'atomes auquel on a rajouté de la logique.
- Une page ou écran rassemble les éléments vus précédemment.


```diff
Dans notre chifoumi :

+ Définir ce que va être un atome 

+ Définir ce que va être une molécule

+ Définir ce que va être un organisme

+ Définir ce que va être un écran

+ Modifier le en appliquant l'atomic design
```

## Le typeScript 

### La différence etre .js et .tsx
.js est un fichier JavaScript, un langage de programmation populaire utilisé pour développer des applications web. .tsx est un fichier TypeScript, une extension de JavaScript qui ajoute des fonctionnalités de typage statique pour aider à prévenir les erreurs de programmation. 

En .js
```js
function greet(name) {
  return "Hello, " + name;
}

console.log(greet("John"));
```

En .tsx
```tsx
function greet(name: string): string {
  return "Hello, " + name;
}

console.log(greet("John"));
```

```diff
+ Que faut-il modifier pour que notre projet puisse comprendre les .tsx

+ Un nouveau fichier à été créé "tsconfig.json". A quoi sert-il ? Pour notre projet en react que faut-il utiliser ? Pourquoi ceux-la ?  

+ Modifier votre projet chifoumi en .tsx

```

## Mirage Js
![Alt Text](https://media2.giphy.com/media/l41lVeag0sl65q5AQ/giphy.gif?cid=ecf05e47rihg3pymofzkbiefqjvvxiz3p2kcqt4winlswr9x&rid=giphy.gif&ct=g)

Alors non, on va pas parler de ce mirage là !!! 

Mais plutot de celui-ci ![MirageJS](https://miragejs.com/)  

```diff
+ Qu'est ce que Mirage JS

+ Suivez le tutoriel de celui-ci 

```
