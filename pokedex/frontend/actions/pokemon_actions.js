import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_NEW_POKEMON = "RECEIVE_NEW_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveSinglePokemon = poke => ({
  type: RECEIVE_SINGLE_POKEMON,
  poke
});

export const receiveNewPokemon = poke => ({
  type: RECEIVE_NEW_POKEMON,
  poke
});

export const requestAllPokemon = () => dispatch => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestSinglePokemon = (id) => dispatch => (
  APIUtil.fetchSinglePokemon(id)
    .then(poke => dispatch(receiveSinglePokemon(poke)))
);

export const createSinglePokemon = (poke) => dispatch => (
  APIUtil.createSinglePokemon(poke)
    .then(responsePoke => dispatch(receiveNewPokemon(responsePoke)))
);
