export const fetchAllPokemon = () => (
  $.ajax({url: "api/pokemon"})
);

export const fetchSinglePokemon = (id) => (
  $.ajax({url: `api/pokemon/${id}`})
);
