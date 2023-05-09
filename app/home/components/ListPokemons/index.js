"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import CardPokemon from "../CardPokemon";

const API_DE_POKEMON = "https://pokeapi.co/api/v2/pokemon?offset=700&limit=300";

const ListPokemons = () => {
  const [pokemonsAvaible, setPokemonsAvaible] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    await axios.get(API_DE_POKEMON).then((response) => {
      getPokemonInfo(response.data.results);
      setPokemonsAvaible(true);

    });
  };

  

  const getPokemonInfo = async (pokemonsRoutes) => {
    let pokemons = [];
    for (let i = 0; i < pokemonsRoutes.length; i++) {
      await axios.get(pokemonsRoutes[i].url).then((response) => {
        let pokemon = response.data;
        pokemons.push(pokemon);
        setPokemons(pokemons);
      });
    }
  };

  useEffect(() => {
    getPokemons();
  }, [pokemonsAvaible]);

  return (
    <div className="">
      <ul className="list-pokemons">
        {pokemons.map((pokemon, index) => {
          return (
            <li key={pokemon.name} className="list-pokemons__item">
              <CardPokemon
                title={pokemon.name}
                img={pokemon.sprites.other['official-artwork'].front_default}
                weight={pokemon.weight}
                height={pokemon.height}
                stats={pokemon.stats}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListPokemons;
