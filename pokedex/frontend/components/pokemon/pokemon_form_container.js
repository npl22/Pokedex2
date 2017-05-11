import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import { createSinglePokemon } from '../../actions/pokemon_actions';

const mapDispatchToProps = dispatch => ({
  createSinglePokemon: poke => dispatch(createSinglePokemon(poke))
});

export default connect(null, mapDispatchToProps)(PokemonForm);
