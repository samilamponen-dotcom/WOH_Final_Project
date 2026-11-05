import { useEffect, useState } from "react";
import { fetchPokemonList } from '../api';
import { fetchPokemonByGeneration } from '../api';

export function usePokemonList(limit, offset) {
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