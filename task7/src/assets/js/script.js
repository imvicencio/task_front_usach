const loadPokemonList = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    const data = await response.json();
    const pokemonList = await getListPokemon(data);
    document.getElementById("pokemonList").innerHTML = pokemonList;
  } catch (error) {
    console.log(error);
  }
};

const getListPokemon = async (pokemon) => {
  let listPokemon = "";
  await Promise.all(
    pokemon.results.map(async (element) => {
      try {
        const data = await getPokemonData(element.url);
        listPokemon += `<div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="${
              data.front_default
            }" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  Experiencia
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">${element.name.toUpperCase()}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">${
              data.base_experience
            }</p>
          </div>
        </div>`;
      } catch (error) {
        console.log(error);
      }
    })
  );
  return listPokemon;
};

const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const { name, base_experience, weight, id } = data;
    const { front_default } = data.sprites;
    return { name, base_experience, weight, front_default, id };
  } catch (error) {
    console.log(error);
  }
};

loadPokemonList();
