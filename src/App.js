import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

import { Typewriter } from "react-simple-typewriter";
import {
  FaSun,
  FaMoon,
  FaBox,
  FaRobot,
  FaDatabase,
  FaEye,
  FaGithub,
  FaDownload,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./App.css";
import "./Navbar.css";
import "./Sections.css";
import "./About.css";
import "./Skills.css";

import axios from "axios";
import "./Contact.css";
import profilePic from "../src/images/DSC_7209.JPG";
import gif from "../src/images/animated.gif";
import profilePic1 from "../src/images/images.jpeg";
import profilePic2 from "../src/images/images (1).jpeg";
import profilePic3 from "../src/images/frontend.jpg";
import profilePic4 from "../src/images/program.jpg";
// import profilePic5 from "../src/images/side.avif";
import stockImage from "../src/images/Stock_management.jpg";
import chatbottImage from "../src/images/Ai_chat_bot.png";
import databaseeImage from "../src/images/Ai_db_agent.jpg";
import webdevelopment from "../src/images/webdevelopment.jpg";
import fullstackdevelopment from "../src/images/full-stack-development.jpg";
import dataAnalyst from "../src/images/data_analysts.jpg";
import mysql from "../src/images/mysql_sql.avif";
import "./Projects.css";
import "./Certifications.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  const [popupType, setPopupType] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.title = "🚀 Portfolio | Rajesh";
  }, []);

  useEffect(() => {
    const skillsSection = document.querySelector("#skills");
    const stardustCursor = document.createElement("div");
    stardustCursor.className = "stardust-cursor";
    document.body.appendChild(stardustCursor);

    const moveCursor = (e) => {
      if (skillsSection.contains(e.target)) {
        stardustCursor.style.left = `${e.clientX}px`;
        stardustCursor.style.top = `${e.clientY}px`;
        stardustCursor.style.opacity = "1";
      } else {
        stardustCursor.style.opacity = "0";
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(stardustCursor);
    };
  }, []);
 
  const skillsData = [
    {
      category: "Frontend Development",
      skills: ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
      icon: "🎨",
      image: profilePic1, // Imported image
    },
    {
      category: "Backend Development",
      skills: ["Django", "Django REST Framework", "FastAPI", "Node.js"],
      icon: "🛠️",
      image: profilePic2, // Imported image
    },
    {
      category: "Database & Storage",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
      icon: "🗄️",
      image: profilePic3, // Imported image
    },

    {
      category: "Software & Others",
      skills: ["AutoCAD", "STAAD Pro", "VS Code", "Linux"],
      icon: "💻",
      image: profilePic4, // Imported image
    },
  ];

  

  const projects = [
    {
      title: "Stock Management System",
      description: "Built with React, Bootstrap, and Node.js for efficient inventory tracking. (Admin: admin@gmail.com | Password: admin@123, User: rajesh@gmail.com |Password: 456)",
      image: stockImage,
      link: "http://175.29.21.7:81", // Direct external link
      icon: <FaBox size={24} color=" #ff4757" />,
    },
    {
      title: "AI Chatbot",
      description:
        "An interactive AI-powered chatbot for customer support and automation.",
      image: chatbottImage,
      link: "/projects/chatbot-ai",
      icon: <FaRobot size={24} color="#1e90ff" />,
    },
    {
      title: "AI Database Agent",
      description:
        "A smart AI-based database management system for optimized querying.",
      image: databaseeImage,
      link: "/projects/ai-database-agent",
      icon: <FaDatabase size={24} color="#ffa502" />,
    },
  ];

  useEffect(() => {
    const cursor = document.querySelector(".cursor-effect");
    const follower = document.querySelector(".cursor-follower");

    document.addEventListener("mousemove", (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;

      follower.style.left = `${event.clientX}px`;
      follower.style.top = `${event.clientY}px`;
    });
  }, []);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("Sending...");

    try {
      const response = await axios.post(
        "http://44.202.90.100:5000/send-email",
        formData
      );
      setStatusMessage("✅ " + response.data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Clear message after 3 seconds
      setTimeout(() => setStatusMessage(""), 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  const certifications = [
    {
      id: 1,
      title: "Python Fullstack Developer",
      provider: "Itvedant",
      image: fullstackdevelopment,
      link: "/certifications/PythonCertificate.jpg",
      description: "Certified as a Python Fullstack Developer with expertise in React, Node.js, and MySQL.",
    },
    {
      id: 2,
      title: "Machine Learning Data Analyst",
      provider: "Amazon",
      image: dataAnalyst,
      link: "/certifications/ml-data-analyst.pdf",
      description: "Gained knowledge in ML data analysis and AI-driven solutions at Amazon.",
    },
    {
      id: 3,
      title: "Web Development",
      provider: "IT Vedant",
      image: webdevelopment,
      link: "/certifications/webdevelopment-cert.jpg",
      description: "Completed an in-depth web development course covering HTML, CSS, JavaScript, and React.",
    },
    {
      id: 4,
      title: "My SQl",
      provider: "IT Vedant",
      image: mysql,
      link: "/certifications/Mysql.jpg",
      description: "Completed a comprehensive SQL course covering database design, queries, normalization, and optimization techniques.",
    },
  ];
  
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Rajesh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
    <Helmet>
        <title>🚀 Portfolio | Your Name</title>
        <link rel="icon" type="image/png" href="/apple-touch-icon.png" />
      </Helmet>
    
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Cursor Effect */}
      <div className="cursor-effect"></div>
      <div className="cursor-follower"></div>

      {/* Navbar */}
      <nav className={`navbar ${darkMode ? "dark-mode" : ""}`}>
        {/* Logo */}
        <motion.h1
          className="logo"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
        >
          <motion.span
            className="logo-r"
            initial={{ opacity: 0, x: -30, rotate: -15 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            R
          </motion.span>
          <motion.span
            className="logo-ajesh"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            ajesh
          </motion.span>
        </motion.h1>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <AnimatePresence>
          {(menuOpen || window.innerWidth > 768) && (
            <motion.ul
              className={`nav-links ${menuOpen ? "open" : ""}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              {["Home", "About", "Skills", "Projects", "Contact","Certifications"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Dark Mode Toggle */}
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <FaSun size={24} color="#fdd835" />
          ) : (
            <FaMoon size={24} color="#4a90e2" />
          )}

        </button>
      </nav>

      {/* Sections */}
      {/* Home Section */}
      <section id="home" className="section">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="home-container"
      >
        {/* Desktop View */}
        <div className="desktop-view">
          <motion.h2 className="home-title">
            Hi, I'm{" "}
            <span className="highlight-1">
              <Typewriter
                words={["Rajesh"]}
                loop={false}
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
                cursor
                cursorStyle="|"
              />
            </span>
            <img
              src="https://onlinegiftools.com/images/examples-onlinegiftools/jump-hello-transparent.gif"
              alt="Welcome"
              className="welcome-gif"
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="home-subtitle"
          >
            A <span className="highlight">Python Full Stack Developer</span>{" "}
            passionate about crafting scalable web applications with seamless
            user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="button-container"
          >
            <button onClick={handleDownload} className="cta-button primary">
              <FaDownload /> Download Resume
            </button>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
              <FaEye /> View Resume
            </a>
          </motion.div>
        </div>

        {/* Mobile View - Professional & Elegant */}
        <div className="mobile-view">
          <motion.div className="mobile-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <motion.h1 className="mobile-title">
              Hello, I'm <span className="highlight">Rajesh</span>
            </motion.h1>
            <motion.p className="mobile-subtitle">
              A <span className="highlight">Python Full Stack Developer</span> passionate about building elegant and efficient web solutions.
            </motion.p>
            <motion.img 
              src="https://onlinegiftools.com/images/examples-onlinegiftools/jump-hello-transparent.gif" 
              alt="Welcome"
              className="mobile-welcome-gif"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.div className="mobile-buttons" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <button onClick={handleDownload} className="cta-button primary">
                <FaDownload /> Download Resume
              </button>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
                <FaEye /> View Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Effects */}
      <div className="floating-shapes"></div>
      <div className="floating-glow"></div>
      <div className="shooting-star"></div>
    </section>

      <section id="about" className="section">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="about-container"
        >
          {/* Profile Image & About Text */}
          <div className="about-content">
            <motion.img
              src={profilePic}
              alt="Profile"
              className="profile-image"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                boxShadow: "0px 0px 20px rgba(255, 91, 91, 0.8)",
              }}
            />
            <div className="about-text">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="animated-title"
              >
                About Me
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                I am a passionate{" "}
                <span className="highlight">Fullstack Developer</span> with
                expertise in **React, JavaScript, Python, Django, and modern
                UI/UX** principles. I love crafting **scalable web
                applications** and seamless user experiences...
              </motion.p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="info-cards">
            <motion.div
              className="info-card"
              whileHover={{ scale: 1.1, backgroundColor: "#ff914d" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setPopupType("personal")}
            >
              Personal Info 🏡
            </motion.div>
            <motion.div
              className="info-card"
              whileHover={{ scale: 1.1, backgroundColor: "#4d91ff" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setPopupType("education")}
            >
              Education 🎓
            </motion.div>
          </div>
        </motion.div>

        {/* Popup Modal */}
        <AnimatePresence>
          {popupType && (
            <motion.div
              className="popup-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPopupType(null)}
            >
              <motion.div
                className="popup-content"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3>
                  {popupType === "personal"
                    ? "Personal Info"
                    : "Education Details"}
                </h3>
                <p>
                  {popupType === "personal"
                    ? "📍 Location: India 🌍 | 📞 Contact: +91 9346843156 | ✉️ Email: rajeshyanamadala2000@gmail.com"
                    : "🎓 B.Tech in Civil Engineering (2023) | Python Fullstack Developer Certification"}
                </p>
                <button onClick={() => setPopupType(null)}>Close</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section id="skills" className="section">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="skills-title"
  >
     Skills & Tech Stack 🚀
  </motion.h2>

  <div className="skills-wrapper">
  {window.innerWidth <= 768 && (
  <motion.img
    src={gif} // Replace with actual GIF URL
    alt="Skills Animation"
    className="skills-gif"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  />
)}




    <div className="skills-container">
      {skillsData.map((category, index) => (
        <motion.div
          key={index}
          className="skill-card"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.6)",
          }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <h3 className="skill-category">
            {category.icon} {category.category}
          </h3>
          <ul>
            {category.skills.map((skill, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.1, color: "#ff4757" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>

          {/* Skill Image */}
          <motion.img
            src={category.image} // Use imported images directly
            alt={category.category}
            className="skill-image"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
    <div className="scroll-hint">
  <span>⬅️ Scroll to see skills ➡️</span>
</div>
  </div>
</section>


      <section id="projects" className="projects-section">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="projects-title"
        >
          🚀  Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.05,
                rotateX: 10,
                boxShadow: "0px 10px 30px rgba(255, 215, 0, 0.7)",
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="project-card-inner">
                {/* Front Side (Image) */}
                <div className="project-card-front">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <h3>
                    {project.icon} {project.title}
                  </h3>
                </div>

                {/* Back Side (Details) */}
                <div className="project-card-back">
                  <p>{project.description}</p>
                  <motion.a
                    href={project.link}
                    className="project-button"
                    target={
                      project.link.startsWith("http") ? "_blank" : "_self"
                    } // Open external links in a new tab
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, backgroundColor: " #ff4757" }}
                    transition={{ duration: 0.3 }}
                  >
                    View Project →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    
     {/* Certifications */}
        
     <section id="certifications" className={`certifications-section ${darkMode ? "dark" : "light"}`}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="certifications-title"
      >
        🎓  Certifications
      </motion.h2>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="certification-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              rotateX: 10,
              boxShadow: darkMode
                ? "0px 10px 30px rgba(0, 255, 150, 0.7)"
                : "0px 10px 30px rgba(255, 140, 0, 0.7)",
            }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => setSelectedCert(cert)}
          >
            <div className="certification-card-inner">
              <div className="certification-card-front">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certification-image"
                />
                <h3>{cert.title}</h3>
                <p className="provider">{cert.provider}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <motion.div
            className={`modal-content ${darkMode ? "dark" : "light"}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={() => setSelectedCert(null)}>✖</button>
            <h2>{selectedCert.title}</h2>
            <p><strong>Provided By:</strong> {selectedCert.provider}</p>
            <img src={selectedCert.image} alt={selectedCert.title} className="modal-image" />
            <p>{selectedCert.description}</p>
            <motion.a
              href={selectedCert.link}
              className="certification-button"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, backgroundColor: "#1db954" }}
              transition={{ duration: 0.3 }}
            >
              View Certificate →
            </motion.a>
          </motion.div>
        </div>
      )}
    </section>

      <section id="contact" className="contact-section">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="contact-title"
        >
          📬 Get In Touch
        </motion.h2>

        <div className="contact-container">
          {/* Contact Info Card */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 20px rgba(0, 255, 255, 0.5)",
            }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={profilePic}
              alt="Profile"
              className="contact-profile-pic"
            />
            <h3>Rajesh Yanamadala</h3>
            <p className="c1 ">
              <strong>📍 Location:</strong> Hyderabad, India
            </p >
            <p className="c1">
              <strong>📧 Email:</strong> rajeshyanamadala2000@gmail.com
            </p>
            <p className="c1">
              <strong>📞 Contact:</strong> +91 9346843156
            </p>
            <p className="c1">Feel free to reach out for collaborations or opportunities!!!</p>
          </motion.div>

          {/* Social Links & Contact Form Card */}
          <motion.div
            className="social-contact-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 20px rgba(255, 105, 180, 0.5)",
            }}
            transition={{ duration: 0.5 }}
          >
            <h3>Connect with Me 🌐</h3>
            <div className="social-icons">
              <motion.a
                href="https://github.com/yanamadalaraju"
                target="_blank"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/yanamadala-rajesh-999834233/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://wa.me/9346843156"
                target="_blank"
                whileHover={{ scale: 1.2 }}
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/__rajesh__21_/?hl=en"
                target="_blank"
                whileHover={{ scale: 1.2 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="mailto:rajeshyanamadala2000@gmail.com"
                whileHover={{ scale: 1.2 }}
              >
                <FaEnvelope />
              </motion.a>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
      <motion.form onSubmit={handleSubmit} className="contact-form">
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          whileFocus={{ scale: 1.05, borderColor: "#ff4757" }}
          required
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          whileFocus={{ scale: 1.05, borderColor: "#ff4757" }}
          required
        />
        <motion.input
          type="tel"
          name="phone"
          placeholder="Your Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          whileFocus={{ scale: 1.05, borderColor: "#ff4757" }}
          required
        />
        <motion.textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          whileFocus={{ scale: 1.05, borderColor: "#ff4757" }}
          required
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.1, backgroundColor: "#ff4757" }}
          disabled={loading} // Disable button while loading
        >
          {loading ? "Sending..." : "Send Message 🚀"}
        </motion.button>
      </motion.form>

      {statusMessage && (
        <motion.p
          className="status-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {statusMessage}
        </motion.p>
      )}
    </div>

            {/* Thank You Message */}
            <motion.p
              className="thank-you-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              🙏 Thank you for visiting! Looking forward to connecting with you.
              ✨
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default App;
