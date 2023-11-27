import React from 'react'
import './Home.css'
import {
    OverviewBar,
    Folders,
    Statistics
} from '../../components';

const Home = () => {
    return (
        <div className="workspace">
            <OverviewBar />
            <Folders />
            <Statistics />
        </div>
    )
}

export default Home