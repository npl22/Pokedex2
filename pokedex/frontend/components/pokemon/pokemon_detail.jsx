import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.id = this.props.match.params.pokemonId;
    this.props.requestSinglePokemon(this.id);
  }

  componentWillReceiveProps(newProps) {
    const newId = newProps.match.params.pokemonId;
    if (this.id !== newId ) {
      this.id = newId;
      this.props.requestSinglePokemon(newId);
    }
  }

  render() {
    let {
      name,
      poke_type,
      attack,
      defense,
      moves,
      image_url
    } = this.props.poke;
    if (moves) moves = moves.join(', ');
    return (
      <section className="pokemon-detail">
        <figure>
          <img src={image_url} alt={name} />
        </figure>
        <ul>
          <li><h2>{name}</h2></li>
          <li>Type: {poke_type}</li>
          <li>Attack: {attack}</li>
          <li>Defense: {defense}</li>
          <li>Moves: {moves}</li>
        </ul>
      </section>
    );
  }
}

export default PokemonDetail;
