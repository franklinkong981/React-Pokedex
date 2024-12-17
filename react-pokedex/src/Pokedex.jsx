import React from 'react';

import Pokecard from './Pokecard.jsx';

import './Pokedex.css';

const Pokedex = ({id, pokecardList, totalExperience, isWinner}) => {
  const result = isWinner ? "THIS POKEDEX WINS" : "THIS POKEDEX LOSES";
  const style = isWinner ? {color: "green"} : {color: "red"}; 

  return (
    <div className="Pokedex">
      <h1 className="Pokedex-header">Pokedex {id}</h1>
      <div className="Pokedex-pokecards">
        {pokecardList.map(pokecard => (
          <Pokecard name={pokecard.name} image={pokecard.src} type={pokecard.type} experience={pokecard.base_experience}/>
        ))}
      </div>
      <p className="Pokedex-total-experience">Total experience: {totalExperience}</p>
      <p className="Pokedex-result" style={style}>{result}</p>
    </div>
  );
};

export default Pokedex;