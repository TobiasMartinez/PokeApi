'use client'
import React, {Suspense}from 'react';
import CardPokemon from './components/CardPokemon/index.js'



const HomePage = () => { 

  return <div className='home'>
     <Suspense fallback={<div>Loading...</div>}>
      <CardPokemon />   
     </Suspense>

    </div>;
  
}

export default HomePage;