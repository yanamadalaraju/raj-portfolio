import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Navbar */}
      <nav className="navbar">
        <h1>My Portfolio</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </nav>

      {/* Sections */}
      <section id="home" className="section">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Welcome to My Portfolio
        </motion.h2>
      </section>

      <section id="about" className="section">
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
          <h2>About Me</h2>
          <p>I am a passionate Fullstack Developer.</p>
        </motion.div>
      </section>

      <section id="skills" className="section">
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
          <h2>Skills</h2>
          <p>React, JavaScript, Python, Django, CSS</p>
        </motion.div>
      </section>

      <section id="projects" className="section">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          <h2>Projects</h2>
          <p>Stock Management System, Image Classifier, Chatbot</p>
        </motion.div>
      </section>

      <section id="contact" className="section">
        <motion.div initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
          <h2>Contact</h2>
          <p>Email: example@example.com</p>
        </motion.div>
      </section>
    </div>
  );
};

export default App;
