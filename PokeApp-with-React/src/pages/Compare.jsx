import { useState } from "react";
import PokemonStats from "../components/PokemonStats";
import { usePokemonList } from "../hooks/usePokemonList";
import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";


function Compare() {
    //const [pokemon1, setPokemon1] = useState(null);
    //const [pokemon2, setPokemon2] = useState(null);
    const { pokemonList } = usePokemonList(10000,0);

    return (
        <div>
            <h1>Compare Pokémons</h1>
            <Select
                closeMenuOnSelect={false}
                components={makeAnimated()}
                isMulti
                options={pokemonList.map((pokemon) => ({
                    value: pokemon.name,
                    label: pokemon.name,
                }))}
            />
        </div>
    )

}

export default Compare;