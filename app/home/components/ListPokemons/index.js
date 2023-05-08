import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ListPokemons = () => {
  const [pokemons, setPokemons ] = useState({})


  const getPokemons = async () => {
    await
      axios.get('https://pokeapi.co/api/v2/pokemon/1/').then((response) => {
        setPokemons(response.data)
      }
    )
  }

  useEffect(() => {
    getPokemons()
  }, [])


  return <div className='listPokemons'>{console.log(pokemons)}</div>;

}

export default ListPokemons;