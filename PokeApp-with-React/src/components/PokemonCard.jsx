export default function PokemonCard({pokemon}) {
    if (!pokemon) return null;

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

    return (
        <div className="card text-center"
            style={{ backgroundColor: typeColors[pokemon.types[0].type.name] ?? "#fff" }}>
            
            <img
                className="card-img-top"
                src={pokemon.sprites?.front_default ?? null}
                alt={pokemon.name}
            />
            <div className = "card-body">
                <h6 className = "card-subtitle mb-2 text-muted">ID: #{pokemon.id}</h6>
                <h5 className = "card-title text-capitalize">{pokemon.name}</h5>
            </div>
        </div>
    )
}