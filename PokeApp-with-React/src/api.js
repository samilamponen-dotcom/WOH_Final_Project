const API_URL = "https://pokeapi.co/api/v2/";

export async function fetchPokemonList(limit = 4, offset = 0) {
    const response = await fetch(`${API_URL}pokemon?limit=${limit}&offset=${offset}`);
    
    if (!response.ok) {
        throw new Error("Failed to fetch Pokémon list");
    }

    const data = await response.json();

    return data.results;
}

export async function fetchPokemonDetails(pokemonName) {
    const response = await fetch(`${API_URL}pokemon/${pokemonName}`);

    if (!response.ok) {
        throw new Error("Failed to fetch Pokémon");
    }

    const data = await response.json();

    return data;
}