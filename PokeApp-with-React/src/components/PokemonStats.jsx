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

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

function PokemonStats({ pokemons }) {
    if (!pokemons?.length) return null;

    const labels = pokemons[0].stats.map((stat) => stat.stat.name);

    const colors = [
        { 
            border: "rgb(54,162,235)",
            background: "rgba(54,162,235,0.2)",
        },
        {
            border: "rgb(255,206,86)",
            background: "rgba(255,206,86,0.2)",
        }, 
        {
            border: "rgb(75,192,192)",
            background: "rgba(75,192,192,0.2)",
        }
    ];

    const datasets = pokemons.map((pokemon, index) => ({
        label: pokemon.name,
        data: pokemon.stats.map((stat) => stat.base_stat),
        borderColor: colors[index % colors.length].border,
        backgroundColor: colors[index % colors.length].background,
    }));

    const data = {
        labels,
        datasets,
    };

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Radar data={data} />
        </div>
    )
}

export default PokemonStats;