import React, { useState } from "react";
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import sprout from '../../assets/mascot.jpg'
import { SproutPopup } from '../../components'
import "./FileTemplate.css";

const FileTemplate = (props) => {
  return (
    <div className="workspace_ftemp">
      <div className="display">
        <embed src={props.data.local_src} type={props.data.type} />
      </div>
      <div className="file_details">
        <div className="metadata">
          <h2>Information</h2>
            <p><b>Name:</b> {props.data.name}</p>
            <p><b>Size:</b> {props.data.size}</p>
            <p><b>Date created:</b> {props.data.date}</p>
            <p><b>Type:</b> {props.data.type}</p>
            <p><b>Department:</b> {props.data.department}</p>
        </div>
        <div className='users_container'>
            <div className="user_wrapper">
                <div className='user'>{props.data.user1[0]}</div>
                <p>{props.data.user1}</p>
                <div className="user_status">{props.data.user1_status}</div>
            </div>
            <div className="btn_wrapper">
              <motion.button className='btn_status' whileHover={{ scale: 1.2 }}><FontAwesomeIcon size="2xl" icon={faXmark} style={{ color: "#ff1a1a" }} /></motion.button>
              <motion.button className='btn_status' whileHover={{ scale: 1.2 }}><FontAwesomeIcon size="2xl" icon={faEllipsis} style={{ color: "#ffffff" }} /></motion.button>
              <motion.button className='btn_status' whileHover={{ scale: 1.2 }}><FontAwesomeIcon size="2xl" icon={faCheck} style={{ color: "#00ff00" }} /></motion.button>
            </div>
        </div>
        <div className="sprout_ai">
          <div className='reasons'>
            <h3>Pros</h3>
            <ul>
              <li>Relevance</li>
              <li>Contains documentation of VM Configurations</li>
              <li>Disaster recovery</li>
              <li>Audit and compliance</li>
            </ul>
          </div>
          <div className='reasons'>
            <h3>Cons</h3>
            <ul>
              <li>Storage optimisation</li>
              <li>Change in future infrastructure</li>
              <li>Redundancy</li>
              <li>Security concerns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileTemplate;
