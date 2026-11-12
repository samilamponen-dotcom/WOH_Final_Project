import { useParams } from "react-router-dom";
import { usePokemon } from "../hooks/usePokemon";

// Show details of a single Pokémon
function Details() {
    const { name } = useParams();
    const { pokemon, loading, error } = usePokemon(name);
    
    if (!name) {
        return (
            <div>
                <h5>No Pokémon was selected</h5>
                <p>Please search and click a Pokémon at the homepage to show its details.</p>
                <button className="btn btn-primary" onClick={() => window.location.href = "/"}>Go back to Homepage</button>
            </div>
        );
    }

    if (loading) {
        return <p>Loading {name}...</p>;
    }
    if (error) {
        return <p>Could not load {name}: {error}</p>;
    }

    if (!pokemon) {
        return <p>Could not find {name}.</p>;
    }

    return (
        <div className="container mt-4">
            <div className="card shadow-lg mx-auto" style={{ maxWidth: "800px"}}>
                <div className="card-body text-center">
                    <h1 className = "card-title text-capitalize">{pokemon.name}</h1>
                    <h5 className = "card-subtitle mb-2 text-muted">ID: #{pokemon.id}</h5>
                    <img 
                        src={pokemon.sprites?.other?.home?.front_default ?? pokemon.sprites?.front_default ?? null}
                        alt={pokemon.name}
                    />
                    <div className="row text-center mb-3">
                        <div className="col">
                            <h6>Height </h6>
                            <p>Height: {pokemon.height}</p>
                        </div>
                        <div className="col">
                            <h6>Weight </h6>
                            <p>Weight: {pokemon.weight}</p>
                        </div>
                    </div>
                    <p>Types: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
                    <p>Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}</p>
                    <p>Stats:</p>
                    {pokemon.stats.map((stat) => (
                        <p key={stat.stat.name}>
                            {stat.stat.name}: {stat.base_stat}
                        </p>
                    ))}
                    <button className="btn btn-primary" onClick={() => window.location.href = "/"}>Go back to Homepage</button>
                </div>
            </div>
        </div>
    );
}

export default Details;