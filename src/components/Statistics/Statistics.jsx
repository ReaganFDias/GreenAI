import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faCheck,
  faXmark,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import {
  Summary,
  PercentageComplete
} from "../../components";
import ImageConfigPDF from '../../assets/Image_configuration.pdf'
import DUCSV from '../../assets/DUX776_2324.pdf'
import Policy from '../../assets/Data_protection_policy_23.pdf'
import "./Statistics.css";

const Statistics = () => {
  const [currentToggle, setToggle] = useState(false);
  const [currentDetails, setDetails] = useState([]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const updateDetails = (arr) => {
    setDetails(arr);
  };

  const toggleSummary = async () => {
    await delay(500);
    setToggle((current) => !current);
  };

  return (
    <div className="bottom_container">
      {currentToggle ? (
        <Summary toggle={setToggle} data={currentDetails} />
      ) : null}
      <PercentageComplete complete={67}/>
      <div className="recents_container">
        <h1 className="recents_h1">Recent</h1>
        <div className="recents_grid">
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => {
              toggleSummary();
              updateDetails({
                name: "Image_configuration.pdf",
                local_src: ImageConfigPDF,
                size: "2.3 GB",
                date: "Nov 28, 2023",
                type: "application/pdf",
                department: "Tech@Lilly",
                user1: "Reagan",
                user2: "Nojus",
                user1_status: <FontAwesomeIcon size="lg" icon={faXmark} style={{ color: "#ff1a1a" }} />,
                user2_status: <FontAwesomeIcon size="lg" icon={faCheck} style={{ color: "#00ff00" }} />
              });
            }}
            className="file_metadata_stats"
          >
            <FontAwesomeIcon
              size="2xl"
              icon={faFileLines}
              style={{ color: "#ff0000" }}
              className="file_icon"
            />
            <div className="icon_name_stats">
              <p>Image_configuration.pdf</p>
              <div className="img_group_stats">
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
            <div className="date_size_stats">
              <p>Nov 28, 2023</p>
              <p>2.3 GB</p>
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => {
                toggleSummary();
                updateDetails({
                  name: "Knowledge_article.docx",
                  size: "3 MB",
                  date: "Aug 15, 2006",
                  type: "application/docx",
                  department: "Environmental",
                  user1: "Khushi",
                  user2: "Elizabeth",
                  user1_status: <FontAwesomeIcon icon={faEllipsis} />,
                  user2_status: <FontAwesomeIcon icon={faEllipsis} />
                });
              }}
            className="file_metadata_stats">
            <FontAwesomeIcon
              size="2xl"
              icon={faFileLines}
              style={{ color: "#76a30c" }}
              className="file_icon"
            />
            <div className="icon_name_stats">
              <p>Knowledge_article.docx</p>
              <div className="img_group_stats">
                <FontAwesomeIcon icon={faEllipsis} />
                <FontAwesomeIcon icon={faEllipsis} />
              </div>
            </div>
            <div className="date_size_stats">
              <p>Aug 15, 2006</p>
              <p>3 MB</p>
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => {
                toggleSummary();
                updateDetails({
                  name: "Data_protection_policy_23.pdf",
                  local_src: Policy,
                  size: "1.6 GB",
                  date: "Sep 01, 2023",
                  type: "application/pdf",
                  department: "Legal",
                  user1: "Maisie",
                  user2: "Michelle",
                  user1_status: <FontAwesomeIcon size="lg" icon={faCheck} style={{ color: "#00ff00" }} />,
                  user2_status: <FontAwesomeIcon size="lg" icon={faCheck} style={{ color: "#00ff00" }} />
                });
              }}
            className="file_metadata_stats">
            <FontAwesomeIcon
              size="2xl"
              icon={faFileLines}
              style={{ color: "#d37a07" }}
              className="file_icon"
            />
            <div className="icon_name_stats">
              <p>Data_protection_23.pdf</p>
              <div className="img_group_stats">
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
            <div className="date_size_stats">
              <p>Sep 01, 2023</p>
              <p>1.6 GB</p>
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => {
                toggleSummary();
                updateDetails({
                  name: "DUX776_2324.csv",
                  local_Src: DUCSV,
                  size: "1.8 GB",
                  date: "Jan 13, 2021",
                  type: "application/pdf",
                  department: "R&D",
                  user1: "Reagan",
                  user2: "Maisie",
                  user1_status: <FontAwesomeIcon icon={faEllipsis} />,
                  user2_status: <FontAwesomeIcon icon={faXmark} style={{ color: "#ff1a1a" }} />
                });
              }}
            className="file_metadata_stats">
            <FontAwesomeIcon
              size="2xl"
              icon={faFileLines}
              style={{ color: "#008cff" }}
              className="file_icon"
            />
            <div className="icon_name_stats">
              <p>DUX776_2324.pdf</p>
              <div className="img_group_stats">
                <FontAwesomeIcon icon={faEllipsis} />
                <FontAwesomeIcon icon={faXmark} style={{ color: "#ff1a1a" }} />
              </div>
            </div>
            <div className="date_size_stats">
              <p>Jan 13, 2021</p>
              <p>1.8 GB</p>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
