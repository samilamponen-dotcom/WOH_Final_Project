import { useEffect, useState } from "react";
import { fetchPokemonList } from '../api';
import { fetchPokemonByGeneration } from '../api';

//Hook for all generations
export function usePokemonList(limit = 100000, offset = 0) {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPokemonList = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await fetchPokemonList(limit, offset);
                setPokemonList(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getPokemonList();
    }, [limit, offset]);

    return { pokemonList, loading, error };
}
//Hook for a specific generation
export function usePokemonListByGeneration(generation) {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPokemonListByGeneration = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await fetchPokemonByGeneration(generation);
                setPokemonList(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getPokemonListByGeneration();
    }, [generation]);

    return { pokemonList, loading, error };
}