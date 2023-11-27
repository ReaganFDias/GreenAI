import React from 'react'
import './OverviewBar.css'
import { SearchBar } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const OverviewBar = () => {
    return (
        <div className='overview_container'>
            <div className='overview_title'>
                <h1>Overview</h1>
                <div id='data_size'>185 GB</div>
            </div>
            <SearchBar />
            <div className='icons'>
                <button className='icon_container'>
                    <FontAwesomeIcon size='xl' icon={faBell} />
                </button>
                <button className='icon_container'>
                    <FontAwesomeIcon size='xl' icon={faRightFromBracket} />
                </button>
            </div>
        </div>
    )
}

export default OverviewBar