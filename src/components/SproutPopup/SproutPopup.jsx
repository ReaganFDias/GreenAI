import React, { useState } from "react";
import { motion } from 'framer-motion'
import sprout from '../../assets/sprout.png'
import "./SproutPopup.css";

const SproutPopup = (props) => {
    const handleClick = () => {
        props.toggle()
    }

  return (
    <div className="modal_sprout">
        <div className="modal_content_sprout">
            <img src={sprout} alt="" />
        </div>
    </div>
  );
};

export default SproutPopup;
