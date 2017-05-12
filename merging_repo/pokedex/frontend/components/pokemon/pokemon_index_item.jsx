import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ poke }) => (
  <Link to={`/pokemon/${poke.id}`}>
    <li className='poke-index-item'>
      <span>{poke.id}</span>
      <img src={poke.image_url} height={20} width={20}/>
      <span>{poke.name}</span>
    </li>
  </Link>
);

export default PokemonIndexItem;
