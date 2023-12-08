import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faCheck,
  faXmark,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import './FoldersManagement.css'

const FoldersManagement = () => {
    return (
        <div className='workspace_management'>
            <h1>Manage your files</h1>
            <div className="file_list">
                <Link to='Image_configuration.pdf'>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="file_metadata"
                    >
                        <FontAwesomeIcon
                        className="file_icon"
                        size="2xl"
                        icon={faFileLines}
                        style={{ color: "#ff0000" }}
                        />
                        <div className="icon_name">
                        <p>Image_configuration.pdf</p>
                        <div className="img_group">
                            <FontAwesomeIcon
                            size="2xl"
                            icon={faXmark}
                            style={{ color: "#ff1a1a" }}
                            />
                            <FontAwesomeIcon
                            size="2xl"
                            icon={faCheck}
                            style={{ color: "#00ff00" }}
                            />
                        </div>
                        </div>
                        <div className="date_size">
                        <p>Nov 28, 2023</p>
                        <p>2.3 GB</p>
                        </div>
                    </motion.button>
                </Link>
                <Link to='Knowledge_article.docx'>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="file_metadata">
                        <FontAwesomeIcon
                        className="file_icon"
                        size="2xl"
                        icon={faFileLines}
                        style={{ color: "#76a30c" }}
                        />
                        <div className="icon_name">
                        <p>Knowledge_article.pdf</p>
                        <div className="img_group">
                            <FontAwesomeIcon icon={faEllipsis} />
                            <FontAwesomeIcon icon={faEllipsis} />
                        </div>
                        </div>
                        <div className="date_size">
                        <p>Aug 15, 2006</p>
                        <p>3 MB</p>
                        </div>
                    </motion.button>
                </Link>
                <Link to='Data_protection_policy_23.pdf'>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="file_metadata">
                        <FontAwesomeIcon
                        className="file_icon"
                        size="2xl"
                        icon={faFileLines}
                        style={{ color: "#d37a07" }}
                        />
                        <div className="icon_name">
                        <p>Data_protection_policy_23.pdf</p>
                        <div className="img_group">
                            <FontAwesomeIcon
                            size="2xl"
                            icon={faCheck}
                            style={{ color: "#00ff00" }}
                            />
                            <FontAwesomeIcon
                            size="2xl"
                            icon={faCheck}
                            style={{ color: "#00ff00" }}
                            />
                        </div>
                        </div>
                        <div className="date_size">
                        <p>Sep 01, 2023</p>
                        <p>1.6 GB</p>
                        </div>
                    </motion.button>
                </Link>
                <Link to='DUX776_2324.csv'>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="file_metadata">
                        <FontAwesomeIcon
                        className="file_icon"
                        size="2xl"
                        icon={faFileLines}
                        style={{ color: "#008cff" }}
                        />
                        <div className="icon_name">
                        <p>DUX776_2324.pdf</p>
                        <div className="img_group">
                            <FontAwesomeIcon icon={faEllipsis} />
                            <FontAwesomeIcon icon={faXmark} style={{ color: "#ff1a1a" }} />
                        </div>
                        </div>
                        <div className="date_size">
                        <p>Jan 13, 2021</p>
                        <p>1.8 GB</p>
                        </div>
                    </motion.button>
                </Link>
            </div>
        </div>
    )
}

export default FoldersManagement