import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import AnimatedRoutes from "./components/AnimatedRoutes";
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
