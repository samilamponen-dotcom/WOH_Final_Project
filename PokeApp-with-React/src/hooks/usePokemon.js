import { useEffect, useState } from "react";
import { fetchPokemonDetails } from '../api';

export function usePokemon(pokemonName) {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!pokemonName) {
            setPokemon(null);
            setLoading(false);
            setError(null);
            return;
        }
        
        const getPokemonDetails = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await fetchPokemonDetails(pokemonName);
                setPokemon(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };


        getPokemonDetails();
    }, [pokemonName]);

    return { pokemon, loading, error };
}