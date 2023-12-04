import React from "react";
import "./FileTemplate.css";

const FileTemplate = (props) => {
  return (
    <div className="workspace_ftemp">
      <div className="display">
        <embed src="" type="" />
      </div>
      <div className="file_details">
        <div className="metadata">
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
        </div>
        <div className="sprout_ai"></div>
      </div>
    </div>
  );
};

export default FileTemplate;
