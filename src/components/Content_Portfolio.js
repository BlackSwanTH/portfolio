import React from "react";
import Animatedbg from "./Animatedbg";
import img1 from "../imgs/port_imgs/port_1stHTML.png";
import img4 from "../imgs/port_imgs/port_WebAPI_front_back.png";
import img3 from "../imgs/port_imgs/port_UI.png";
import img2 from "../imgs/port_imgs/port_Assignment2.png";
import git from "../imgs/github.png";
import "../index.css";

function Content_Portfolio() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "20px",
        }}
      >
        <img
          src={git}
          style={{ height: "auto", width: "40px", marginRight: "15px" }}
        ></img>
        <a
          className="btn btn-danger"
          style={{
            borderRadius: "0px",
            transition: "transform 0.3s ease 0s",
          }}
          href="https://github.com/BlackSwanTH"
        >
          Link to my GitHub
        </a>
      </div>
      <div className="container">
        <h1 className="main-heading">Check Out My Works!</h1>
        <div className="content">
          <div className="slideshow">
            <button className="slide-btn slide-btn-1"></button>
            <button className="slide-btn slide-btn-2"></button>
            <button className="slide-btn slide-btn-3"></button>
            <button className="slide-btn slide-btn-4"></button>
            <div className="slideshow-wrapper">
              <div className="slide">
                <img className="slide-img" src={img1} />
              </div>
              <div className="slide">
                <img className="slide-img" src={img2} />
              </div>
              <div className="slide">
                <img className="slide-img" src={img3} />
              </div>
              <div className="slide">
                <img className="slide-img" src={img4} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Animatedbg />
    </>
  );
}

export default Content_Portfolio;
