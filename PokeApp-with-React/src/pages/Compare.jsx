import { useState } from "react";
import PokemonStats from "../components/PokemonStats";
import { usePokemonList } from "../hooks/usePokemonList";
import { usePokemon } from "../hooks/usePokemon";
import Select from "react-select";
import makeAnimated from "react-select/animated";


function Compare() {
    const [pokemon1, setPokemon1] = useState(null);
    const [pokemon2, setPokemon2] = useState(null);
    const [pokemon3, setPokemon3] = useState(null);
    const { pokemonList } = usePokemonList(10000,0);

    const pokemons = [
        usePokemon(pokemon1).pokemon,
        usePokemon(pokemon2).pokemon,
        usePokemon(pokemon3).pokemon,
        ].filter(Boolean);

    return (
        <div>
            <h1>Compare Pokémons</h1>
            <h5>Select up to three Pokémon to compare</h5>
            <Select
                closeMenuOnSelect={false}
                components={makeAnimated()}
                defaultValue={[pokemonList[0], pokemonList[1]]}
                isMulti
                options={pokemonList.map((pokemon) => ({
                    value: pokemon.name,
                    label: pokemon.name,
                }))}
                onChange={(selectedOptions) => {
                    const selectedPokemons = selectedOptions.map((option) => option.value);
                    setPokemon1(selectedPokemons[0]);
                    setPokemon2(selectedPokemons[1]);
                    setPokemon3(selectedPokemons[2]);
                }}
            />
            <PokemonStats pokemons={pokemons} />
        </div>
    );
}


export default Compare;