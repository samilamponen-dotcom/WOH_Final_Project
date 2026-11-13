import { useState } from "react";
import { usePokemon } from "../hooks/usePokemon";
import PokemonCard from "../components/PokemonCard";
import { usePokemonList } from "../hooks/usePokemonList";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const generationRanges = {
    "": { limit: 10000, offset: 0 },
    "1": { limit: 151, offset: 0 },
    "2": { limit: 100, offset: 151 },
    "3": { limit: 135, offset: 251 },
    "4": { limit: 107, offset: 386 },
    "5": { limit: 156, offset: 493 },
    "6": { limit: 72, offset: 649 },
    "7": { limit: 88, offset: 721 },
    "8": { limit: 96, offset: 809 },
    "9": { limit: 120, offset: 905 },
};


function PokemonListItem({ name }) {
    const { pokemon, loading, error } = usePokemon(name);
    if (loading) {
        return <p>Loading {name}...</p>;
    }
    if (error) {
        return <p>Could not load {name}: {error}</p>;
    }
    return pokemon ? (
        <Link
            to = {`/details/${name}`}
            className="text-decoration-none"
        >
            <PokemonCard pokemon={pokemon} />
        </Link>
    ) : null;
}
// Show list of Pokémon with search and generation filter
function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchGeneration, setSearchGeneration] = useState("");
    const { limit, offset } = generationRanges[searchGeneration] ?? generationRanges[""];
    const { pokemonList, loading, error } = usePokemonList(limit, offset);
    const filteredPokemon = pokemonList.filter(({ name }) =>
        name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );

    return (
        <div style={{ backgroundColor: "#3B4CCA", minHeight: "100vh", padding: "2rem" }}>
            <h1 style={{ color: "#f0eee7" }}>
                Welcome to the Pokémon App!</h1>
            <h6 style={{ color: "#f0eee7" }}>
                Click on a Pokémon to view its details</h6>
            <SearchBar 
                onSearch={setSearchTerm}
                onGenerationChange={setSearchGeneration}
            />
            {loading && <p>Loading Pokémon...</p>}
            {error && <p>Error: {error}</p>}
            <div className="row g-3">
                {filteredPokemon.map(({ name }) => (
                    <div 
                        key={name}
                            className = "col-12 col-sm-6 col-md-4 col-lg-3">
                        <PokemonListItem name={name} />
                    </div>
                ))}
            </div>
            {!loading && !error && filteredPokemon.length === 0 && (
                <p>No Pokémon found.</p>
            )}
        </div>
    )
}

export default Home;