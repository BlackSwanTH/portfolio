import React from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import { AnimatePresence } from "framer-motion";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
