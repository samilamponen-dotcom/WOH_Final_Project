import {useState} from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");
    
    return (
        <div className = "input-group">
            <input
                classname="form-control"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Pokémon"
            />
            <button 
            className="btn btn-primary"
            type="button">Search</button>
        </div>
    );
}

export default SearchBar;