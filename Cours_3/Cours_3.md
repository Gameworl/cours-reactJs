# Cours_3

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
+ Définir ce que va être un atome dans cette page 

+ Définir ce que va être une molécule

+ Définir ce que va être un organisme

+ Définir ce que va être un écran

+ Réaliser la page en appliquant l'atomic design
```

## Les tests en reactJS

Comme vous avez pu le constater dans le package.json, il y a un package de test nommé jest qui a été installé.

```diff
+ À quoi servent les tests dans un projet

+ Quelles sont les différents type de test
```

Par exemple, si nous souhaitons tester une page d'un site, nous pouvons regarder :

```js

 test('Test d\'un mots sur une page', () => {
        const { getByText } = render(
                <HomePage/>
        );
        expect(getByText(/Bonjour/i)).toBeInTheDocument();
    });
    

     test('Test nombre de lien de redirection', () => {
        render(
                <Navigation/>
        );
        const listLink = screen.getAllByRole('link');
        expect(listLink.length).toEqual(5);
    });

 test('Test de l'apparition d'un texte après une selection d'un dropdown', async () => {
        render(
                <HomePage/>
        );

        expect(screen.queryByText(/Détails/)).toBeNull();
        await userEvent.type(screen.getByRole('option'), 'ville');
         expect(screen.findByText(/Détails/));
    });

```

```diff

+ Pour chaque fichier créer un jeu de test

+ Rajouter des composants pour tester divers types de test

-  Vous souhaitez aller plus loin dans l'intégration de vos tests ? Appliquer de l'intégration continue sur votre projet.

```

## Revoir les bases

C'est le moment de me dire s'il y a des aspects que vous voulez revoir en reactJS ou si vous avez des questions. 


## Projet reactJs

Vous allez maintenant devoir réaliser un projet en reactJS. 

Ce projet est à réaliser seul.

Vous aurez la grille d'évaluation dans le dossier github ainsi que l'énoncé du projet. 

Quelques informations supplémentaires : 

```diff
+ L'aspect visuel du projet est pris en compte.

+ Merci de rédiger un readme indiquant l'architecture de votre projet et comment fonctionne les fonctionnalités que vous avez implémentées.

+ Créer un repository github sur lequel vous déposerez le projet et n'oublier pas de m'ajouter dessus (sinon cela sera compliqué pour vous noter)

- Aide : Un des points du pdf vous demande d'implémenter une map, je vous conseille d'utiliser https://react-leaflet.js.org/. Après libre à vous d'utiliser autre chose.
```
