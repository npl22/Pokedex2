import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  componentWillMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const pokemonItems = pokemon.map(
      poke => <PokemonIndexItem key={poke.id} poke={poke} />
    );
    return (
      <section className="pokedex">
        <ul>
          {pokemonItems}
        </ul>
        <Route
          path="/pokemon/:pokemonId"
          component={PokemonDetailContainer}>
        </Route>
      </section>
    );
  }
}

export default PokemonIndex;
