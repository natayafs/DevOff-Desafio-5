/*for (let i = 1; i <= 10; i++) {
  const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  fetch(url)
    .then(res => res.json())
    .then(pokemon => {
      console.log(pokemon);
      crearPokemon(pokemon, num);
    });
}

function crearPokemon(pokemon, num) {
  let item = lista.querySelector(`#pokemon-${num}`)

  let imagen = item.getElementsByTagName("img")[0]
  imagen.setAttribute("src", pokemon.sprites.front_default)

  let nombre = item.getElementsByTagName("p")[0]
  nombre.textContent = pokemon.name

  let numero = item.getElementsByTagName("input")[0]
  numero.setAttribute("placeholder", pokemon.id)}*/
