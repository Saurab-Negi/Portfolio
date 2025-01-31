import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/node.png";
import Fiverr from "../../img/react.png";
import Amazon from "../../img/js.png";
import Shopify from "../../img/express.png";
import Facebook from "../../img/mongo.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Tech stack used in
          </span>
          <span>Projects</span>
          <span className="tech-stack">
            <h4>Frontend:</h4> 
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind</li>
            </ul>
            <h4>Backend:</h4>
            <ul>
              <li>Express</li>
              <li>Node</li>
            </ul>
            <h4>Database:</h4>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img className="node" src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="react" src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="js" src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img className="express" src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="mongo" src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
