import React from 'react';

import Pokedex from './Pokedex.jsx';
import {pokecardList1, pokecardList2} from './PokecardList.js';

const Pokegame = () => {
  const pokedex1Exps = pokecardList1.map(pokecard => pokecard.base_experience);
  const pokedex1TotalExp = pokedex1Exps.reduce((currentExp, totalExp) => currentExp + totalExp, 0);

  const pokedex2Exps = pokecardList2.map(pokecard => pokecard.base_experience);
  const pokedex2TotalExp = pokedex2Exps.reduce((currentExp, totalExp) => currentExp + totalExp, 0);

  const isPokedex1Winner = pokedex1TotalExp >= pokedex2TotalExp;
  const isPokedex2Winner = !isPokedex1Winner;

  return (
    <>
      <h1 className="Pokegame-header">Which Pokedex has the MOST combined experience?</h1>
      <Pokedex id={1} pokecardList={pokecardList1} totalExperience={pokedex1TotalExp} isWinner={isPokedex1Winner}/>
      <Pokedex id={2} pokecardList={pokecardList2} totalExperience={pokedex2TotalExp} isWinner={isPokedex2Winner}/>
    </>
  );
};

export default Pokegame;