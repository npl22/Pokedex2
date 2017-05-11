import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const initialState = {
  items: [],
  moves: []
};

const pokemonDetailReducer = (state=initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.poke;
    default:
      return state;
  }
};

export default pokemonDetailReducer;
