const API_URL = "https://pokeapi.co/api/v2/";

export async function fetchPokemonList(limit = 20, offset = 0) {
    const response = await fetch(`${API_URL}pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    return data.results;
}