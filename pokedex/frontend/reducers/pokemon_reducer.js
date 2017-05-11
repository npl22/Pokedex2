import {
  RECEIVE_ALL_POKEMON,
  RECEIVE_NEW_POKEMON
} from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_NEW_POKEMON:
      return merge({}, state, {[action.poke.id]: action.poke});
    default:
      return state;
  }
};

export default pokemonReducer;
