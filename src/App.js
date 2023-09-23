import React from "react";
import Header_bar from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import AnimatedRoutes from "./components/AnimatedRoutes";
function App() {
  return (
    <>
      <div>
        <Router>
          <AnimatedRoutes />
        </Router>
      </div>
    </>
  );
}

export default App;
