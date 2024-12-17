import React from 'react';

import './Pokecard.css';

const Pokecard = ({name, image, type, experience}) => {
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-name">{name}</h3>
      <img className="Pokecard-image" src={image} alt="Picture of a {name}"/>
        <p className="Pokecard-type">Type: {type}</p>
        <p className="Pokecard-experience">EXP: {experience}</p>
    </div>
  );
};

export default Pokecard;