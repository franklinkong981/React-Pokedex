import React from 'react';

import Pokecard from './Pokecard.jsx';
import defaultPokecardList from './defaultPokecardList.js';

const Pokedex = ({pokecardList = defaultPokecardList}) => {
  return (
    <>
      <h1>I am a Pokedex</h1>
      <Pokecard />
      <Pokecard />
      <Pokecard />
    </>
  );
};

export default Pokedex;