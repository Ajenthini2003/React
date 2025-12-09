// 
import React from "react";

export default function Day0303() {
  return (
    <>
      {/* INLINE CSS IN SAME FILE */}
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: #fff;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          padding: 20px 40px;
          background: orange;
          color: #fff;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 25px;
          cursor: pointer;
        }

        .hero {
          position: relative;
          text-align: center;
          padding: 40px 0;
        }

        .hero-img {
          width: 100%;
          height: 450px;
          object-fit: cover;
          border-bottom: 5px solid #ffce5d;
        }

        .hero-text {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 32px;
          text-shadow: 0 0 10px black;
        }

        .learn-btn {
          padding: 12px 28px;
          background: #ffa600;
          border: none;
          color: white;
          font-size: 16px;
          border-radius: 6px;
          margin-top: 12px;
          cursor: pointer;
        }

        /* ABOUT */
        .about {
          padding: 60px 80px;
        }

        .about-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .about-img {
          width: 320px;
        }

        /* SKILLS */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .skill-box {
          background: #ffe18a;
          padding: 20px;
          border-radius: 10px;
        }

        .skill-box ul {
          padding-left: 20px;
        }

        /* PROJECTS */
        .project-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 30px;
        }

        .project-card {
          background: #ffd66b;
          padding: 40px;
          text-align: center;
          border-radius: 10px;
          font-weight: bold;
        }

        /* CONTACT */
        .contact-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .contact-img {
          width: 300px;
        }

        .contact-boxes {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }

        .box {
          background: #ffe18d;
          padding: 20px;
          border-radius: 10px;
          width: 180px;
        }

      `}</style>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Archana</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <img
          src="YOUR_HERO_IMAGE"
          alt="developer"
          className="hero-img"
        />
        <div className="hero-text">
          I am a full stack developer
          <br />
          <button className="learn-btn">Learn More</button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About me 👋</h2>

        <div className="about-row">
          <div className="about-text">
            <h3>Hello Guys, <br /> I am Ajenthini</h3>
            <p>
              I am a full-stack developer. I enjoy building efficient and
              user-friendly web applications and constantly learning new
              technologies to improve my skills.
            </p>
          </div>

          <img
            src="YOUR_ABOUT_IMAGE"
            alt="about"
            className="about-img"
          />
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills" style={{ padding: "60px 80px" }}>
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="skill-box">
            <h3>Front-End</h3>
            <ul>
              <li>HTML5, JavaScript</li>
              <li>React.js</li>
              <li>Responsive Design</li>
              <li>UI/UX Basics</li>
              <li>Tailwind / Bootstrap</li>
            </ul>
          </div>

          <div className="skill-box">
            <h3>Back-End</h3>
            <ul>
              <li>Node.js & Express.js</li>
              <li>REST APIs</li>
              <li>MySQL / MongoDB</li>
              <li>JWT Authentication</li>
            </ul>
          </div>

          <div className="skill-box">
            <h3>Version Control</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>

          <div className="skill-box">
            <h3>Other Skills</h3>
            <ul>
              <li>Problem Solving</li>
              <li>Algorithms</li>
              <li>Web Security Basics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" style={{ padding: "60px 80px" }}>
        <h2>Projects</h2>

        <div className="project-grid">
          <div className="project-card">UI/UX Design</div>
          <div className="project-card">UI/UX Design</div>
          <div className="project-card">Expense Analyzer</div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" style={{ padding: "60px 80px" }}>
        <h2>Contact Me</h2>

        <div className="contact-section">
          <img
            src="YOUR_CONTACT_IMAGE"
            alt="contact"
            className="contact-img"
          />

          <div className="contact-info">
            <p>Feel free to reach out to me for any inquiries or collaborations.</p>

            <div className="contact-boxes">
              <div className="box">
                <h4>Visit Me</h4>
                <p>123 Ocean View Street, Batticaloa, Sri Lanka</p>
              </div>

              <div className="box">
                <h4>Call Me</h4>
                <p>+94 71 234 5678</p>
              </div>

              <div className="box">
                <h4>Email Me</h4>
                <p>ajenthini@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
