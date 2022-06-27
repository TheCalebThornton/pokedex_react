
export const getAllGen1Pokemnon = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0', {
    method: 'GET'
  });
}
