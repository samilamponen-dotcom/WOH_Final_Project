import {useState} from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");
    
    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Pokémon"
            />
            <button type="button">Search</button>
        </div>
    );
}

export default SearchBar;