import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    return (
        <div className='search_container'>
            <input type='text' placeholder='Search something...' onChange={handleChange} value={searchInput} className='searchbar_'></input>
            <div className='search_icon_'>
                <FontAwesomeIcon icon={faSearch} size='1x'/>
            </div>
        </div>
    )
}

export default SearchBar