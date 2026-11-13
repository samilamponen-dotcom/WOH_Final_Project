import {useState} from 'react';

function SearchBar({ onSearch , onGenerationChange }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchGeneration, setSearchGeneration] = useState("");
    
    return (
        <div className = "card p-3 mb-4" style={{ backgroundColor: "#FFCB05" }}>
            <h6>Search Pokémon by name:</h6>
            <div className="input-group mb-3">
                <input
                    className="form-control"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onSearch(searchTerm);
                        }
                    }}
                    placeholder="e.g. Pikachu, Charizard, Bulbasaur"
                />
                <button 
                    className="btn btn-primary"
                    type="button"
                    onClick={() => onSearch(searchTerm)}
                >
                    Search
                </button>
            </div>

            <h6>or show Pokémon from a specific generation:</h6>

            <select
                className="form-select"
                value={searchGeneration}
                onChange={(e) => {
                    const generation = e.target.value;

                    setSearchGeneration(generation);
                    onGenerationChange(generation);   
                }}
            >
                <option value="1">Generation I</option>
                <option value="2">Generation II</option>
                <option value="3">Generation III</option>
                <option value="4">Generation IV</option>
                <option value="5">Generation V</option>
                <option value="6">Generation VI</option>
                <option value="7">Generation VII</option>
                <option value="8">Generation VIII</option>
                <option value="9">Generation IX</option>
                <option value="">All Generations</option>
            </select>
        </div>
    );
}

export default SearchBar;