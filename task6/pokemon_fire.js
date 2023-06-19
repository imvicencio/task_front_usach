let pokemon = [
  {
    nombre: "Pikachu",
    tipo: "Electrico",
  },
  {
    nombre: "Charmander",
    tipo: "Fuego",
  },
  {
    nombre: "Bulbasaur",
    tipo: "Planta",
  },
  {
    nombre: "Squirtle",
    tipo: "Agua",
  },
  {
    nombre: "Charmeleon",
    tipo: "Fuego",
  },
  {
    nombre: "Weedle",
    tipo: "bicho",
  },
  {
    nombre: "Charizard",
    tipo: "Fuego",
  },
];

function FiltrarPokemonByType(pokemon, type) {
  return pokemon.filter((p) => p.tipo === type);
}

console.log(FiltrarPokemonByType(pokemon, "Fuego"));
