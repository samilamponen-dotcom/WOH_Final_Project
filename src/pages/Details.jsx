import { useParams } from "react-router-dom";
import { usePokemon } from "../hooks/usePokemon";
import { useNavigate } from "react-router-dom";

// Show details of a single Pokémon
function Details() {
    const { name } = useParams();
    const { pokemon, loading, error } = usePokemon(name);

    const navigate = useNavigate();

    const typeColors ={
        normal: "#A8A77A",
        fire: "#EE8130",
        water: "#6390F0",
        electric: "#F7D02C",
        grass: "#7AC74C",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#A33EA1",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD",
    }
    
    if (!name) {
        return (
            <div>
                <h5>No Pokémon was selected</h5>
                <p>Please search and click a Pokémon at the homepage to show its details.</p>
                <button className="btn btn-primary" onClick={() => navigate("/")}>Go back to Homepage</button>
            </div>
        );
    }

    if (loading) {
        return <p>
            Loading {name}...</p>;
    }
    if (error) {
        return <p>
            Could not load {name}: {error}</p>;
    }

    if (!pokemon) {
        return <p> Could not find {name}.</p>;
    }

    return (
        <div className="container mt-4">
            <div className="card shadow-lg mx-auto" style={{ maxWidth: "800px", backgroundColor: typeColors[pokemon.types[0].type.name] ?? "#fff" }}>
                <div className="card-body text-center">
                    <h1 className = "card-title text-capitalize">{pokemon.name}</h1>
                    <h5 className = "card-subtitle mb-2 text-muted">ID: #{pokemon.id}</h5>
                    <img className="card-img-top mb-3"
                        src={pokemon.sprites?.other?.home?.front_default ?? pokemon.sprites?.front_default ?? null}
                        alt={pokemon.name}
                    />
                    <div className="row text-center mb-3">
                        <div className="col">
                            <h6>Height: </h6>
                            <p>{pokemon.height}</p>
                            <h6>Types:</h6>
                            <p className = "text-capitalize">{pokemon.types.map((type) => type.type.name).join(", ")}</p>
                        </div>
                        <div className="col">
                            <h6>Weight: </h6>
                            <p>{pokemon.weight}</p>
                            <h6>Abilities:</h6>
                            <p className = "text-capitalize">{pokemon.abilities.map((ability) => ability.ability.name).join(", ")}</p>
                        </div>
                    </div>
                    {pokemon.stats.map((stat) => (
                        <div key={stat.stat.name} className="mb-2">
                            <div className="d-flex justify-content-between">
                                <span>{stat.stat.name}</span>
                                <span>{stat.base_stat}</span>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${Math.min(stat.base_stat,150) / 150 * 100}%` }}
                                />
                            </div>
                        </div>
                        ))}
                    <button className="btn btn-primary" onClick={() => navigate("/")}>Go back to Homepage</button>
                </div>
            </div>
        </div>
    );
}

export default Details;