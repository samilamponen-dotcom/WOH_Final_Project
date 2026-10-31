import { fetchPokemonDetails } from "../api";
import { fetchPokemonList } from "../api";

function Home () {
    const pokeList = fetchPokemonList();

    return (
        <div>
            <h1>Welcome to the Pokémon App!</h1>
            pokeList.forEach(function(element){
                <>
                fetchPokemonDetails(element)
                </>
            });
        </div>
    )
}

export default Home;