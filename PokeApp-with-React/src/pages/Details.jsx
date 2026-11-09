import { useParams } from "react-router-dom";
import { usePokemon } from "../hooks/usePokemon";
import PokemonStats from "../components/PokemonStats";

// Show details of a single Pokémon
function Details() {
    const { name } = useParams();
    const { pokemon, loading, error } = usePokemon(name);

    if (loading) {
        return <p>Loading {name}...</p>;
    }
    if (error) {
        return <p>Could not load {name}: {error}</p>;
    }
    if (!pokemon) {
        return <p>Pokémon not found.</p>;
    }

    return (
        <div>
            <h1 className = "card-title text-capitalize">{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Types: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
            <p>Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}</p>
            <p>Stats:</p>
            {pokemon.stats.map((stat) => (
                <p key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                </p>
            ))}
            <PokemonStats pokemon={pokemon} />
        </div>
    );
}

export default Details;