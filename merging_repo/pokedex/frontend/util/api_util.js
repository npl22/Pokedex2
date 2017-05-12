export const fetchAllPokemon = () => (
  $.ajax({url: "api/pokemon"})
);

export const fetchSinglePokemon = (id) => (
  $.ajax({url: `api/pokemon/${id}`})
);

export const createSinglePokemon = (pokemon) => (
  $.ajax({
    method: "POST",
    url: "api/pokemon",
    data: { pokemon },
    error: (error) => console.log(error)
  })
);
