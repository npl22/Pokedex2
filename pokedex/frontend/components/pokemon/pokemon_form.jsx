import React from 'react';
import { withRouter } from 'react-router-dom';

const TYPES = [
  "fire",
  "electric",
  "normal",
  "ghost",
  "psychic",
  "water",
  "bug",
  "dragon",
  "grass",
  "fighting",
  "ice",
  "flying",
  "poison",
  "ground",
  "rock",
  "steel"
].sort();

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.emptyState = {
      name: '',
      attack: '',
      defense: '',
      poke_type: '',
      moves: ["", ""],
      image_url: ''
    };
    this.state = this.emptyState;
    this.updateProp = this.updateProp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateProp(prop) {
    return e => {
      if (prop === 'move1') {
        let moves = Object.assign([], this.state.moves);
        moves[0] = e.target.value;
        this.setState({ moves });
      } else if (prop === 'move2') {
        let moves = Object.assign([], this.state.moves);
        moves[1] = e.target.value;
        this.setState({ moves });
      } else {
        this.setState({[prop]: e.target.value});
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createSinglePokemon(this.state)
      .then(newPokemon => {
        this.props.history.push(`/pokemon/${newPokemon.id}`);
      });
  }

  render() {
    const {
      name,
      attack,
      defense,
      poke_type,
      moves,
      image_url
    } = this.state;
    return(
      <section>
        <ul className='errors-list'>
          {
            this.props.errors.map((err, i )=> <li key={i}>{err}</li>)
          }
        </ul>

        <form className='pokemon-form'
          onSubmit={this.handleSubmit}>
          <input
            placeholder='Name'
            value={name}
            onChange={this.updateProp('name')}/>
          <input
            placeholder='Image Url'
            value={image_url}
            onChange={this.updateProp('image_url')}/>
          <select
            onChange={this.updateProp('poke_type')}
            value={poke_type}>
            <option disabled> -- Select a Type -- </option>
            {
              TYPES.map((type, i) => <option
                key={i}
                value={type}>{type}</option>)
            }
          </select>
          <input
            placeholder='Attack'
            value={attack}
            onChange={this.updateProp('attack')}/>
          <input
            placeholder='Defense'
            value={defense}
            onChange={this.updateProp('defense')}/>
          <input
            placeholder='Move 1'
            value={moves[0]}
            onChange={this.updateProp('move1')}/>
          <input
            placeholder='Move 2'
            value={moves[1]}
            onChange={this.updateProp('move2')}/>
          <button>Create Pokemon</button>
        </form>
      </section>
    );
  }
}

export default withRouter(PokemonForm);
