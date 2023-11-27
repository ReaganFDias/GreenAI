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
            <input type='text' placeholder='Search something...' onChange={handleChange} value={searchInput} className='searchbar'></input>
            <FontAwesomeIcon className='search_icon' icon={faSearch} size='l' />
        </div>
    )
}

export default SearchBar