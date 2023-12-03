import React from 'react'
import { motion } from 'framer-motion'
import './Summary.css'

const Summary = (props) => {
    const handleClick = () => {
        props.toggle()
    }

    return (
        <div className='modal'>
            <div className="modal_content">
                <div className="close_bar">
                    <span className="close" onClick={handleClick}>&times;</span>
                </div>
                <div className="summary_container">
                    <embed src={props.data.local_src} type={props.data.type} />
                </div>
                <div className="metadata_container">
                    <h2>Information</h2>
                    <p>Name: {props.data.name}</p>
                    <p>Size: {props.data.size}</p>
                    <p>Date created: {props.data.date}</p>
                    <p>Type: {props.data.type}</p>
                    <p>Department: {props.data.department}</p>
                    <div>
                        <div>
                            <div></div>
                            <p>{props.data.user1}</p>
                            <div></div>
                            <p>{props.data.user2}</p>
                        </div>
                    </div>
                    <div>Percentage</div>
                    <motion.button>See more details...</motion.button>
                </div>
            </div>
        </div>
    )
}

export default Summary