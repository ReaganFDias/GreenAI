import React, { useState } from 'react'
import { motion } from 'framer-motion';
import './Settings.css'

const Settings = () => {
    const [button1Active, setButton1Active] = useState(false);
    const [button2Active, setButton2Active] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [isOn, setIsOn] = useState(false);
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    }

    // Function to toggle the state of Button 1
    const toggleButton1 = () => {
        setButton1Active(!button1Active);
    };

    // Function to toggle the state of Button 2
    const toggleButton2 = () => {
        setButton2Active(!button2Active);
    };

    const toggleSwitch = () => setIsOn(!isOn);

    const handleButtonClick = () => {
        setButtonClicked(!buttonClicked);
    }

    return (
        <div className="settings-container">
            <h1>Settings</h1>
            <motion.button
                className={`toggle-button ${buttonClicked ? 'active' : ''}`}
                whileTap={{ backgroundColor: '#00ff00', scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                onClick={handleButtonClick}
            >
                {buttonClicked ? 'Copied!' : 'Copy linked address'}
            </motion.button>
            <motion.button
                className={`toggle-button ${button2Active ? 'active' : ''}`}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                onClick={toggleButton2}
            >
                Do not disturb
            </motion.button>
            <div className="vpn_switch">
                <p>VPN</p>
                <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
                <   motion.div className="handle" layout transition={spring} />
                </div>
            </div>
            <motion.button 
                className={`toggle-button ${button1Active ? 'active' : ''}`}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                onClick={toggleButton1}
            >
                Save changes
            </motion.button>
        </div>
    )
}

export default Settings