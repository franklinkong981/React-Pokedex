import React from 'react';

import Pokecard from './Pokecard.jsx';
import defaultPokecardList from './defaultPokecardList.js';

import './Pokedex.css';

const Pokedex = ({pokecardList = defaultPokecardList}) => {
  return (
    <>
      <h1 className="Pokedex-header">Pokedex</h1>
      <div className="Pokedex-pokecards">
        {pokecardList.map(pokecard => (
          <Pokecard name={pokecard.name} image={pokecard.src} type={pokecard.type} experience={pokecard.base_experience}/>
        ))}
      </div>
    </>
  );
};

export default Pokedex;