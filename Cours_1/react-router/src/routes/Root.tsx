import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

/*
========================================================================
Création d'une interface pour définir un pokemon pour notre site 
========================================================================
*/
export interface PokemonType {
  name: string;
  url: string;
  sprites: {
    front_default: string;
  };
}

/*
========================================================================
Création d'une interface pour définir une liste de pokemons pour notre site 
========================================================================
*/
interface PokemonsType {
  pokemons: {
    results: PokemonType[];
  };
}


/*
========================================================================
Voici notre premier loader que nous avons mis en place sur la route '/'

- ligne 40 => On peut voir que notre fonction est async car on attend une réponse de l'api donc on retournera une Promise que l'on type
- ligne 42 => Nous avons la requête fait a l'api 
- ligne 44 => Vérification de l'état de cette requête
- ligne 46 => Le stockage de la réponse de notre requête
- ligne 48 => On retourne notre valeur de stockage
========================================================================
*/
export const rootLoader = async (): Promise<PokemonsType> => {
  
  const results = await fetch('https://pokeapi.co/api/v2/pokemon');

  if (!results.ok) throw new Error('Something went wrong!');

  const pokemons = await results.json();

  return { pokemons };
};



/*
========================================================================
- ligne 60 => Dans l'affichage de page pour la route '\', on récupère la valeur du loader avec useLoaderData(), on connaît le type de retour de celle-ci donc on lui indique avec  as PokemonsType
- ligne 66 => Nous avons un lien qui permet de naviguer sur notre route 'pokemon/:name' en remplacent :name par le nom du pokemon voulu
========================================================================
*/
const Root = () => {
  const { pokemons } = useLoaderData() as PokemonsType;

  return (
    <>
      <header>
        {pokemons.results.map(pokemon => (
          <Link style={{ marginRight: 20 }} key={pokemon.name} to={`pokemon/${pokemon.name}`}>
            {pokemon.name}
          </Link>
        ))}
      </header>
      <Outlet />
    </>
  );
};

export default Root;
