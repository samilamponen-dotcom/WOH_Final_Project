const API_URL = "https://pokeapi.co/api/v2/";

export async function fetchPokemonList(limit = 20, offset = 0) {
    const response = await fetch(`${API_URL}pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.detail || "Failed to fetch Pokémon list");
    }

    return data.results;
}

export async function fetchPokemonDetails(pokemonName) {
    const response = await fetch(`${API_URL}pokemon/${pokemonName}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.detail || "Failed to fetch Pokémon");
    }

    return data;
}