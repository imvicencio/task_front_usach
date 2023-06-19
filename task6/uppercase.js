let pokemon = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];

function arrayToUpperCase(pokemon) {
  return pokemon.map((p) => p.toUpperCase());
}

console.log(arrayToUpperCase(pokemon));
