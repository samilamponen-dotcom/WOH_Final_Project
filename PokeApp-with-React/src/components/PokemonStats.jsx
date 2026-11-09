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

function PokemonStats({ pokemon }) {
    if (!pokemon || !pokemon.stats) return null;

    const data = {
        labels: pokemon.stats.map((stat) => stat.stat.name),
        datasets: [
            {
                label: pokemon.name,
                data: pokemon.stats.map((stat) => stat.base_stat),
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                pointBackgroundColor: "rgba(255, 99, 132, 1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255, 99, 132, 1)",
            },
        ],
    };

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Radar data={data} />
        </div>
    )
}

export default PokemonStats;