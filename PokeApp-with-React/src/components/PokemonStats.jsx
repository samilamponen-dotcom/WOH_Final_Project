import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    } from "chart.js";
import { Radar } from "react-chartjs-2";

function PokemonStats({ pokemon }) {
    if (!pokemon || !pokemon.stats) return null;

    const data = pokemon.stats.map((stat) => ({
        stat: stat.stat.name,
        value: stat.base_stat,
    }));

    return (
        

export default PokemonStats;