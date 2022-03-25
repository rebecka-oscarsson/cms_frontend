import React from "react";
import styles from "./Main.module.css";
import { Routes, Route } from "react-router-dom";
import { About, Start, Pricing, Contact } from "../index";

function Main() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default Main;
