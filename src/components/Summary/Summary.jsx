import React from 'react'
import { motion } from 'framer-motion'
import './Summary.css'

const Summary = (props) => {
    const handleClick = () => {
        props.toggle();
    };

    return (
        <div className='modal'>
            <div className="modal_content">
                <div className="close_bar">
                    <span className="close" onClick={handleClick()}>&times;</span>
                </div>
                <div className="summary_container">
                    <embed src={this.props.local_src} type="application/pdf" />
                </div>
                <div className="metadata_container">
                    <h2>Information</h2>
                    <p>Name: {this.props.name}</p>
                    <p>Size: {this.props.size}</p>
                    <p>Date created: </p>
                    <p>Type: </p>
                    <p>Department: </p>
                    <div>
                        <div>
                            <div></div>
                            <p>Reagan</p>
                            <div></div>
                            <p>Nojus</p>
                        </div>
                    </div>
                    <></>
                    <motion.button>See more details...</motion.button>
                </div>
            </div>
        </div>
    )
}

export default Summary