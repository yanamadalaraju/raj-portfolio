import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSun,
  FaMoon,
  FaBox,
  FaRobot,
  FaDatabase,
  FaGithub,
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
import profilePic1 from "../src/images/images.jpeg";
import profilePic2 from "../src/images/images (1).jpeg";
import profilePic3 from "../src/images/frontend.jpg";
import profilePic4 from "../src/images/program.jpg";
// import profilePic5 from "../src/images/side.avif";
import stockImage from "../src/images/Stock_management.jpg";
import chatbottImage from "../src/images/Ai_chat_bot.png";
import databaseeImage from "../src/images/Ai_db_agent.jpg";
import "./Projects.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [popupType, setPopupType] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);
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
      description:
        "Developed a Stock Management System using React, Bootstrap, and Node.js, ensuring efficient inventory tracking and management.LOGIN CREDENTIALS FOR { Admin } --->'Email:admin@gmail.com',password:admin@123, LOGIN CREDENTIAL FOR { Users } --->'rajesh@gmail.com',password:456 ",
      image: stockImage,
      link: "http://175.29.21.7:81", // Direct external link
      icon: <FaBox size={24} color="#ff4757" />,
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

  // Card Data
  const personalInfo = {
    title: "Personal Info",
    details: [
      "👤 Name: Rajesh",
      "📍 Location: India",
      "📧 Email: rajesh@example.com",
      "📞 Phone: +91 9876543210",
    ],
  };

  const educationInfo = {
    title: "Educational Details",
    details: [
      "🎓 Degree: B.Tech in Civil Engineering",
      "🏫 University: Geethanjali College Of Engineering And Technology",
      "📅 Year: 2023",
      "💻 Certification: Python Fullstack Developer - Itvedanth",
    ],
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      setStatusMessage(response.data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage("Failed to send message. Please try again.");
    }
  };

  return (
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
              {["Home", "About", "Skills", "Projects", "Contact"].map(
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
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="home-title"
          >
            Hi, I'm <span className="highlight-1">Rajesh</span> 👋
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
          >
            <a
              href="/resume.pdf"
              download="Raju_Resume.pdf"
              className="cta-button"
            >
              View My Resume 📄
            </a>
          </motion.div>
        </motion.div>

        {/* Background Effects */}
        <div className="floating-shapes"></div>
        <div className="floating-glow"></div>
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
                applications** and seamless user experiences.
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
          My Skills & Tech Stack 🚀
        </motion.h2>

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
      </section>

      <section id="projects" className="projects-section">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="projects-title"
        >
          🚀 My Awesome Projects
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
                    whileHover={{ scale: 1.1, backgroundColor: "#ff4757" }}
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
            <p>
              <strong>📍 Location:</strong> Hyderabad, India
            </p>
            <p>
              <strong>📧 Email:</strong> rajeshyanamadala2000@gmail.com
            </p>
            <p>
              <strong>📞 Contact:</strong> +91 9346843156
            </p>
            <p>Feel free to reach out for collaborations or opportunities!</p>
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
                >
                  Send Message 🚀
                </motion.button>
              </motion.form>
              {statusMessage && (
                <p className="status-message">{statusMessage}</p>
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
  );
};

export default App;
