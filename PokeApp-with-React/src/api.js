const API_URL = "https://pokeapi.co/api/v2/";

export async function fetchPokemonList(limit, offset) {
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

export async function fetchPokemonByGeneration(generation) {
    const response = await fetch(`${API_URL}generation/${generation}`);

    if (!response.ok) {
        throw new Error("Failed to fetch Pokémon by generation");
    }

    const data = await response.json();

    return data.pokemon_species;
}