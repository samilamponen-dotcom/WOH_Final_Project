export default function PokemonCard({pokemon}) {
    if (!pokemon) return null;

    return (
        <div className="card text-center">
            <img
                className="card-img-top"
                src={pokemon.sprites?.front_default ?? null}
                alt={pokemon.name}
            />
            <div className = "card-body">
                <h5 className = "card-title text-capitalize">{pokemon.name}</h5>
            </div>
        </div>
    )
}