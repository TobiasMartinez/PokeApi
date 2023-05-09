import React, {Suspense}from 'react';
import CardPokemon from './components/CardPokemon/index.js'
import ListPokemons from './components/ListPokemons/index.js';



const HomePage = () => { 

  return <div className='home'>
     <Suspense fallback={<div>Loading...</div>}>
      <ListPokemons />
     </Suspense>

    </div>;
  
}

export default HomePage;