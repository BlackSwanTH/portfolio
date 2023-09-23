import React from "react";
import ReactDOM from "react-dom/client";
import style from "../index.css";
import background from "../imgs/gif1.gif";
import { Link } from "react-router-dom";

function Header_bar() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg"
        style={{
          height: "80px",
          backgroundImage: `url(${background})`,
        }}
      >
        <p
          className="navbar-brand"
          style={{ fontWeight: "bolder", fontSize: "40px" }}
        >
          My Portfolio
        </p>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          style={{ marginLeft: "970px" }}
        >
          <div class="navbar-nav">
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/about">
              About
            </Link>
            <Link className="nav-item nav-link" to="/portfolio">
              Portfolio
            </Link>
            <Link className="nav-item nav-link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header_bar;
