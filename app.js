import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">VL</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h2>Hi, I'm <span>Vijaya Lakshmi G</span></h2>
        <p>Java Developer | Full Stack Engineer | API Innovator</p>
        <a href="#projects" className="btn">Explore My Work</a>
      </header>

      {/* About */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          Motivated Electronics and Communication Engineering student with a strong foundation in Core Java, J2EE, SQL, and database systems. Experienced in bridging hardware and software through embedded systems projects. Actively seeking Software Development roles such as Java Developer, Software Engineer, or Full Stack Developer.
        </p>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill">Core Java</div>
          <div className="skill">JDBC & Servlets</div>
          <div className="skill">SQL & Databases</div>
          <div className="skill">React.js & Node.js</div>
          <div className="skill">HTML & CSS</div>
          <div className="skill">Git & IntelliJ IDEA</div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <h2>Experience</h2>
        <div className="card">
          <h3>Full Stack Web Developer Intern</h3>
          <p><strong>VrishankSoft (OPC) Pvt. Ltd.</strong> | Feb 2026 - May 2026</p>
          <ul>
            <li>Developed API Testing & Collaboration Platform using React.js, Node.js, Express.js, MongoDB.</li>
            <li>Built secure REST APIs with JWT authentication.</li>
            <li>Designed responsive frontend interfaces and integrated backend services.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="card">
          <h3>API Testing & Collaboration Platform</h3>
          <p>Postman-like web app with JWT authentication, collections, request versioning, and AI-assisted debugging.</p>
        </div>
        <div className="card">
          <h3>Geofencing Smart Signal System</h3>
          <p>Real-time traffic signal automation for emergency vehicles using RFID and ESP32.</p>
        </div>
        <div className="card">
          <h3>Low-Power GSM/GPS Tracker</h3>
          <p>Energy-efficient location tracking device with optimized power consumption and embedded firmware.</p>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications">
        <h2>Certifications</h2>
        <p>Java Masterclass 2025: 130+ Hours of Expert Lessons - Udemy</p>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:vijayalakshmie171@gmail.com">vijayalakshmie171@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/vijaya-lakshmi-g" target="_blank" rel="noreferrer">linkedin.com/in/vijaya-lakshmi-g</a></p>
        <p>GitHub: <a href="https://github.com/vijayalakshmie171-lgtm" target="_blank" rel="noreferrer">github.com/vijayalakshmie171-lgtm</a></p>
      </section>

      <footer>
        <p>© 2026 Vijaya Lakshmi G | Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
