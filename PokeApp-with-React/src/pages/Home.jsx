import React, { useState } from "react";
import { usePokemon } from "../hooks/usePokemon";
import PokemonCard from "../components/PokemonCard";
import { usePokemonList } from "../hooks/usePokemonList";
import { usePokemonListByGeneration } from "../hooks/usePokemonList";
import SearchBar from "../components/SearchBar";


function PokemonListItem({ name }) {
    const { pokemon, loading, error } = usePokemon(name);
    if (loading) {
        return <p>Loading {name}...</p>;
    }
    if (error) {
        return <p>Could not load {name}: {error}</p>;
    }
    return pokemon ? <PokemonCard pokemon={pokemon} /> : null;
}

function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchGeneration, setSearchGeneration] = useState("");
    const allPokemon = usePokemonList();
    const generationPokemon = usePokemonListByGeneration(searchGeneration);

    // Determine which list of Pokémon to display based on the search term and generation
    const pokemonList = searchGeneration ? generationPokemon.pokemonList ?? [] : allPokemon.pokemonList ?? [];
    const loading = searchGeneration ? generationPokemon.loading : allPokemon.loading;
    const error = searchGeneration ? generationPokemon.error : allPokemon.error;
    return (
        <div>
            <h1>Welcome to the Pokémon App!</h1>
            <SearchBar 
                onSearch={setSearchTerm}
                onGenerationChange={setSearchGeneration}
            />
            {loading && <p>Loading Pokémon...</p>}
            {error && <p>Error: {error}</p>}
            <div className="row g-3">
                {pokemonList.map(({ name }) => (
                    <div 
                        key={name}
                            className = "col-12 col-sm-6 col-md-4 col-lg-3">
                        <PokemonListItem name={name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;