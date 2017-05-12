import { values } from 'lodash';

export const selectAllPokemon = ({ pokemon }) => values(pokemon);

export const selectPokemonItem = ({pokemonDetail: { items }} , itemId) => {
  let foundItem;
  items.forEach(item => {
    if (item.id === parseInt(itemId)) {
      foundItem = item;
    }
  });

  return foundItem;
};
