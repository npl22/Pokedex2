import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});


// testing
// import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
// import { selectAllPokemon } from './reducers/selectors';
// window.selectAllPokemon = selectAllPokemon;
// window.requestAllPokemon = requestAllPokemon;
// window.receiveAllPokemon = receiveAllPokemon;
