import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PercentageComplete } from '../../components'
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
                    <div className="scroll_up_bar"></div>
                    <h2>Information</h2> 
                    <p><b>Name:</b> {props.data.name}</p>
                    <p><b>Size:</b> {props.data.size}</p>
                    <p><b>Date created:</b> {props.data.date}</p>
                    <p><b>Type:</b> {props.data.type}</p>
                    <p><b>Department:</b> {props.data.department}</p>
                    <div className='users_container'>
                        <div className="user_wrapper">
                            <div className='user'>{props.data.user1[0]}</div>
                            <p>{props.data.user1}</p>
                            <div className="user_status">{props.data.user1_status}</div>
                        </div>
                        <div className="user_wrapper">
                            <div className='user'>{props.data.user2[0]}</div>
                            <p>{props.data.user2}</p>
                            <div className="user_status">{props.data.user2_status}</div>
                        </div>
                    </div>
                    <div className="stats_container">
                        <h1 id="stats_h1">Complete</h1>
                        <PercentageComplete difference={4} complete={71} />
                    </div>
                    <div className='details_btn'>
                        <Link to={'management/' + props.data.name}>
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1 }}
                            className='summary_btn'
                            >
                            See more details...
                        </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary