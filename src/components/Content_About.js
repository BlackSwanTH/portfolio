import React from "react";
import image from "../imgs/me4.jpg";
import image1 from "../imgs/html.png";
import image2 from "../imgs/css-3.png";
import image3 from "../imgs/js.png";
import image4 from "../imgs/java.png";
import image5 from "../imgs/python.png";
import image6 from "../imgs/sql-server.png";
import "../index.css";
import { motion } from "framer-motion";
import Animatedbg from "./Animatedbg";
export default function Content_About() {
  return (
    <>
      <motion.div
        style={{ display: "flex" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          style={{
            width: "50%",
            // borderRight: "5px solid red",
            marginTop: "10px",
          }}
        >
          <div>
            <img
              src={image}
              style={{
                height: "auto",
                width: "250px",
                margin: "30px",
                marginRight: "0%",
                border: "5px solid white",
              }}
              id="img_me"
            ></img>
            <h1
              style={{
                padding: "10px",
                position: "absolute",
                left: "280px",
                top: "120px",
              }}
            >
              ABOUT
            </h1>
            <div
              style={{
                border: "3px solid white",
                width: "300px",
                height: "150px",
                borderRight: "0px",
                position: "absolute",
                left: "280px",
                top: "180px",
                color: "white",
                padding: "10px",
                fontSize: "15px",
                lineHeight: "30px",
              }}
            >
              <div>
                <span style={{ color: "gray" }}>WHO // </span>
                <span>KHEMIKA JETAWATTANA</span>
              </div>
              <div>
                <span style={{ color: "gray" }}>WHERE // </span>
                <span>RAYONG, THAILAND</span>
              </div>
              <div>
                <span style={{ color: "gray" }}>WHEN // </span>
                <span>2001 - PRESENT</span>
              </div>
              <div>
                <span style={{ color: "gray" }}>WHY // </span>
                <span>PASSION</span>
              </div>
            </div>
            <div style={{ marginLeft: "30px", marginRight: "30px" }}>
              <h1
                style={{
                  borderLeft: "5px solid green",
                  paddingLeft: "10px",
                }}
              >
                PERSONAL
              </h1>
              <p>
                <span className="tab"></span>I learn better from an actual
                experience by directly participate in any activities or
                opportunities by myself or by directly having conversations with
                the knowledge giver. These are some of the qualities that
                defined my learning methods, I have an introverted personality,
                which means I observe more and tend to find some specific topics
                or some detail information that you may need. I am also very
                organized and don't do thing without knowing all the options.
              </p>
              <p>
                <span className="tab"></span>Some challenges for me will be
                working with people who are dependable on others or usually
                withold their ideas until the end of the conversation in a place
                or classroom. I also have little tolerance for disrepectful
                people, but I like to think that I am an open-minded and
                no-judging person. It is my job to understand the personalities
                of others and work around it.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            top: "120px",
            position: "absolute",
            left: "50%",
            marginLeft: "30px",
            padding: "10px",
          }}
        >
          <h1
            style={{
              borderLeft: "5px solid green",
              paddingLeft: "10px",
            }}
          >
            SKILLS
          </h1>
          <table style={{ marginBottom: "30px" }}>
            <tr>
              <td>HTML</td>
              <td>
                <img
                  src={image1}
                  style={{ height: "auto", width: "20px" }}
                ></img>
              </td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>
                <img
                  src={image2}
                  style={{ height: "auto", width: "26px" }}
                ></img>
              </td>
            </tr>
            <tr>
              <td>Javascript</td>
              <td>
                <img
                  src={image3}
                  style={{ height: "auto", width: "20px" }}
                ></img>
              </td>
            </tr>
            <tr>
              <td>Java</td>
              <td>
                <img
                  src={image4}
                  style={{ height: "auto", width: "20px" }}
                ></img>
              </td>
            </tr>
            <tr>
              <td>Python</td>
              <td>
                <img
                  src={image5}
                  style={{ height: "auto", width: "20px" }}
                ></img>
              </td>
            </tr>
            <tr>
              <td>SQL</td>
              <td>
                <img
                  src={image6}
                  style={{ height: "auto", width: "20px" }}
                ></img>
              </td>
            </tr>
          </table>
          <h1
            style={{
              borderLeft: "5px solid green",
              paddingLeft: "10px",
            }}
          >
            FRAMEWORK
          </h1>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "30px",
              lineHeight: "30px",
            }}
          >
            <li>React Framework</li>
            <li>Django</li>
            <li>ASP.NET</li>
          </ul>
          <h1
            style={{
              borderLeft: "5px solid green",
              paddingLeft: "10px",
            }}
          >
            TOOLS
          </h1>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "30px",
              lineHeight: "30px",
            }}
          >
            <li>ReactJs</li>
            <li>MariaDB</li>
            <li>Postman</li>
            <li>GitHub</li>
          </ul>
        </div>
      </motion.div>

      {/* animated background <<DO NOT DELETE THESE>> */}
      <Animatedbg />
      {/* animated background <<DO NOT DELETE THESE>> */}
    </>
  );
}
