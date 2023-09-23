import React from "react";
import ReactDOM from "react-dom/client";
import image from "../imgs/gncw7zmc.png";
import style from "../index.css";
import { motion } from "framer-motion";
import Animatedbg from "./Animatedbg";

function Content_Home() {
  return (
    <>
      <motion.div class="wrapper" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className="box_content">
          <p style={{ fontSize: "70px" }}>Hi, I'm Khemika Jetawattana</p>
          <p style={{ fontSize: "20px" }}>
            DO INTERNSHIPS AND WORK YOUR BUTT OFF TO LEARN AS MUCH AS YOU CAN
            AND PROVE YOURSELF
          </p>
          <div style={{ marginTop: "40px" }}>
            <button
              className="btn btn-danger"
              style={{
                borderRadius: "0px",
                transition: "transform 0.3s ease 0s",
              }}
            >
              Hire Me
            </button>
            <button
              className="btn btn-outline-danger"
              style={{
                borderRadius: "0px",
                marginLeft: "20px",
                color: "white",
                transition: "transform 0.3s ease 0s",
              }}
            >
              Latest Works
            </button>
          </div>
        </div>
        <img className="img-border-radius"></img>
      </motion.div>
      {/* animated background <<DO NOT DELETE THESE>> */}
      <Animatedbg />
      {/* animated background <<DO NOT DELETE THESE>> */}
    </>
  );
}
export default Content_Home;
