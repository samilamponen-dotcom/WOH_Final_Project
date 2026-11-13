import { useState } from "react";
import PokemonStats from "../components/PokemonStats";
import { usePokemonList } from "../hooks/usePokemonList";
import { usePokemon } from "../hooks/usePokemon";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const MaxSelections = 3;

function Compare() {
    const [pokemon1, setPokemon1] = useState(null);
    const [pokemon2, setPokemon2] = useState(null);
    const [pokemon3, setPokemon3] = useState(null);
    const { pokemonList } = usePokemonList(10000,0);
    const selectedPokemon = [pokemon1, pokemon2, pokemon3].filter(Boolean);

    const pokemons = [
        usePokemon(pokemon1).pokemon,
        usePokemon(pokemon2).pokemon,
        usePokemon(pokemon3).pokemon,
        ].filter(Boolean);

    function handleChange(options) {
        const selectedNames = (options ?? [])
            .slice(0, MaxSelections)
            .map((option) => option.value);

        setPokemon1(selectedNames[0] ?? null);
        setPokemon2(selectedNames[1] ?? null);
        setPokemon3(selectedNames[2] ?? null);
    }

    return (
        <div >
            <h1>Compare Pokémons</h1>
            <h5>Select up to three Pokémon to compare</h5>
            <Select
                closeMenuOnSelect={false}
                components={makeAnimated()}
                isMulti
                options={pokemonList.map((pokemon) => ({
                    value: pokemon.name,
                    label: pokemon.name,
                }))}
                isOptionDisabled={(option) =>
                    selectedPokemon.length >= MaxSelections &&
                    !selectedPokemon.includes(option.value)
                }
                onChange={handleChange}
            />
            <PokemonStats pokemons={pokemons} />
        </div>
    );
}


export default Compare;