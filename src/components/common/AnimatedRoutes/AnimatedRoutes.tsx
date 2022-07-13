import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ContactPage from "../../../pages/ContactPage/ContactPage";
import AboutPage from "../../../pages/AboutPage/AboutPage";
import HomePage from "../../../pages/HomePage/HomePage";

function AnimatedRoutes() {
  const location = useLocation();

  return (    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;