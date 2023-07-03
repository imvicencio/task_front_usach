class Character {
  constructor(name, species, image) {
    this.name = name;
    this.species = species;
    this.image = image;
  }

  get getName() {
    return this.name;
  }

  get getSpecies() {
    return this.species;
  }

  get getImage() {
    return this.image;
  }
}

const loadCharacterList = async () => {
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character?limit=20"
    );
    const data = await response.json();
    const characterList = await getListCharacter(data);
    document.getElementById("characterList").innerHTML = characterList;
  } catch (error) {
    console.log(error);
  }
};

const getListCharacter = async (characters) => {
  let listCharacter = "";
  await Promise.all(
    characters.results.map(async (element) => {
      try {
        const characterResponse = new Character(
          element.name,
          element.species,
          element.image
        );
        listCharacter += `<div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="${
              characterResponse.getImage
            }" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  Especie:
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">${characterResponse.getName.toUpperCase()}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">${
              characterResponse.getSpecies
            }</p>
          </div>
        </div>`;
      } catch (error) {
        console.log(error);
      }
    })
  );
  return listCharacter;
};

loadCharacterList();
