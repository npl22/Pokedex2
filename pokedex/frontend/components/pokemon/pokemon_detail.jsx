import React from 'react';
import ItemDetailContainer from './item_detail_container';
import { Route, Link } from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.id = this.props.match.params.pokemonId;
    this.props.requestSinglePokemon(this.id);
    console.log('sent request');
  }

  componentWillReceiveProps(newProps) {
    console.log('updating props..')
    const newId = newProps.match.params.pokemonId;
    if (this.id !== newId ) {
      this.id = newId;
      this.props.requestSinglePokemon(newId);
    }
  }

  render() {
    console.log('in render');
    console.log(this.props.poke);
    let {
      name,
      poke_type,
      attack,
      defense,
      moves,
      image_url,
      items
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
        <section className='items'>
          <h3>Items</h3>
          <ul className="item-list">
            {
              items.map((item,i) => (
                <Link to={`/pokemon/${this.id}/items/${item.id}`} key={i}>
                  <li>
                    <img src={item.image_url} alt={item.name}/>
                  </li>
                </Link>
              ))
            }
          </ul>
          <Route
            path="/pokemon/:pokemonId/items/:itemId"
            component={ItemDetailContainer} />
        </section>
      </section>
    );
  }
}

export default PokemonDetail;
