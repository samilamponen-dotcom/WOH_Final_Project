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
    const { pokemonList, loading, error } = usePokemonList();

    return (
        <div>
            <h1>Welcome to the Pokémon App!</h1>
            <SearchBar />
            {loading && <p>Loading Pokémon...</p>}
            {error && <p>Error: {error}</p>}
            <div className="row g-3">
                {pokemonList.map(({ name }) => (
                    <div className = "col-12 col-sm-6 col-md-4 col-lg-3">
                        <PokemonListItem key={name} name={name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;