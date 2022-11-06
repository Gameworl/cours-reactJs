import React from 'react';
import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom';
// Types
import { PokemonType } from './Root';


/*
========================================================================
Voici notre deuxième loader que nous avons mis en place sur la route 'pokemon/:name'

- ligne 18 => On peut voir que notre fonction est async car on attend une réponse de l'api donc on retournera une Promise que l'on type
- ligne 19 => Nous avons la requête fait a l'api 
- ligne 21 => Vérification de l'état de cette requête
- ligne 23 => Le stockage de la réponse de notre requête
- ligne 25 => On retourne notre valeur de stockage
========================================================================
*/
export const pokemonLoader = async ({ params }: LoaderFunctionArgs): Promise<PokemonType> => {
  const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);

  if (!results.ok) throw new Error('Something went wrong!');

  const pokemon = await results.json();

  return pokemon;
};


/*
========================================================================
Dans l'affichage de page pour la route 'pokemon/:name, on récupère la valeur du loader avec useLoaderData()
On connaît le type de retour de celle-ci donc on lui indique avec  as PokemonsType
========================================================================
*/
const Pokemon = () => {
  const pokemon = useLoaderData() as PokemonType;

  return (
    <>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt="sprite"/>
    </>
  );
};

export default Pokemon;
