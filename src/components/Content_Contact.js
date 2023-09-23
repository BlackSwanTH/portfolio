import React from "react";
import "../index.css";
import Animatedbg from "./Animatedbg";

import line from "../imgs/line.png";
import instagram from "../imgs/instagram.png";
import facebook from "../imgs/facebook.png";
import whatsapp from "../imgs/whatsapp.png";
import mail from "../imgs/mail.png";
function Content_Contact() {
  return (
    <>
      <div className="box">
        <div className="inside-box">
          <img src={whatsapp} className="icon2"></img>
          <h3>PHONE</h3>
          <p className="s">+66 94 978 1661</p>
        </div>
        <div className="inside-box">
          <img src={facebook} className="icon2"></img>
          <h3>FACEBOOK</h3>
          <p className="s">Khemika Jetawattana</p>
        </div>
        <div className="inside-box">
          <img src={line} className="icon2"></img>
          <h3>LINE</h3>
          <p className="s">khemika7812</p>
        </div>
        <div className="inside-box">
          <img src={instagram} className="icon2"></img>
          <h3>INSTAGRAM</h3>
          <p className="s">k_khemij</p>
        </div>
        <div className="inside-box">
          <img src={mail} className="icon2"></img>
          <h3>E-MAIL</h3>
          <p className="s">Khemikajeta@gmail.com</p>
        </div>
      </div>

      <Animatedbg />
    </>
  );
}

export default Content_Contact;
