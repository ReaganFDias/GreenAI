import React from "react";
import sprout from '../../assets/sprout.png'
import "./SproutPopup.css";

const SproutPopup = () => {

  return (
    <div className="sprout_container">
      <div className="emission_statement">
        <p>Congrats! You helped Lilly lower carbon emissions</p>
      </div>
      
      <img src={sprout} alt="" />
    </div>
  );
};

export default SproutPopup;
