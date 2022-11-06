# Cours N°2
## Un projet fonctionel


Il arrive quelques fois qu'un projet soit inutilisable suite à des erreurs dans certains fichiers ou des mauvaises manipulations.

Par exemple, prenons notre projet tictactoe, un de mes collègues me l'a envoyer, mais je ne peux pas le lancer à cause de plusieurs erreurs.

```diff
+ Faites le nécessaire pour que le projet fonctionne et indique les erreurs que vous avez trouvées. 
```

Pour qu'il soit compréhensible, nous allons appliquer ce qu'on appelle des bonnes pratiques.
Il existe une multitude de bonnes pratiques, elles servent à produire un code de qualité et à faire en sorte que le projet soit compréhensible et maintenable. 

```diff
+ Lister les principales bonnes pratiques en reactJS (5 minimums)

+ Appliquer les bonnes pratiques que vous avez sélectionnées au projet tictactoe

+ Quel constat avez-vous fait sur le projet une fois que les bonnes pratiques ont été appliquées.

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

## la navigation sur site web

### le projet react-router

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

---

###### © NatanCharpentier