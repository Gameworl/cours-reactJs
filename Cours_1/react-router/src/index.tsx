import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// Components
import Pokemon, { pokemonLoader } from './routes/Pokemon';
import Root, { rootLoader } from './routes/Root';
import Error from './routes/Error';

/*
========================================================================
Ici nous allons créer notre routeur qui servira à la navigation

On peut voir que nous avons deux routes : 
  - '/' qui est la racine de notre site
  - 'pokemon/:name' qui est une page que nous avons créé qui a un argument :name qui est une variable
Sur ces routes nous pouvons voir que nous avons un loader, celui-ci permet de charger du contenu lors de la navigation sur la page voulu
========================================================================
*/
const JSXRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} path='/' loader={rootLoader} errorElement={<Error />}>
      <Route element={<Pokemon />} loader={pokemonLoader} path='pokemon/:name' />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={JSXRouter} />
  </React.StrictMode>
);
