import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import folder_1 from '../../assets/folder_1.png'
import folder_2 from '../../assets/folder_2.png'
import folder_3 from '../../assets/folder_3.png'

import './Folders.css'

const Folders = () => {
    return (
        <div className='folders_container'>
            <div className='subtitle'>
                <h1 className='folder_title'>Manage your</h1>
                <h1 className='folder_title'>files</h1>
                <p className='desc'>Browse your files for sustainable management approach</p>
            </div>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img src={folder_1} alt="" />
                    <Carousel.Caption>
                        <h3>Profile 1</h3>
                        <p>p1</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src={folder_2} alt="" />
                    <Carousel.Caption>
                        <h3>Profile 2</h3>
                        <p>p2</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src={folder_3} alt="" />
                    <Carousel.Caption>
                        <h3>Profile 3</h3>
                        <p>p3</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Folders