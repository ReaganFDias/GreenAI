import React from 'react'
import profile_pic from '../../assets/profile_pic.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faFolder, faGear, faLeaf } from "@fortawesome/free-solid-svg-icons";
import './Sidebar.css'

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div>
                <h1 className='ai_name'>SPROUT</h1>
                <FontAwesomeIcon className='ai_name_icon' icon={faLeaf} />
            </div>
            <div className='user_container'>
                <div className='profile_container'>
                    <img src={profile_pic} className="profile_pic" alt=''></img>
                    <div className='status'></div>
                </div>
                <p className='username'>Reagan Dias</p>
            </div>
            <ul className='sidebar_opt'>
                <li>
                    <Link to="/">
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1 }}
                        className='sidebar_btn'
                    ><FontAwesomeIcon className='icon' icon={faBriefcase} />
                        Dashboard
                    </motion.button>
                    </Link>
                </li>
                <li>
                    <Link to="management">
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1 }}
                        className='sidebar_btn'
                    ><FontAwesomeIcon className='icon' icon={faFolder} />
                        Management
                    </motion.button>
                    </Link>
                </li>
                <li>
                    <Link to="settings">
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1 }}
                        className='sidebar_btn'
                    ><FontAwesomeIcon className='icon' icon={faGear} />
                        Settings
                    </motion.button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar