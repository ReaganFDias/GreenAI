import React, { useState } from "react";
import { motion } from 'framer-motion'
import sprout from '../../assets/sprout.png'
import "./SproutPopup.css";

const SproutPopup = (props) => {
    // const handleClick = () => {
    //    props.toggle()
    // }

  return (
    <div className="sprout_container">
      <div className="emission_statement">
        <p>Congrats! You reduced carbon emissions by 0.5%</p>
      </div>
      
      <img src={sprout} alt="" />
    </div>
  );
};

export default SproutPopup;
